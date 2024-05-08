import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import { DiSqllite } from 'react-icons/di';
import { FaBootstrap, FaGit, FaGithub, FaNodeJs, FaReact } from 'react-icons/fa';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import {
  SiAdobephotoshop,
  SiDaisyui,
  SiDjango,
  SiExpress,
  SiFigma,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiShadcnui,
} from 'react-icons/si';
import './about.scss';

const variants: Variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const Services = () => {
  const ref = useRef<HTMLInputElement>(null);

  const isInView = useInView(ref, { once: true });
  return (
    <div className="bg-gradient-to-b from-[#0c0c1d] to-[#111132] h-full">
      <motion.div
        className="flex flex-col justify-between h-full"
        variants={variants}
        initial="initial"
        animate={isInView && 'animate'}
        ref={ref}
      >
        <motion.div className="flex-[1] self-end flex items-center gap-5" variants={variants}>
          <p className="font-[200px] text-[20px] text-slate-400 align-right">
            “I aim to contribute to an open-source project by the end of this year,
            <br />
            enhancing my coding skills and giving back to the developer community.” 🚀
          </p>
          <hr className="w-[150px] border-t-[0.5px] border-slate-400" />
        </motion.div>
        <motion.div className="flex-[2] flex flex-col items-center" variants={variants}>
          <div className="flex items-center gap-12">
            <h1 className="text-8xl font-thin">
              My <motion.strong whileHover={{ color: 'orange' }}>Tech Stack</motion.strong>
            </h1>
          </div>
          <div className="flex items-center gap-12">
            <h1 className="text-8xl font-thin">
              In <motion.strong whileHover={{ color: 'orange' }}>Web Development</motion.strong>
            </h1>
            <button className="px-24 py-6 rounded-full text-black bg-yellow-600 text-2xl hover:bg-slate-500">
              My Works
            </button>
          </div>
        </motion.div>
        <motion.div className="flex-[2] flex max-w-[1366px] m-auto gap-2" variants={variants}>
          <motion.div
            whileHover={{ background: 'lightgray', color: '#000' }}
            className="p-12 border-[0.5px] border-solid border-slate-400 rounded-lg flex flex-col justify-between"
          >
            <h1 className="text-xl text-center mb-4">Front-End</h1>
            <div className="flex flex-wrap gap-4 w-[200px]">
              <FaReact size={80} />
              <RiNextjsFill size={80} />
              <RiTailwindCssFill size={80} />
              <SiDaisyui size={80} />
              <SiShadcnui size={80} />
              <FaBootstrap size={80} />
            </div>
            {/* <button className="p-2 text-black bg-yellow-500 rounded">My Works</button> */}
          </motion.div>
          <motion.div
            whileHover={{ background: 'lightgray', color: '#000' }}
            className="p-12 border-[0.5px] border-solid border-slate-400 rounded-lg flex flex-col justify-between"
          >
            <h1 className="text-xl text-center mb-4">Back-End</h1>
            <div className="flex flex-wrap gap-4 w-[200px]">
              <FaNodeJs size={80} />
              <SiExpress size={80} />
              <RiNextjsFill size={80} />
              <SiDjango size={80} />
              <SiLaravel size={80} />
            </div>
            {/* <button className="p-2 text-black bg-yellow-500 rounded">My Works</button> */}
          </motion.div>
          <motion.div
            whileHover={{ background: 'lightgray', color: '#000' }}
            className="p-12 border-[0.5px] border-solid border-slate-400 rounded-lg flex flex-col justify-between"
          >
            <h1 className="text-xl text-center mb-4">Data Management</h1>
            <div className="flex flex-wrap gap-4 w-[200px]">
              <SiMongodb size={80} />
              <SiMysql size={80} />
              <SiPrisma size={80} />
              <SiPostgresql size={80} />
              <DiSqllite size={80} />
            </div>
            {/* <button className="p-2 text-black bg-yellow-500 rounded">My Works</button> */}
          </motion.div>
          <motion.div
            whileHover={{ background: 'lightgray', color: '#000' }}
            className="p-12 border-[0.5px] border-solid border-slate-400 rounded-lg flex flex-col justify-between"
          >
            <h1 className="text-xl text-center mb-4">Others</h1>
            <div className="flex flex-wrap gap-4 w-[200px]">
              <FaGit size={80} />
              <FaGithub size={80} />
              <SiFigma size={80} />
              <SiAdobephotoshop size={80} />
              <SiPostman size={80} />
            </div>
            {/* <button className="p-2 text-black bg-yellow-500 rounded">My Works</button> */}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
