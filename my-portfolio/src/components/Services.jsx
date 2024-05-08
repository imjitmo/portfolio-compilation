// import icons
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variants
import { Link } from 'react-scroll';
import { fadeIn } from '../anim/variant.jsx';
//services data
const services = [
  {
    name: 'UI/UX Design',
    description:
      'As a UI/UX designer I am an individual who identifies new opportunities to create better user experiences. Aesthetically pleasing branding strategies help clients effectively reach more customers. I also ensure that the end-to-end journey with my products or services meets desired outcomes',
    link: 'More...',
  },
  {
    name: 'Web Development',
    description: `I am responsible for planning and developing software solutions and web applications, supporting and maintaining a company's websites and digital products. I also handle the technical aspects of a website, including its performance and capacity innovations.`,
    link: 'More...',
  },
  {
    name: 'Product Branding',
    description: `I use customer and trend research to create strategies that will change how people perceive the brand. I work to ensure that a brand remains recognisable, up to date and exciting to customers. Plan ways to promote – and change the public perception of – brands. `,
    link: 'More...',
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div className="flex  flex-col lg:flex-row">
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-blue-400 mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              {' '}
              I am a Freelance Full-stack Developer with over 3 years of experience.
            </h3>
            <Link to="contact" smooth={true} spy={true}>
              <button className="text-white uppercase btn btn-sm">Contact me</button>
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {services.map((service, index) => {
              return (
                <div key={index} className="border-b border-white/20 h-lg mb-7 flex">
                  <div className="max-w-lg">
                    <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                      {service.name}
                    </h4>
                    <p className="font-secondary leading-tight">{service.description}</p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <a href="btn w-9 h-9 mb-[42px] flex justify-center items-center">
                      <BsArrowUpRight />
                    </a>
                    <a href="">{service.link}</a>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
