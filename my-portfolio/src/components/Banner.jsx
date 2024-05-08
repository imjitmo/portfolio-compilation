// import images
import Image from '../assets/avatar.svg';

// import icons
import { FaFacebook, FaGithub, FaGitlab, FaLinkedin } from 'react-icons/fa';

// type animation
import { TypeAnimation } from 'react-type-animation';

// motion
import { motion } from 'framer-motion';

// variants
import { Link } from 'react-scroll';
import { fadeIn } from '../anim/variant.jsx';

export default function Banner() {
  return (
    <section id="home" className="min-h-[85vh] lg:min-h-[78vh] flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className=" flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              JERRAM <span>PANGILINAN</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mt-4">I am a </span>
              <TypeAnimation
                sequence={['Developer', 2000, 'Designer', 2000, 'Creator', 2000]}
                speed={50}
                className="text-blue-400"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              I am a <strong>Full-Stack Web Developer</strong> building websites and web application that
              leads to the success of the overall product.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Link to="contact" smooth={true} spy={true}>
                <button className="text-white uppercase btn btn-lg transition-all duration-500">
                  Contact me
                </button>
              </Link>
              <a
                href="https://github.com/imJitmo"
                className="text-slate-50 font-semibold hover:text-blue-400"
              >
                My Portfolio
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex  text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://www.facebook.com/pangilinan.jerram/">
                <FaFacebook />
              </a>
              <a href="https://www.linkedin.com/in/jerram0421/">
                <FaLinkedin />
              </a>
              <a href="https://github.com/imJitmo">
                <FaGithub />
              </a>
              <a href="https://gitlab.com/jitmo_0421">
                <FaGitlab />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            whileInView={'show'}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
