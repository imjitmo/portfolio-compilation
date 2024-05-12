import { fadeIn } from '@/anim/variant';
import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <section id="portfolio" className="min-h-screen p-10 mb-10">
      <h2 className="text-3xl py-5 text-teal-400 hover:invert font-semibold">Projects</h2>
      <p className="text-md py-2 leading-8">
        Since the beginning of my journey as a{' '}
        <strong className="text-teal-400 hover:invert">web developer</strong>, I've done remote work for
        different <strong className="text-teal-400 hover:invert">clients</strong> for startup and collaborated
        with <strong className="text-teal-400 hover:invert">talented people</strong> to create digital
        products for both business and consumer use.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 py-8">
        <motion.div
          variants={fadeIn('up', 0.3)}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="show"
          className="max-w-[420px]"
        >
          <img src="/itechfinder.jpg" className="object-contain rounded-lg hover:invert" alt="itechfinder" />
          <h3 className="text-center text-xl py-2 cursor-default font-semibold">iTechfinder</h3>
        </motion.div>
        <motion.div
          variants={fadeIn('up', 0.3)}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="show"
          className="max-w-[420px]"
        >
          <img src="/sharies.jpg" className="object-contain rounded-lg hover:invert" alt="sharies" />
          <h3 className="text-center text-xl py-2 cursor-default font-semibold">Sharies App</h3>
        </motion.div>
        <motion.div
          variants={fadeIn('up', 0.3)}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="show"
          className="max-w-[420px]"
        >
          <img src="/jre.jpg" className="object-contain rounded-lg hover:invert" alt="jre" />
          <h3 className="text-center text-xl py-2 cursor-default font-semibold">J.RE Real Estate</h3>
        </motion.div>
        <motion.div
          variants={fadeIn('up', 0.3)}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="show"
          className="max-w-[420px]"
        >
          <img src="/notesapp.jpg" className="object-contain rounded-lg hover:invert" alt="notesapp" />
          <h3 className="text-center text-xl py-2 cursor-default font-semibold">Notes App</h3>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
