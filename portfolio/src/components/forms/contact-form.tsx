import React from "react";
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
    "site-empresa": z.string().optional(),
    cargo: z.string().optional(),
    "cidade-uf": z.string().optional(),
    "meio-contato": z.string().optional(),
  })
  .passthrough();

const ContactForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    });
    const options = [
        { value: "instagram", label: "Instagram" },
        { value: "facebook", label: "Facebook" },
        { value: "google", label: "Google" },
        { value: "indicação", label: "Indicação" },
        { value: "outro", label: "Outro" },
    ];    
    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <form 
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6 lg:w-[75rem] py-5 lg:py-10 lg:px-40 flex-grow overflow-y-auto lg:overflow-visible no-scrollbar"
        >
            <div className="flex flex-col lg:flex-row gap-4">
                <InputForm name="name" label="Nome *" errors={errors} register={register} /> 
                <InputPhoneForm name="telefone" label="Telefone" errors={errors} register={register} /> 
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
                <InputForm name="email" label="Email *" errors={errors} register={register} /> 
                <InputSelectForm name="meio-contato" label="Como me encontrou?" register={register} options={options} />
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
                <InputForm name="empresa" label="Empresa" register={register} /> 
                <InputForm name="site-empresa" label="Site da empresa" register={register} /> 
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
                <InputForm name="cargo" label="Cargo" register={register} /> 
                <InputForm name="cidade-uf" label="Cidade/UF" register={register} /> 
            </div>
            <div>
                <InputTextAreaForm name="message" label="Mensagem *" errors={errors} register={register} />
            </div>
            <div className="flex justify-center">
                <GradientButton type="submit" label="Enviar" className="py-3 px-15 cursor-pointer hover:opacity-90 transition-all"/>
            </div>
        </form>
    );
};

export default ContactForm;
