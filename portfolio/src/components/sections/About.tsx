import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import ResponsiveSection from '../layout/responsive-section';
import GradientButton from '../ui/gradient-button';
import LogoRounded from '../../assets/logo/logo_rounded.png';
import SobreMim from '../../assets/foto_sobre_min.jpg';
import Tagline from '../../assets/logo/tagline.png'

interface AboutProps {
  onOpenContact: () => void;
}

const About: React.FC<AboutProps> = ({ onOpenContact }) => {
  const [isVisible, setIsVisible] = useState(false);
  const circlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (circlesRef.current) {
      observer.observe(circlesRef.current);
    }

    return () => {
      if (circlesRef.current) {
        observer.unobserve(circlesRef.current);
      }
    };
  }, []);

  return (
    <ResponsiveSection id="sobre">
      <div className={clsx(
        "flex flex-col px-5 2xl:px-64 py-20"
      )}>
        <div className='flex flex-nowrap justify-center text-secondary text-4xl lg:text-7xl font-mortend-bold font-extra mb-10'>
          <h1 className='w-fit'>Sobre mim</h1>
        </div>
        <div className='flex flex-col lg:flex-row lg:items-start gap-10'>
          <div className='relative'>
            <img
              src={SobreMim}
              alt="Sobre Mim"
              className='w-full lg:w-auto lg:max-w-sm h-auto object-contain rounded-xl'
            />
            <img src={Tagline} alt="Tagline" className='size-sm absolute bottom-[5%] left-0 w-2/4 h-auto transform -translate-x-1/2 animate-rotate-360'/>
          </div>

          <div className='flex flex-col grow gap-5 text-secondary text-xl text-justify font-bahnchrift font-extralight leading-7'>
            <span>
              Diretora de Arte e Designer Visual com 7 anos de experiência, dedicada a criar soluções que unem estética, propósito e funcionalidade.
            </span>
            <span>
              Produtora Cultural à frente do projeto "Montando Fábulas", uma iniciativa que usa jogos digitais para incentivar crianças a descobrir o prazer da leitura.
            </span>
            <span>
              Minha trajetória profissional é validada por projetos com clientes como Agetran e o Instituto Federal de Educação, e pelo prêmio no desafio Mestre das Marcas em 2023. Atualmente, com uma base em Design Gráfico, aprofundo meus conhecimentos em Design Visual na UFRGS, uma das instituições mais renomadas da área.
            </span>
            <span>
              Acredito que cada projeto é um quebra-cabeça único. Meu grande diferencial é ter uma abordagem multidisciplinar que conecta minha paixão pelas artes manuais às mais modernas ferramentas digitais, me permitindo encontrar as peças certas para dar vida a cada ideia. É essa união que me permite encontrar soluções únicas e dar vida a cada ideia. Minha caixa de ferramentas para isso inclui:
            </span>
            <span className='flex items-center gap-3'>
              <span className='size-2 rounded-full bg-secondary'></span>
              Identidade Visual e Direção de Arte
            </span>
            <span className='flex items-center gap-3'>
              <span className='size-2 rounded-full bg-secondary'></span>
              lustração (Digital e Manual)
            </span>
            <span className='flex items-center gap-3'>
              <span className='size-2 rounded-full bg-secondary'></span>
              Modelagem 3D e Motion Design
            </span>
            <span>
              Estou sempre aberta a novos desafios e colaborações. Vamos conversar sobre como podemos tirar suas ideias do papel!
            </span>
          </div>
        </div>
        <div ref={circlesRef} className='relative flex justify-center items-center my-20 h-32'>
          <div className='relative w-full h-32 mx-auto'>
            <div className={clsx('absolute w-24 h-24 rounded-full bg-white z-0', isVisible && 'animate-circle-split-1')} style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}></div>
            <div className={clsx('absolute w-24 h-24 rounded-full mix-blend-multiply z-10', isVisible && 'animate-circle-split-1')} style={{ backgroundColor: '#00ADEF', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}></div>
            <div className={clsx('absolute text-secondary font-bahnchrift text-xl z-20', isVisible && 'animate-text-fade-in')} style={{ left: 'calc(50% - 330px)', top: '50%', transform: 'translateY(-50%)', whiteSpace: 'nowrap' }}>
              Identidade Visual<br/>e Direção de Arte
            </div>

            <div className={clsx('absolute w-24 h-24 rounded-full bg-white z-0', isVisible && 'animate-circle-split-3')} style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}></div>
            <div className={clsx('absolute w-24 h-24 rounded-full mix-blend-multiply z-10', isVisible && 'animate-circle-split-3')} style={{ backgroundColor: '#FEF200', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}></div>
            <div className={clsx('absolute text-secondary font-bahnchrift text-xl z-20', isVisible && 'animate-text-fade-in')} style={{ left: 'calc(50% + 70px)', top: '50%', transform: 'translateY(-50%)', whiteSpace: 'nowrap' }}>
              Modelagem 3D<br/>e Motion Design
            </div>

            <div className={clsx('absolute w-24 h-24 rounded-full bg-white z-0', isVisible && 'animate-circle-split-2')} style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}></div>
            <div className={clsx('absolute w-24 h-24 rounded-full mix-blend-multiply z-10', isVisible && 'animate-circle-split-2')} style={{ backgroundColor: '#ED008C', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}></div>
            <div className={clsx('absolute text-secondary font-bahnchrift text-xl z-20', isVisible && 'animate-text-fade-in')} style={{ left: 'calc(50% + 470px)', top: '50%', transform: 'translateY(-50%)', whiteSpace: 'nowrap' }}>
              Ilustração<br/>(Digital e Manual)
            </div>
          </div>
        </div>
        <div className='relative flex justify-center grow mb-10'>
          <GradientButton
            label='Entre em contato'
            onClick={onOpenContact}
            className={clsx(
              'py-4 px-12',
              'hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out'
            )}
          />
          <img
            src={LogoRounded}
            alt='Lara'
            className='absolute hidden lg:block right-0 top-1/2 -translate-y-1/2 w-20 lg:w-26 h-auto pl-1 z-[1]'
          />
        </div>
      </div>
    </ResponsiveSection>
  );
};

export default About;