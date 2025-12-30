import React from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {

  const [state] = useForm("xleqolbz");
  const handleSubmit=()=>{
    return alert('Thanks for Respones!')
    }

  return (
    <section className='py-16 mb-20 lg:section' id='contact' >
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
             variants={fadeIn("right", 0.3)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.3 }}
             className='flex-1'>
            <div>
              <h4 className='text-xl uppercase text-red-800 font-bold mb-2 tracking-wide'>
                Get in touch
              </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'> Let's work 
              <br/> Together!
              </h2>
            </div>
          </motion.div>
          <motion.form 
             variants={fadeIn("left", 0.3)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.3 }}
             className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start '
              onSubmit={handleSubmit}
              method='POST'
              action='https://formspree.io/f/xleqolbz'>
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
            type='text'
            name='firstName'
            placeholder='Your name'
            />
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
             id="email"
             type="email" 
             name="email"
            placeholder='Your email'
            />
             <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
           <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
                id="message"
                name="message"
            placeholder='Your message'
            />
              <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
            <button className='btn btn-lg' type="submit">Send Message</button>
     
          </motion.form>
        </div>

      </div>
    </section>
  )
};

export default Contact;
