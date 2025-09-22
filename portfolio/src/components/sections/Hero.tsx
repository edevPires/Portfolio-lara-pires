import React from 'react';
import FullSection from '../layout/full-section';
import HeroText from '../ui/hero-text';
import HeroTextSmall from '../ui/hero-text-small';
import Tagline from '../../assets/logo/tagline.png';
import LogoBranca from '../../assets/logo/logo_branca.png';
import ID from '../../assets/logo/id.png';
import BgImage from '../../assets/bg.jpg';

const Hero: React.FC = () => {
  return (
    <FullSection>
      <div
        className='relative flex flex-col lg:flex-row items-center justify-center h-full gap-4 lg:gap-15 pb-25 lg:pb-0 overflow-hidden'
        style={{
          backgroundImage: `url(${BgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className='absolute size-[40rem] bg-radial from-secondary/20 from-0% to-trasparent to-60% top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 rounded-full '></div>
        <div className='absolute size-[40rem] bg-radial from-secondary/20 from-0% to-trasparent to-60% bottom-0 left-1/3 transform translate-y-1/2 -translate-x-1/2 rounded-full '></div>
        <div className='relative flex'>
          <img
            src={Tagline}
            alt="circle"
            className='w-xs lg:w-md h-auto animate-rotate-360 px-10'
          />
          <img
            src={LogoBranca}
            alt="logo"
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-auto'
          />
          <img
            src={ID}
            alt="logo"
            className='absolute bottom-0 left-0t w-[15%] h-auto'
          />
        </div>
        <div className='flex flex-col lg:min-w-[35rem] lg:min-h-[19rem]'>
          <HeroText label='Lara' delay={0}/>
          <HeroText label='Pires' delay={500}/>
          <div className='flex justify-end'>
            <HeroTextSmall label='Designer Visual '/>
          </div>
        </div>
        <div className='absolute bottom-20 text-2xl left-1/2 transform -translate-x-1/2 font-bahnchrift text-secondary'>
          <span className='text-nowrap'>Bem-vindo ao meu site!</span>
        </div>
      </div>
    </FullSection>
  );
};

export default Hero;