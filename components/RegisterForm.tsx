import React, { useState } from "react";
import { ButtonComponent } from "./ButttonComponent";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axiosInstance from "@/utils/axios";
import RadioGroupDemo from "./RadioGroupDemo";
import CheckboxDemo from "./CheckBoxDemo";

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  prenume: z.string(),
  name: z.string(),
});

type RegisterFormInputs = z.infer<typeof registerSchema>;

export const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<RegisterFormInputs>();
  const [registerError, setRegisterError] = useState<string | null>(null);

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await axiosInstance.post("/register", {
        ...data,
        password_confirmation: getValues("password"),
      });
      console.log("Register successful:", response.data);
    } catch (error) {
      console.error("Eroare de înregistrare:", error);
      setRegisterError("Te rugăm să verifici informațiile.");
    }
  });
  return (
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
              id="name"
              type="text"
              autoComplete="prenume"
              className="w-60 appearance-none focus:bg-white h-12 bg-gray-100 rounded relative block px-3 py-2 border border-gray-300 placeholder:text-xs placeholder:font-semibold placeholder-gray-400 hover:border-[0.5px] hover:border-black text-gray-900 rounded-t-md focus:outline-none focus:z-10 sm:text-sm"
              placeholder="Nume de familie"
              {...register("name", { required: true })}
            />
            {errors.name && (
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
      <div className="mb-3 ml-2 flex justify-between w-full ">
        <div className="font-sans font-semibold text-black px-4 text-sm">
          Cum preferi să ni te adresăm?
        </div>
        <RadioGroupDemo />
      </div>
      <CheckboxDemo />
      <div className="mb-3"></div>
      <div className="flex items-center justify-center">
        <ButtonComponent variant="primary" text="Înregistrează-te acum" />
      </div>
    </form>
  );
};
