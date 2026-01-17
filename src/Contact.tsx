import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_4kjs4hd",
          "template_csnoouo",
          formRef.current,
          "H1m6sv9DvuXjSb4sV"
        )
        .then(
          () => {
            alert("Your message has been successfully sent!");
            formRef.current?.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } else {
      console.error("Form reference is undefined");
    }
  };

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay },
  });

  return (
    <div className="relative isolate full-page-gradient px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      ></div>

      <motion.div
        {...fadeUp(0)}
        className="mx-auto max-w-2xl text-center"
      >
        <motion.h2
          {...fadeUp(0.15)}
          className="text-5xl font-extrabold tracking-tight text-slate-700"
        >
          Contact Us
        </motion.h2>
        <motion.p
          {...fadeUp(0.3)}
          className="mt-2 text-lg leading-8 text-gray-600"
        >
          We are always open to new members!
        </motion.p>
      </motion.div>
      <motion.form
        {...fadeUp(0.45)}
        ref={formRef}
        onSubmit={sendEmail}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* First name */}
          <motion.div {...fadeUp(0.6)}>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-slate-500"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first_name"
                id="first-name"
                required
                className="block w-full rounded-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
              />
            </div>
          </motion.div>

          {/* Last name */}
          <motion.div {...fadeUp(0.7)}>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-slate-500"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last_name"
                id="last-name"
                required
                className="block w-full rounded-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
              />
            </div>
          </motion.div>

          {/* Major */}
          <motion.div {...fadeUp(0.8)} className="sm:col-span-2">
            <label
              htmlFor="major"
              className="block text-sm font-semibold leading-6 text-slate-500"
            >
              Major
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="major"
                id="major"
                required
                className="block w-full rounded-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
              />
            </div>
          </motion.div>

          {/* Email */}
          <motion.div {...fadeUp(0.9)} className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-slate-500"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                required
                className="block w-full rounded-full border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
              />
            </div>
          </motion.div>

          {/* Message */}
          <motion.div {...fadeUp(1.0)} className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-slate-500"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                required
                className="block w-full h-64 rounded-3xl border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pensa-blue-70 sm:text-sm sm:leading-6"
              />
            </div>
          </motion.div>
        </div>

        {/* Submit */}
        <motion.div {...fadeUp(1.15)} className="mt-10">
          <button
            type="submit"
            className="block mx-auto w-1/4 rounded-full bg-pensa-blue-70 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-pensa-blue-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </motion.div>
      </motion.form>
    </div>
  );
};

export default Contact;
