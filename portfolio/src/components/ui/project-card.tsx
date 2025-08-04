import React, { useState } from "react";
import clsx from "clsx";

interface Project {
  path: string;
  name: string;
  tags: string[];
}

interface ProjectCardProps {
  className?: string;
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ className, project }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleToggleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      onClick={handleToggleClick}
      className={clsx(
        `group relative flex flex-col justify-end grow h-[25rem] rounded-2xl overflow-hidden`,
        `hover:cursor-pointer`,
        className,
      )}
    >
      <div
        className={clsx(
          `absolute inset-0 bg-cover bg-center`,
          `transition-transform duration-500 ease-in-out`,
          `group-hover:scale-110`,
          isClicked && `scale-110`, // Aplica o zoom quando clicado
        )}
        style={{ backgroundImage: `url('${project.path}')` }}
      />
      <div
        className={clsx(
          `relative opacity-0 h-3/4 flex flex-col justify-end p-5 z-[1]`,
          `transition-opacity duration-300`,
          `group-hover:opacity-100`,
          `bg-linear-to-t from-black from-5% to-transparent`,
          isClicked && `opacity-100`, // Aplica a opacidade quando clicado
        )}
      >
        <h1 className="text-2xl text-start text-primary font-mont-bold w-full">
          {project.name}
        </h1>
        <div className="flex gap-2 flex-wrap">
          {project.tags.map((tag) => (
            <div
              key={tag}
              className={clsx(
                `flex px-4 py-1 justify-center items-center text-primary text-md font-mont-extralight border border-primary rounded-full`,
              )}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;