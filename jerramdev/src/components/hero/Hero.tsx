import { motion, Variants } from 'framer-motion';

const textVariants: Variants = {
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
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const imageVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-220%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror' as const,
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="h-[calc(100vh-100px)] relative overflow-hidden bg-gradient-to-b from-[#0c0c1d] to-[#111132]">
      <div className="max-w-[1366px] h-full m-auto">
        <motion.div
          className="flex flex-col justify-center gap-10 w-1/2 h-full"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 className="text-4xl tracking-[10px] text-indigo-400" variants={textVariants}>
            JERRAM PANGILINAN
          </motion.h2>
          <motion.h1 className="text-[80px]" variants={textVariants}>
            Fullstack Web Developer
          </motion.h1>
          <motion.div variants={textVariants} className="flex gap-2 z-[1]">
            <motion.button
              className="p-5 border border-solid border-white text-white cursor-pointer bg-transparent rounded-xl"
              variants={textVariants}
            >
              See the Latest Works
            </motion.button>
            <motion.button
              className="p-5 text-black cursor-pointer bg-white rounded-xl font-bold"
              variants={textVariants}
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            className="size-10 z-[1]"
            alt="scroll"
          />
        </motion.div>
      </div>
      <motion.div
        className="absolute text-[50vh] bottom-[-120px] whitespace-nowrap text-slate-300 w-1/2 opacity-5 cursor-default"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Developer Designer Creator Innovator
      </motion.div>
      <motion.div
        variants={imageVariants}
        initial="initial"
        animate="animate"
        className="absolute h-full top-0 right-0 hidden lg:block"
      >
        <img src="/about_img.png" alt="jerram.dev.photo" />
      </motion.div>
    </div>
  );
};

export default Hero;
