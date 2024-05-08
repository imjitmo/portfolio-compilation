import { motion } from 'framer-motion';
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import Sidebar from '../sidebar/Sidebar';
// import './navbar.scss';

const Navbar = () => {
  return (
    <div className="h-[100px]">
      <Sidebar />
      <div className="flex flex-row max-w-[1366px] m-auto h-full items-center justify-between px-2 lg:p-0">
        <motion.h1
          className="text-xl font-medium"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          whileHover={{ scale: 1.2 }}
        >
          JERRAM.dev
        </motion.h1>
        <div className="flex gap-2.5 align-items-center">
          <motion.a whileHover={{ rotate: 180 }} href="https://github.com/imjitmo" target="_blank">
            <FaGithubSquare size={26} />
          </motion.a>
          <motion.a
            whileHover={{ rotate: 180 }}
            href="https://www.facebook.com/pangilinan.jerram/"
            target="_blank"
          >
            <FaFacebookSquare size={26} />
          </motion.a>
          <motion.a whileHover={{ rotate: 180 }} href="https://www.instagram.com/imjitmo/" target="_blank">
            <FaInstagramSquare size={26} />
          </motion.a>
          <motion.a
            whileHover={{ rotate: 180 }}
            href="https://www.linkedin.com/in/jerram0421/"
            target="_blank"
          >
            <FaLinkedin size={26} />
          </motion.a>
          <motion.a whileHover={{ rotate: 180 }} href="https://twitter.com/imjitmo" target="_blank">
            <FaSquareXTwitter size={26} />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
