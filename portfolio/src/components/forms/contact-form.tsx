import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputForm from "../ui/input-form";
import InputSelectForm from "../ui/input-select-form";
import GradientButton from "../ui/gradient-button";
import InputTextAreaForm from "../ui/input-text-area-form";
import InputPhoneForm from "../ui/input-phone-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
    email: z.string().email("Email inválido"),
    message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
    telefone: z.string().optional(),
    empresa: z.string().optional(),
    cargo: z.string().optional(),
    "cidade-uf": z.string().optional(),
    "meio-contato": z.string().optional(),
  })
  .passthrough();

const ContactForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(schema),
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    const options = [
        { value: "instagram", label: "Instagram" },
        { value: "facebook", label: "Facebook" },
        { value: "google", label: "Google" },
        { value: "indicação", label: "Indicação" },
        { value: "outro", label: "Outro" },
    ]; 

    const onSubmit = async (data: any) => {
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            const response = await fetch("http://localhost:3001/api/email/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setSubmitStatus({
                    type: 'success',
                    message: result.message || 'Mensagem enviada com sucesso!',
                });
                reset();
            } else {
                setSubmitStatus({
                    type: 'error',
                    message: result.message || 'Erro ao enviar mensagem.',
                });
            }
        } catch (error) {
            console.error('Erro ao enviar:', error);
            setSubmitStatus({
                type: 'error',
                message: 'Erro de conexão. Tente novamente.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6 lg:w-[75rem] py-5 lg:py-10 lg:px-40 flex-grow overflow-y-auto lg:overflow-visible no-scrollbar"
        >
            <div className="text-center mb-4">
                <h2 className="text-lg lg:text-xl font-bahnchrift text-secondary">
                    Vamos conversar? Solicite um orçamento ou compartilhe sua ideia comigo!
                </h2>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
                <InputForm name="name" label="Nome *" errors={errors} register={register} /> 
                <InputPhoneForm name="telefone" label="Telefone" errors={errors} register={register} /> 
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
                <InputForm name="email" label="Email *" errors={errors} register={register} /> 
                <InputSelectForm name="meio-contato" label="Como me encontrou?" register={register} options={options} />
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
                <InputForm name="cidade-uf" label="Cidade/UF" register={register} />
                <InputForm name="empresa" label="Empresa/ Seu cargo" register={register} />
            </div>
            <div>
                <InputTextAreaForm name="message" label="Mensagem *" errors={errors} register={register} />
            </div>
            {submitStatus.type && (
                <div className={`text-center p-4 rounded-2xl font-bahnchrift ${
                    submitStatus.type === 'success'
                        ? 'bg-green-500/20 text-green-400 border border-green-500'
                        : 'bg-red-500/20 text-red-400 border border-red-500'
                }`}>
                    {submitStatus.message}
                </div>
            )}
            <div className="flex justify-center">
                <GradientButton
                    type="submit"
                    label={isSubmitting ? "Enviando..." : "Enviar"}
                    className={`py-3 px-15 cursor-pointer transition-all ${
                        isSubmitting
                            ? 'opacity-50 cursor-not-allowed pointer-events-none'
                            : 'hover:opacity-90'
                    }`}
                />
            </div>
        </form>
    );
};

export default ContactForm;
