import React, { useState } from 'react';
import clsx from 'clsx';
import ResponsiveSection from '../layout/responsive-section';
import ProjectCard from '../ui/project-card';
import projects from '../../data/projects.json';

const Works: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <ResponsiveSection>
      <div className='grid grid-cols-1 xl:grid-cols-3 px-5 2xl:px-64 py-10 gap-5 select-none'>
        {Object.values(projects).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        <div
          className='relative col-span-2 border border-secondary/10 rounded-2xl overflow-hidden bg-primary hidden xl:block'
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h1
            className={clsx(
              'absolute inset-0 flex items-center justify-center',
              'font-mont-bold text-primary text-6xl z-[2]'
            )}
          >
            Sua identidade <br />pode ser a próxima
          </h1>
          <div
            className={clsx(
              'absolute size-56 rounded-full pointer-events-none',
              'bg-gradient-to-tr from-[#FB26B4] via-[#F77746] to-[#E6B300] blur-3xl z-[1] transition-opacity duration-200 ease',
              isHovered ? "opacity-100" : "opacity-0"
            )}
            style={{
              transform: `translate(-50%, -50%) translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            }}
          />
        </div>
      </div>
    </ResponsiveSection>
  );
};

export default Works;