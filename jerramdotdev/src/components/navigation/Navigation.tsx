import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsBriefcase, BsChatSquareText, BsClipboardData } from 'react-icons/bs';
import { Link } from 'react-scroll';
import { ModeToggler } from '../ModeToggler';

const Navigation = () => {
  return (
    <nav className="fixed top-1/2 left-12 transform -translate-x-1/2 -translate-y-1/2 w-16 overflow-hidden z-50">
      <div className="mx-auto">
        <div className="w-full bg-slate-950/70 dark:bg-slate-100/20 h-[320px] backdrop-blur-2xl rounded-full max-w-[60px] mx-auto px-5 flex flex-col justify-between items-center text-2xl text-white/50">
          <Link
            to="home"
            activeClass="border-b border-slate-100"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            activeClass="bg-slate-50 text-slate-950"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BiUser />
          </Link>
          <Link
            to="skills"
            activeClass="bg-slate-50 text-slate-950"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsClipboardData />
          </Link>
          <Link
            to="portfolio"
            activeClass="bg-slate-50 text-slate-950"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsBriefcase />
          </Link>
          <Link
            to="contact"
            activeClass="bg-slate-50 text-slate-950"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsChatSquareText />
          </Link>
          <Link
            to="/"
            activeClass="border-b"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] text-slate-100 h-[60px] flex items-center justify-center"
          >
            <ModeToggler />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;