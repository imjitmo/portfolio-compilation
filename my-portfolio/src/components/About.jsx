// import CountUp
import CountUp from 'react-countup';

//import intersection observer hook
import { useInView } from 'react-intersection-observer';

//motion
import { motion } from 'framer-motion';

// variant
import { Link } from 'react-scroll';
import { fadeIn } from '../anim/variant.jsx';

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            name="about-me"
            className="flex-1"
          >
            <h2 className="h2 text-blue-400">About me.</h2>
            <h3 className="h3 mb-4">
              I am a Freelance Full-stack Developer with over 3 years of experience.
            </h3>
            <p className="mb-6">
              I also like sharing my works and contents that are related to the stuff that I have worked on
              and learned over the years in <strong>Web Development</strong> to help other people that strives
              to be a developer, too.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div className="">
                <div className="text-[40px] font-tertiary text-blue-500 mb-2">
                  {inView ? <CountUp start={0} end={4} duration={6} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br /> Experience
                </div>
              </div>
              <div className="">
                <div className="text-[40px] font-tertiary text-blue-500 mb-2">
                  {inView ? <CountUp start={0} end={6} duration={6} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> completed
                </div>
              </div>
              <div className="">
                <div className="text-[40px] font-tertiary text-blue-500 mb-2">
                  {inView ? <CountUp start={0} end={5} duration={6} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br /> clients
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <Link to="contact" smooth={true} spy={true}>
                <button className="text-white uppercase btn btn-lg hover:opacity-80 transition-all duration-500">
                  Contact me
                </button>
              </Link>
              <a
                href="https://github.com/imJitmo"
                className="text-slate-50 font-semibold hover:text-blue-400"
              >
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
