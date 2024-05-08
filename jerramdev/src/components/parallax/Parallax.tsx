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
    <div
      className="flex relative items-center justify-center w-full h-full overflow-hidden"
      ref={ref}
      style={{
        background:
          type === 'about'
            ? 'linear-gradient(180deg, #111132, #0c0c1d)'
            : 'linear-gradient(180deg, #111132, #505064)',
      }}
    >
      <motion.h1 className="text-[100px]" style={{ y: yText }}>
        {type === 'about' ? 'Skills' : 'My Projects'}
      </motion.h1>
      <motion.div className="bg-[url('/mountains.png')] bg-cover bg-bottom absolute w-full h-full z-[3]"></motion.div>
      <motion.div
        className="bg-[url('/sun.png')] bg-cover bg-bottom absolute w-full h-full z-[2]"
        style={{ y: yBg, backgroundImage: `url(${type === 'about' ? '/planets.png' : '/sun.png'})` }}
      ></motion.div>
      <motion.div
        style={{ x: yBg }}
        className="bg-[url('/stars.png')] bg-cover bg-bottom absolute w-full h-full z-[1]"
      ></motion.div>
    </div>
  );
};

export default Parallax;
