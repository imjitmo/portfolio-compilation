import { motion, Variants } from 'framer-motion';

const items = ['Homepage', 'About', 'Portfolio', 'Contact'];

const variants: Variants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const itemVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};
const Links = () => {
  return (
    <motion.div
      className="absolute flex flex-col items-center justify-center gap-5 w-full h-full"
      variants={variants}
    >
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          className="text-2xl font-medium"
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
