import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { fadeIn } from '../../anim/variant.tsx';

const Contact = () => {
  const [state, setState] = useState(true);
  const [emailData, setEmailData] = useState({
    user_name: '',
    user_email: '',
    user_number: '',
    message: '',
  });

  const onhandleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setEmailData({ ...emailData, [e.currentTarget.name]: e.currentTarget.value });
  };
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState(false);
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_API_KEY,
        import.meta.env.VITE_EMAILJS_TEMPLATE_KEY,
        emailData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          console.clear();
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
          setEmailData({
            user_name: '',
            user_email: '',
            user_number: '',
            message: '',
          });
          return;
        },
        (error) => {
          console.error(error);
        }
      );
  };
  return (
    <section id="contact" className="min-h-screen pt-36 lg:pt-48">
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center lg:flex-row">
          {/** text **/}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-2xl text-teal-400 uppercase font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let us work <br /> together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            onSubmit={sendEmail}
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl bg-slate-950/60 dark:bg-slate-100/5 flex-col gap-y-8 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-slate-100 focus:border-teal-400 transition-all"
              type="text"
              name="user_name"
              id="user_name"
              placeholder="Your name"
              value={emailData?.user_name || ''}
              onChange={onhandleChange}
              required
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-teal-400 transition-all"
              type="email"
              name="user_email"
              id="user_email"
              placeholder="Your email"
              value={emailData?.user_email || ''}
              onChange={onhandleChange}
              required
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-teal-400 transition-all"
              type="tel"
              name="user_number"
              id="user_number"
              placeholder="Your contact number"
              value={emailData?.user_number || ''}
              onChange={onhandleChange}
              required
            />
            <textarea
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-teal-400 transition-all resize-none mb-12"
              name="message"
              id="message"
              placeholder="Your message"
              value={emailData?.message || ''}
              onChange={onhandleChange}
              required
            />
            <button
              type="submit"
              className="btn--call__action text-slate-100 border-slate-100"
              disabled={state === false}
            >
              {state ? 'Send Message' : 'Sending Message...'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
