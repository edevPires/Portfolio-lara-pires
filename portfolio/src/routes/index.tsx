import clsx from 'clsx';
import { createFileRoute } from '@tanstack/react-router';
import FullSection from '../components/layout/full-section';
import ResponsiveSection from '../components/layout/responsive-section';
import HeroText from '../components/ui/hero-text';
import HeroTextSmall from '../components/ui/hero-text-small';
import Lara from '../assets/logo/lara.png';
import { ChevronsDown } from 'lucide-react';
import GradientButton from '../components/ui/gradient-button';
import LogoRounded from '../assets/logo/logo_rounded.png';
import BotaoCerto from '../assets/botao_certo.png';
import ModalLayout from '../components/layout/modal-layout'
import ContactForm from '../components/forms/contact-form'

import ProjectCard from '../components/ui/project-card';
import projects from '../data/projects.json';
import { useState, useEffect } from 'react';
import { useScrollToTop } from '../hooks/use-scroll-to-top';

import SobreMim from '../assets/Sobre_mim_foto.png'

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  useScrollToTop()

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const open = () => setIsOpen(true);
    window.addEventListener('open-contact', open);
    return () => window.removeEventListener('open-contact', open);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <>
      <ModalLayout isOpen={isOpen} onClose={handleCloseModal}>
        <ContactForm />
      </ModalLayout>
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
                'bg-gradient-to-tr from-[#50acd8] via-[#b042d8] to-[#d73b98] blur-3xl z-[1] transition-opacity duration-200 ease',
                isHovered ? "opacity-100" : "opacity-0"
              )}
              style={{
                transform: `translate(-50%, -50%) translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              }}
            />
          </div>
        </div>
      </ResponsiveSection>



      <ResponsiveSection id="sobre">
        <div className={clsx(
          "flex flex-col px-5 2xl:px-64 py-20"
        )}>
          <div className='flex flex-nowrap text-secondary text-6xl lg:text-7xl font-altone-bold font-extralight mb-10'>
            <h1 className='w-fit'>Sobre </h1>
            <h1 className='relative w-fit ml-3'>
              mim
              <img src={BotaoCerto} alt="Botão Certo"className='absolute left-1/2 -translate-x-1/2 top-1 lg:top-1 w-3 lg:w-4 h-auto'/>
            </h1>
          </div>
          <div className='flex flex-col lg:flex-row gap-10'>
            <img src={SobreMim} alt="Sobre Mim" className='w-full md:w-1/3 h-auto' />
            <div className='flex flex-col grow gap-5 text-xl text-justify font-bahnchrift font-extralight leading-7'>
              <span>
                Tenho 5 anos de experiência profissional em Design. Atualmente trabalho como Diretora de Arte freelance, focando principalmente na expansão constante da minha criatividade.
              </span>
              <span>
                Em 2023 ganhei o concurso  "Mestre das Marcas", o que me permitiu refletir sobre a qualidade do meu trabalho.
              </span>
              <span>
                Meu maior diferencial é o conhecimento nos diversos ramos artísticos, uma vez que entendo de modelagem 3D, motion design, fotografia, ilustração (digital/manual), programação web e outros, por já ter realizado trabalhos nessas áreas. Assim, tenho maior facilidade para comunicação em equipe, mesmo esta sendo multidisciplinar. Além disso, essa gama de repertório permite que eu me inspire nos diversos campos artísticos mencionados e proporcione um produto único para meus clientes.
              </span>
            </div>
          </div>
          <div className='relative flex justify-center grow mt-20 mb-10'>
            <GradientButton 
              label='Entre em contato' 
              onClick={handleOpenModal}
              className={clsx(
                'py-4 px-12',
                'hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out'
              )}
            />
            <img src={LogoRounded} alt='Lara' className='absolute hidden lg:block right-0 top-1/2 -translate-y-1/2 w-20 lg:w-26 h-auto pl-1 z-[1]' />
          </div>
        </div>
      </ResponsiveSection>
    </>
  );
}