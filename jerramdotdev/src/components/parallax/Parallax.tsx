import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxProps {
  type: string;
}
const Parallax = ({ type }: ParallaxProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '500%']);
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  return (
    <section className="w-full h-screen">
      <div
        className="w-full h-screen overflow-hidden relative grid place-items-center"
        ref={ref}
        style={{
          background:
            type === 'about'
              ? 'linear-gradient(180deg, #111132, #0c0c1d)'
              : 'linear-gradient(180deg, #111132, #505064)',
        }}
      >
        <motion.h1 className="text-7xl text-slate-50 z-[4]" style={{ y: yText }}>
          {type === 'about' ? 'Skills' : 'Projects'}
        </motion.h1>
        <motion.div className="bg-[url('/mountains.png')] bg-cover bg-bottom absolute inset-0 z-[3]"></motion.div>
        <motion.div
          className={`${
            type === 'about' ? 'bg-[url(/planets.png)]' : 'bg-[url(/sun.png)]'
          } bg-cover bg-bottom absolute inset-0 z-[2]`}
          style={{ y: yBg }}
        ></motion.div>
        <motion.div
          style={{ x: yBg }}
          className="bg-[url('/stars.png')] bg-cover bg-bottom absolute inset-0 z-[1]"
        ></motion.div>
      </div>
    </section>
  );
};

export default Parallax;
