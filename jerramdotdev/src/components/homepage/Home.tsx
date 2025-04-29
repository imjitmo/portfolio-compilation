import { sliderVariants } from '@/anim/variant';
import { motion } from 'framer-motion';
import { SiMinutemailer } from 'react-icons/si';
import { Link } from 'react-scroll';
import Navbar from '../navbar/Navbar';

const Home = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      <Navbar />
      <div className="flex flex-col items-center justify-center gap-2 px-10">
        <h1 className="text-6xl font-semibold text-teal-400 cursor-pointer hover:invert">
          Jerram Macaspac Pangilinan.//
        </h1>
        <h3 className="text-2xl">Web Developer</h3>
        <p className="text-mdleading-8">
          An experienced web developer that provides services for programming needs. Join me and let's get
          crackin'
        </p>
      </div>
      <div className="relative flex justify-center items-center p-6">
        <img src="/avatar.svg" className="w-1/2 lg:w-1/4" alt="avatar" />
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        <Link to="contact" smooth={true} spy={true}>
          <button className="btn--call__action">
            <SiMinutemailer /> Get in touch!
          </button>
        </Link>
        <a href="https://github.com/imjitmo?tab=repositories" target="_blank">
          <button className="text-lg font-medium hover:text-red-600 dark:text-teal-400 dark:hover:invert">
            My Projects
          </button>
        </a>
      </div>
      <motion.div
        className="absolute text-[50vh] bottom-[-120px] whitespace-nowrap dark:text-slate-300 w-1/2 opacity-5 cursor-default z-[-99]"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Developer Designer Creator Innovator
      </motion.div>
    </section>
  );
};

export default Home;
