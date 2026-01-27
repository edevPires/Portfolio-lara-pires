import React, { useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import clsx from 'clsx';
import ProjectCard from './project-card';

interface Project {
  path: string;
  name: string;
  tags: string[];
  url: string;
  id?: number;
}

interface ProjectCarouselProps {
  projects: Project[];
  className?: string;
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects, className }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    dragFree: false,
    loop: false,
    containScroll: 'trimSnaps',
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollToIndex = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
      }
    },
    [emblaApi]
  );

  return (
    <div className={clsx('w-full', className)}>
      {/* Carousel Container */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-5 -ml-5">
          {projects.map((project) => (
            <div
              key={project.id || project.name}
              className="flex-[0_0_85%] pl-5"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* Indicators/Dots */}
      {scrollSnaps.length > 1 && (
        <div className="mt-5 flex items-center justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={clsx(
                'h-2.5 rounded-full transition-all duration-300',
                index === selectedIndex
                  ? 'bg-secondary w-8'
                  : 'bg-secondary/30 w-2.5 hover:bg-secondary/50'
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCarousel;
