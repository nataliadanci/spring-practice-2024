import { ButtonComponent } from "@/components/ButttonComponent";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  prenume: z.string(),
  nume: z.string(),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    // Here the api call
  });

  return (
    <div className="min-h-screen flex items-center px-[15px] justify-center bg-gray-50 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <form className="mt-8 space-y-6 w-fit " onSubmit={onSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="flex items-end rounded-md space-x-4 justify-center">
            <div className="flex items-end rounded-md space-x-4 justify-center">
              <div>
                <label htmlFor="prenume" className="sr-only">
                  Prenume
                </label>
                <input
                  id="prenume"
                  type="text"
                  autoComplete="prenume"
                  className="w-60 appearance-none focus:bg-white h-12 bg-gray-100 rounded relative block px-3 py-2 border border-gray-300 placeholder:text-xs placeholder:font-semibold placeholder-gray-400 hover:border-[0.5px] hover:border-black text-gray-900 rounded-t-md focus:outline-none focus:z-10 sm:text-sm"
                  placeholder="Prenume"
                  {...register("prenume", { required: true })}
                />
                {errors.prenume && (
                  <span className="text-red-500 text-xxs font-medium fixed">
                    Te rugăm să îți adaugi prenumele
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-end rounded-md space-x-4 justify-center">
              <div>
                <label htmlFor="nume" className="sr-only">
                  Prenume
                </label>
                <input
                  id="nume"
                  type="text"
                  autoComplete="prenume"
                  className="w-60 appearance-none focus:bg-white h-12 bg-gray-100 rounded relative block px-3 py-2 border border-gray-300 placeholder:text-xs placeholder:font-semibold placeholder-gray-400 hover:border-[0.5px] hover:border-black text-gray-900 rounded-t-md focus:outline-none focus:z-10 sm:text-sm"
                  placeholder="Nume de familie"
                  {...register("nume", { required: true })}
                />
                {errors.nume && (
                  <span className="text-red-500 text-xxs font-medium fixed">
                    Te rugăm să îți adaugi numele de familie
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-end rounded-md space-x-4 justify-center">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Adresa ta de e-mail
              </label>
              <input
                id="email-address"
                type="email"
                autoComplete="email"
                className="w-60 appearance-none focus:bg-white h-12 bg-gray-100 rounded relative block px-3 py-2 border border-gray-300 placeholder:text-xs placeholder:font-semibold placeholder-gray-400 hover:border-[0.5px] hover:border-black text-gray-900 rounded-t-md focus:outline-none focus:z-10 sm:text-sm"
                placeholder="Adresa ta de e-mail"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500 text-xxs font-medium fixed">
                  Te rugăm să-ți introduci adresa de e-mail
                </span>
              )}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Parolă
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                className="appearance-none h-12 focus:bg-white bg-gray-100 rounded relative block w-60 px-3 py-2 border border-gray-300 placeholder:text-xs placeholder:font-semibold placeholder-gray-400 hover:border-[0.5px] hover:border-black text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Parolă"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500 text-xxs font-medium fixed">
                  Te rugăm să-ți introduci parola
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between ">
            <div className="flex items-center"></div>
          </div>
          <div className="flex items-center justify-center">
            <ButtonComponent variant="primary" text="Înregistrează-te acum" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
