import { createFileRoute } from '@tanstack/react-router';
import FullSection from '../components/layout/full-section';
import ResponsiveSection from '../components/layout/responsive-section';
import HeroText from '../components/ui/hero-text';
import HeroTextSmall from '../components/ui/hero-text-small';
import Lara from '../assets/logo/lara.png';
import { ChevronsDown } from 'lucide-react';
import GradientButton from '../components/ui/gradient-button';
import LogoRounded from '../assets/logo/logo_rounded.png';
import Footer from '../components/ui/footer';

import ProjectCard from '../components/ui/project-card';
import projects from '../data/projects.json';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <FullSection className='pt-30 lg:pt-20'>
        <div className='relative flex flex-col lg:flex-row items-center justify-center h-full gap-4 lg:gap-15 pb-25 lg:pb-0'>
          <div className='flex flex-row lg:flex-col items-end w-fit'>
            <HeroText label='Olá,' className='leading-20 lg:leading-none' />
            <div className='flex w-full flex-col justify-center'>
              <HeroTextSmall label='Bem-vindo ao' />
              <HeroTextSmall label='meu site' />
            </div>
          </div>
          <div className='relative h-fit'>
            <img src={Lara} alt='Lara' className='relative w-56 lg:w-80 h-auto pl-1 z-[2] drop-shadow-current drop-shadow-sm' />
            <img src={LogoRounded} alt='Lara' className='absolute left-4 -bottom-4 w-20 lg:w-26 h-auto pl-1 z-[1] animate-rotate-360' />
          </div>
          <div className='flex flex-col w-fit'>
            <HeroTextSmall label='Eu sou a' />
            <HeroText label='Lara' className='leading-20 lg:leading-26' />
            <HeroText label='Pires' className='leading-20 lg:leading-26' />
            <GradientButton
              label='Diretora de Arte'
              className='lg:w-3/4 w-full mt-1 py-2'
            />
          </div>
          <div className='absolute bottom-1 left-1/2 transform -translate-x-1/2  flex flex-col justify-center items-center font-bahnchrift'>
            <span className='text-lg'>
              Trabalhos
            </span>
            <ChevronsDown className='size-8' />
          </div>
        </div>
      </FullSection>



      <ResponsiveSection>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 px-5 sm:px-24 py-10 gap-4 sm:gap-3'>
          {Object.values(projects).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </ResponsiveSection>
    </>
  );
}