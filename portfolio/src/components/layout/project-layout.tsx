import React from "react";
import clsx from "clsx";
import LogoRounded from "../../assets/logo/logo_rounded.png"
import GradientButton from "../ui/gradient-button";

interface Project {
    name: string;
    date: string;
    tags: string[];
    tags_formated: string;
    path: string;
    text: string[],
    images: string[]
  }

interface ProjectLayoutProps {
    project: Project;
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({project}) => {
    return (
        
        <div className='flex flex-col px-5 lg:px-40 2xl:px-72'>
            <div className={clsx(
                "flex flex-col sm:flex-row gap-10 text-secondary mb-10",
            )}>
                <div className={clsx(
                    "flex flex-col"
                )}>
                    <h1 className="text-6xl sm:text-8xl font-mont-bold">{project.name}</h1>
                    <div className="flex flex-col">
                        <span className='text-lg font-mont-bold'>{project.date}</span>
                        <span className='text-lg font-altone'>{project.tags_formated}</span>   
                    </div>
                </div>
                <div className={clsx(
                    "flex flex-col grow font-altone  gap-5"
                )}>
                    {project.text.map((text) => (
                        <span className='text-justify' key={text}>
                            {text}
                        </span>
                    ))}
                </div>
            </div>
            <div className='relative flex flex-col gap-8'>
                {project.images.map((image) => (
                    <img src={image} alt="01"  className='w-full h-auto rounded-xl' key={image}/>
                ))}
                <img src={LogoRounded} alt='Lara' className='absolute right-0 bottom-0 w-24 lg:w-32 h-auto pl-1 z-[1] transform translate-y-1/2' />
            </div>
            <div className='flex justify-center my-20'>
                <GradientButton label='Veja Sua Marca' className='px-10 py-3'/>
            </div>
      </div>
    )
};

export default ProjectLayout;