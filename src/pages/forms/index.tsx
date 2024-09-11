import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
  nome: string;
  email: string;
}

const Forms = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();


  const getValueNome = () => {
    console.log(watch('nome'))
    console.log(watch('email'))
    console.log(watch())
  }


  const enviarDados: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(enviarDados)}>
      <div className="p-3">
        <input
          className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-smblock w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="text"
          placeholder="digite apenas letras"
          {...register("nome", { required: true })}
        />


        {watch('nome')}

        {errors.nome && <p> Esse campo é obrigatorio</p>}

        <input
          className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-smblock w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="email"
          placeholder="digite apenas letras"
          {...register("email")}
        />

        <button type="submit">Enviar</button>
        <button type="button" onClick={() => getValueNome()}>Pegar valor do nome</button>
      </div>
    </form>
  );
};

export default Forms;
