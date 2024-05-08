// import motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../anim/variant.jsx';
//img
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          {/* text area */}
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="mb-10 lg:mb-0"
          >
            <div className="">
              <h2 className="h2 leading-tight text-blue-400">My Latest Work.</h2>
              <p className="max-w-full mb-7">
                I develop variety of different web applications both in front-end, back-end and full-stack. I
                use different frameworks such as React.js, Vue.js with Bootstrap CSS and Tailwind CSS for
                front-end, Express.js, Node.js for Back-end. MERN for my full-stack.
              </p>
              <button className="text-white uppercase btn btn-sm hover:opacity-80">
                <a href="https://github.com/imJitmo">View all projects</a>
              </button>
            </div>
          </motion.div>
          {/* end text area */}
        </div>
        <div className="flex flex-col lg:flex-row gap-x-10 my-10">
          {/** Image 1 **/}
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="mb-10"
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <a href="https://mern-reale-estate-app.onrender.com/" target="_blank" rel="noreferrer">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img className="group-hover:scale-125 transition-all duration-500" src={Img1} alt="image" />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-white font-semibold uppercase">
                    MERN Stack <span className="text-blue-400 font-bold">Web App</span>
                  </span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white ">Real Estate App</span>
                </div>
              </a>
            </div>
          </motion.div>
          {/** end Image 1 **/}
          {/** Image 2 **/}
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="mb-10"
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <a href="https://react-sharies-app.onrender.com/" target="_blank" rel="noreferrer">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img className="group-hover:scale-125 transition-all duration-500" src={Img2} alt="image" />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-white font-semibold uppercase">
                    MERN Stack <span className="text-blue-400 font-bold">Web App </span>
                  </span>
                </div>

                {/** */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white "> Sharies - A Thread Clone </span>
                </div>
              </a>
            </div>
          </motion.div>
          {/** end Image 2 **/}
          {/** Image 3 **/}
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="mb-10"
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img className="group-hover:scale-125 transition-all duration-500" src={Img3} alt="image" />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-white font-semibold uppercase">
                  N/A <span className="text-blue-400 font-bold">-</span>
                </span>
              </div>

              {/** */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white "> - </span>
              </div>
            </div>
          </motion.div>
          {/** end Image 3 **/}
        </div>
      </div>
    </section>
  );
}
