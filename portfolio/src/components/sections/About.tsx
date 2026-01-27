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
        "flex flex-col px-12 2xl:px-[350px] py-20"
      )}>
        <div className='flex flex-nowrap justify-center text-secondary text-4xl lg:text-6xl font-mortend-bold font-extra mb-10'>
          <h1 className='w-fit'>Sobre mim</h1>
        </div>
        <div className='flex flex-col lg:flex-row lg:items-start gap-10'>
          <div className='relative'>
            <img
              src={SobreMim}
              alt="Sobre Mim"
              className='w-full lg:w-auto lg:max-w-xs h-auto object-contain rounded-4xl'
            />
            <img src={Tagline} alt="Tagline" className='size-sm absolute bottom-[5%] left-0 w-[45%] h-auto transform -translate-x-1/2 animate-rotate-360'/>
          </div>

          <div className='flex flex-col grow gap-5 text-secondary text-xl text-justify font-bahnchrift font-extralight leading-7'>
            <span>
              Diretora de Arte e Designer Visual com 7 anos de experiência, dedicada a criar soluções que unem estética, propósito e funcionalidade.
            </span>
            <span>
              Produtora Cultural à frente do projeto "Montando Fábulas", uma iniciativa que usa jogos digitais para incentivar crianças a descobrir o prazer da leitura.
            </span>
            <span>
              Em 2023 ganhei o desafio Mestre das Marcas.
            </span>
            <span>
              Acredito que cada projeto é um quebra-cabeça único. Meu grande diferencial é ter uma abordagem multidisciplinar que conecta minha paixão pelas artes manuais às mais modernas ferramentas digitais, me permitindo encontrar as peças certas para dar vida a cada ideia. É essa união que me permite encontrar soluções únicas e dar vida a cada ideia. Minha caixa de ferramentas para isso inclui:
            </span>
          </div>
        </div>
        <div ref={circlesRef} className='relative flex justify-center items-center my-20 h-48 lg:h-32'>
          <div className='relative w-full h-48 lg:h-32 mx-auto'>
            {/* CÍRCULO AZUL */}
            <div className={clsx('absolute w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-white z-0', isVisible && 'animate-circle-split-1')} style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}></div>
            <div className={clsx('absolute w-16 h-16 lg:w-24 lg:h-24 rounded-full mix-blend-multiply z-10', isVisible && 'animate-circle-split-1')} style={{ backgroundColor: '#00ADEF', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}></div>
            {/* Texto Azul - Mobile */}
            <div className={clsx('lg:hidden absolute -top-2 left-1/2 -translate-x-1/2 text-center text-secondary font-bahnchrift text-sm z-20', isVisible && 'animate-text-fade-in')} style={{ whiteSpace: 'nowrap' }}>
              Identidade Visual<br/>e Direção de Arte
            </div>
            {/* Texto Azul - Desktop */}
            <div className={clsx('hidden lg:block absolute text-secondary font-bahnchrift text-xl z-20', isVisible && 'animate-text-fade-in')} style={{ left: 'calc(50% - 330px)', top: '50%', transform: 'translateY(-50%)', whiteSpace: 'nowrap' }}>
              Identidade Visual<br/>e Direção de Arte
            </div>

            {/* CÍRCULO AMARELO */}
            <div className={clsx('absolute w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-white z-0', isVisible && 'animate-circle-split-3')} style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}></div>
            <div className={clsx('absolute w-16 h-16 lg:w-24 lg:h-24 rounded-full mix-blend-multiply z-10', isVisible && 'animate-circle-split-3')} style={{ backgroundColor: '#FEF200', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}></div>
            {/* Texto Amarelo - Mobile */}
            <div className={clsx('lg:hidden absolute bottom-[8%] left-[-10px] text-secondary font-bahnchrift text-sm z-20', isVisible && 'animate-text-fade-in')} style={{ whiteSpace: 'nowrap' }}>
              Modelagem 3D<br/>e Motion Design
            </div>
            {/* Texto Amarelo - Desktop */}
            <div className={clsx('hidden lg:block absolute text-secondary font-bahnchrift text-xl z-20', isVisible && 'animate-text-fade-in')} style={{ left: 'calc(50% + 70px)', top: '50%', transform: 'translateY(-50%)', whiteSpace: 'nowrap' }}>
              Modelagem 3D<br/>e Motion Design
            </div>

            {/* CÍRCULO ROSA */}
            <div className={clsx('absolute w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-white z-0', isVisible && 'animate-circle-split-2')} style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}></div>
            <div className={clsx('absolute w-16 h-16 lg:w-24 lg:h-24 rounded-full mix-blend-multiply z-10', isVisible && 'animate-circle-split-2')} style={{ backgroundColor: '#ED008C', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}></div>
            {/* Texto Rosa - Mobile */}
            <div className={clsx('lg:hidden absolute bottom-[8%] text-secondary font-bahnchrift text-sm z-20', isVisible && 'animate-text-fade-in')} style={{ whiteSpace: 'nowrap', right: '-20px' }}>
              Ilustração<br/>(Digital e Manual)
            </div>
            {/* Texto Rosa - Desktop */}
            <div className={clsx('hidden lg:block absolute text-secondary font-bahnchrift text-xl z-20', isVisible && 'animate-text-fade-in')} style={{ left: 'calc(50% + 470px)', top: '50%', transform: 'translateY(-50%)', whiteSpace: 'nowrap' }}>
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
        </div>
      </div>
    </ResponsiveSection>
  );
};

export default About;