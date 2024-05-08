import { ModeToggler } from '@/components/ModeToggler';
import { motion } from 'framer-motion';
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav className="flex flex-row gap-4 justify-between bg-slate-50 dark:bg-slate-950 py-4 px-10">
      <h1 className="text-xl font-semibold cursor-pointer">JERRAM.dev</h1>
      <div className="flex flex-row justify-between gap-8">
        <ul className="flex flex-row gap-1">
          <motion.li whileHover={{ rotate: 180 }}>
            <a href="https://github.com/imjitmo" target="_blank">
              <FaGithubSquare size={30} />
            </a>
          </motion.li>
          <motion.li whileHover={{ rotate: 180 }}>
            <a href="https://www.facebook.com/pangilinan.jerram/" target="_blank">
              <FaFacebookSquare size={30} />
            </a>
          </motion.li>
          <motion.li whileHover={{ rotate: 180 }}>
            <a href="https://www.instagram.com/imjitmo/" target="_blank">
              <FaInstagramSquare size={30} />
            </a>
          </motion.li>
          <motion.li whileHover={{ rotate: 180 }}>
            <a href="https://www.linkedin.com/in/jerram0421/" target="_blank">
              <FaLinkedin size={30} />
            </a>
          </motion.li>
          <motion.li whileHover={{ rotate: 180 }}>
            <a href="https://twitter.com/imjitmo" target="_blank">
              <FaSquareXTwitter size={30} />
            </a>
          </motion.li>
        </ul>
        <ModeToggler />
      </div>
    </nav>
  );
};

export default Navbar;
