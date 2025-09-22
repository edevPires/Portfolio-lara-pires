import { createFileRoute } from '@tanstack/react-router';
import ModalLayout from '../components/layout/modal-layout';
import ContactForm from '../components/forms/contact-form';
import Hero from '../components/sections/Hero';
import Works from '../components/sections/Works';
import About from '../components/sections/About';
import { useState, useEffect } from 'react';
import { useScrollToTop } from '../hooks/use-scroll-to-top';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  useScrollToTop();

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const open = () => setIsOpen(true);
    window.addEventListener('open-contact', open);
    return () => window.removeEventListener('open-contact', open);
  }, []);

  return (
    <>
      <ModalLayout isOpen={isOpen} onClose={handleCloseModal}>
        <ContactForm />
      </ModalLayout>
      <Hero />
      <Works />
      <About onOpenContact={handleOpenModal} />
    </>
  );
}