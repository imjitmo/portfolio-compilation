//import motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../anim/variant.jsx';
//swal
import Swal from 'sweetalert2';
//react
import { useRef, useState } from 'react';
//emailjs
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [state, setState] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();
    setState(false);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_API_KEY,
        import.meta.env.VITE_EMAILJS_TEMPLATE_KEY,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setState(true);
          Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully!',
            text: 'I will get back to you soon!',
            background: 'black',
            allowOutsideClick: false,
            showConfirmButton: true,
            confirmButtonColor: '#04138f',
          });
          return;
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact" className="section mb-36">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/** text **/}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-2xl text-blue-400 uppercase font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let us work <br /> together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex-col gap-y-6 pb-25 p-6 items-start"
            action=""
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-blue-400 transition-all"
              type="text"
              name="user_name"
              id="user_name"
              placeholder="Your name"
              required
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-blue-400 transition-all"
              type="email"
              name="user_email"
              id="user_email"
              placeholder="Your email"
              required
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-blue-400 transition-all"
              type="tel"
              name="user_number"
              id="user_number"
              placeholder="Your contact number"
              required
            />
            <textarea
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-blue-400 transition-all resize-none mb-12"
              name="message"
              id="message"
              placeholder="Your message"
              required
            />
            <button type="submit" className="btn btn-lg" disabled={state === false}>
              {state ? 'Send Message' : 'Sending Message...'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
