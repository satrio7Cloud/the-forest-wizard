"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";

const container = {
  hidden: { opcaity: 0 },
  show: {
    opcaity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (params) => {
    const toastId = toast.loading("Sendding your message, please wait...");
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 5000, //you can not send more then 1 email per 5 second
          },
        }
      )
      .then(
        () => {
          toast.success(
            "I have recived your message, I will get back to you soon!",
            {
              id: toastId,
            }
          );
        },
        (error) => {
          toast.error(
            "There wa an error sending your message, please try again letter!",
            error,
            {
              id: toastId,
            }
          );
        }
      );
  };

  const onSubmit = (data) => {
    const templateParams = {
      to_name: "Satrio",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };

    sendEmail(templateParams);
  };
  // console.log(errors);

  return (
    <>
      <Toaster richColors={true} />
      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
      >
        <motion.input
          variants={item}
          {...register("name", {
            required: "This Field required!",
            //   value: 3,
            message: "Name should be atleast 3 character long.",
          })}
          type="text"
          placeholder="name"
          className="w-full p-2 rounded-md shadow-lg text-white focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.name && (
          <span className="inline-block self-start text-accent">
            {errors.name.message}
          </span>
        )}
        <motion.input
          variants={item}
          {...register("email", { required: "This Field required!" })}
          type="email"
          placeholder="email"
          className="w-full p-2 rounded-md shadow-lg text-white focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.email && (
          <span className="inline-block self-start text-accent">
            {errors.email.message}
          </span>
        )}
        <motion.textarea
          variants={item}
          {...register("message", {
            required: "This Field required!",
            maxLength: {
              value: 500,
              message: "Message be should be less then 500 characters",
            },
            minLength: {
              value: 10,
              message: "Message be should be more then 10 characters",
            },
          })}
          placeholder="leave message"
          className="w-full p-2 rounded-md shadow-lg text-white focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.message && (
          <span className="inline-block self-start text-accent">
            {errors.message.message}
          </span>
        )}
        <motion.input
          variants={item}
          value="Cast your message"
          className="px-10 py-4 rounded-md shadow-lg bg-background border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm 
        text-whiteforeground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize "
          type="submit"
        />
      </motion.form>
    </>
  );
}
