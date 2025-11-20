"use client";

import { FormEvent, useRef } from "react";

export default function Formulario() {
  const referencia_formulario = useRef(null);

  function handleSubmit(evento: FormEvent) {
    evento.preventDefault();
    if (referencia_formulario.current) {
      const data_formulario = new FormData(referencia_formulario.current);
      console.log(data_formulario.get("email_user"));
      console.log(data_formulario.get("pass"));
      console.log(data_formulario.get("check_terminos")!!);
    } else {
      console.log("nada");
    }
  }

  return (
    <form
      className="max-w-sm mx-auto"
      ref={referencia_formulario}
      onSubmit={handleSubmit}
    >
      {/* email */}
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2.5 text-sm font-medium text-heading"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          name="email_user"
          className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      {/* password */}
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2.5 text-sm font-medium text-heading"
        >
          Your password
        </label>
        <input
          type="password"
          id="password"
          name="pass"
          className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
          placeholder="••••••••"
          required
        />
      </div>
      {/* check terminos */}
      <label htmlFor="remember" className="flex items-start mb-5">
        <input
          id="remember"
          type="checkbox"
          /* value="" */
          name="check_terminos"
          className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
          required
        />
        <p className="ms-2 text-sm font-medium text-heading select-none">
          Estoy de acuerdo con{" "}
          <a href="#" className="text-fg-brand hover:underline">
            los terminos y condiciones.
          </a>
          .
        </p>
      </label>
      {/* button submit */}
      <button
        type="submit"
        className="text-zinc-900 bg-brand box-border border border-b-blue-800 hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
      >
        Submit ss
      </button>
    </form>
  );
}
