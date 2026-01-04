import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xleqolbz");
  const formRef = useRef(null);

  useEffect(() => {
    if (state.succeeded && formRef.current) {
      formRef.current.reset(); // sync reset
      alert("Thanks for your response!");
    }
  }, [state.succeeded]);

  return (
    <section className="py-16 my-20 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">

          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h4 className="text-xl uppercase text-red-800 font-bold mb-2 tracking-wide">
              Get in touch
            </h4>
            <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
              Let's work <br /> Together!
            </h2>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              type="text"
              name="firstName"
              placeholder="Your name"
              required
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
            />

            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <textarea
              name="message"
              placeholder="Your message"
              required
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
            />

            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button
              type="submit"
              disabled={state.submitting}
              className="btn btn-lg"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
