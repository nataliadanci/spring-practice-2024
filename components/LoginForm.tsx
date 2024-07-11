import React, { useState } from "react";
import { ButtonComponent } from "./ButttonComponent";
import { useForm } from "react-hook-form";
import axiosInstance from "@/utils/axios";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const [loginError, setLoginError] = useState<string | null>(null);

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await axiosInstance.post("/login", data);
      console.log("Logare cu succes:", response.data);
      localStorage.setItem("authToken", response.data.token);
    } catch (error) {
      console.error("Eroare de logare:", error);
      setLoginError(
        "Adresa de email sau parola sunt incorecte. Te rugăm să încerci din nou."
      );
    }
  });

  return (
    <form className="mt-8 space-y-6 w-fit" onSubmit={onSubmit}>
      <input type="hidden" name="remember" value="true" />
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
      {loginError && (
        <div className="text-red-500 text-sm font-medium">{loginError}</div>
      )}
      <div className="flex items-center justify-between">
        <div className="flex items-center"></div>
        <div className="text-sm">
          <a href="#" className="font-medium text-gray-600 hover:text-gray-400">
            Ți-ai uitat parola?
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <ButtonComponent variant="primary" text="Logare" />
      </div>
    </form>
  );
};
