import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './portfolio.scss';

interface PortfolioProps {
  id: number;
  title: string;
  img: string;
  desc: string;
  link?: string;
}

const items: PortfolioProps[] = [
  {
    id: 1,
    title: 'Portfolio1',
    img: 'https://img.freepik.com/free-vector/computer-design_1156-101.jpg?t=st=1715168832~exp=1715172432~hmac=126e6e1862afce72675fcc266e4a4050a9b206a763d8558a2bf79c3502cefc9e&w=740',
    desc: 'Portfolio',
  },

  {
    id: 2,
    title: 'Portfolio2',
    img: 'https://img.freepik.com/free-vector/computer-design_1156-101.jpg?t=st=1715168832~exp=1715172432~hmac=126e6e1862afce72675fcc266e4a4050a9b206a763d8558a2bf79c3502cefc9e&w=740',
    desc: 'Portfolio',
  },

  {
    id: 3,
    title: 'Portfolio3',
    img: 'https://img.freepik.com/free-vector/computer-design_1156-101.jpg?t=st=1715168832~exp=1715172432~hmac=126e6e1862afce72675fcc266e4a4050a9b206a763d8558a2bf79c3502cefc9e&w=740',
    desc: 'Portfolio',
  },

  {
    id: 4,
    title: 'Portfolio4',
    img: 'https://img.freepik.com/free-vector/computer-design_1156-101.jpg?t=st=1715168832~exp=1715172432~hmac=126e6e1862afce72675fcc266e4a4050a9b206a763d8558a2bf79c3502cefc9e&w=740',
    desc: 'Portfolio',
  },
];

const PortfolioItem = (item: PortfolioProps) => {
  const ref = useRef(null);
  return (
    <section ref={ref}>
      <div className="container">
        <img src={item.img} alt={item.title} />
        <div className="textContainer">
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <button>See Demo</button>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const styleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Projects</h1>
        <motion.div style={{ styleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <PortfolioItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Portfolio;
