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
        <div className='flex flex-col lg:flex-row gap-10'>
          <img
            src={SobreMim}
            alt="Sobre Mim"
            className='w-full md:w-1/3 h-auto'
          />
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