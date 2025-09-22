import React from 'react';
import clsx from 'clsx';
import ResponsiveSection from '../layout/responsive-section';
import GradientButton from '../ui/gradient-button';
import LogoRounded from '../../assets/logo/logo_rounded.png';
import BotaoCerto from '../../assets/botao_certo.png';
import SobreMim from '../../assets/Sobre_mim_foto.png';

interface AboutProps {
  onOpenContact: () => void;
}

const About: React.FC<AboutProps> = ({ onOpenContact }) => {
  return (
    <ResponsiveSection id="sobre">
      <div className={clsx(
        "flex flex-col px-5 2xl:px-64 py-20"
      )}>
        <div className='flex flex-nowrap text-secondary text-6xl lg:text-7xl font-altone-bold font-extralight mb-10'>
          <h1 className='w-fit'>Sobre </h1>
          <h1 className='relative w-fit ml-3'>
            mim
            <img
              src={BotaoCerto}
              alt="Botão Certo"
              className='absolute left-1/2 -translate-x-1/2 top-1 lg:top-1 w-3 lg:w-4 h-auto'
            />
          </h1>
        </div>
        <div className='flex flex-col lg:flex-row lg:items-start gap-10'>
          <img
            src={SobreMim}
            alt="Sobre Mim"
            className='w-full lg:w-auto lg:max-w-sm h-auto object-contain'
          />
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
        <div className='relative flex justify-center grow mt-20 mb-10'>
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