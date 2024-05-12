import { fadeIn } from '@/anim/variant';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id="about" className="min-h-screen p-10" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1"
          >
            <h1 className="text-6xl font-semibold text-teal-400">Hello.//</h1>
            <h3 className="text-xl mb-4">I am full-stack web eveloper with over 3 years of experience.</h3>
            <p className="text-lg mb-6">
              I also like sharing my works and contents that are related to the stuff that I have worked on
              and learned over the years in{' '}
              <strong className="text-teal-400 hover:invert cursor-default">Web Development</strong> to help
              other people that strives to be a developer, too.
            </p>
            <div className="flex flex-col md:flex-row gap-x-6 lg:gap-x-10 mb-12">
              <div className="">
                <div className="text-[40px] text-teal-400 mb-2">
                  {inView ? <CountUp start={0} end={3} duration={6} /> : null}
                </div>
                <div className="text-md tracking-[2px]">
                  Years of <br /> Experience
                </div>
              </div>
              <div className="">
                <div className="text-[40px] text-teal-400 mb-2">
                  {inView ? <CountUp start={0} end={12} duration={6} /> : null}
                </div>
                <div className="text-md tracking-[2px]">
                  Projects <br /> completed
                </div>
              </div>
              <div className="">
                <div className="text-[40px] text-teal-400 mb-2">
                  {inView ? <CountUp start={0} end={10} duration={6} /> : null}
                </div>
                <div className="text-md tracking-[2px]">
                  Satisfied <br /> clients
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
