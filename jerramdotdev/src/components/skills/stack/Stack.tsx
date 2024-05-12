import { fadeIn } from '@/anim/variant';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { DiSqllite } from 'react-icons/di';
import { FaBootstrap, FaGit, FaGithub, FaGitlab, FaNodeJs, FaReact } from 'react-icons/fa';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import {
  SiDaisyui,
  SiDjango,
  SiExpress,
  SiFigma,
  SiLaravel,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiShadcnui,
} from 'react-icons/si';

const Stack = () => {
  return (
    <>
      {/* FRONTEND */}
      <motion.div variants={fadeIn('up', 0.2)} viewport={{ once: true }} initial="hidden" whileInView="show">
        <Card className="min-w-[360px]">
          <CardHeader>
            <CardTitle>Front-end</CardTitle>
            <CardDescription>Frameworks</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-4">
            <FaReact size={80} className="hover:text-teal-400" />
            <RiNextjsFill size={80} className="hover:text-teal-400" />
            <RiTailwindCssFill size={80} className="hover:text-teal-400" />
            <SiShadcnui size={80} className="hover:text-teal-400" />
            <SiDaisyui size={80} className="hover:text-teal-400" />
            <FaBootstrap size={80} className="hover:text-teal-400" />
          </CardContent>
          <CardFooter>
            <CardDescription className="max-w-[240px]">JavaScript, and CSS Frameworks</CardDescription>
          </CardFooter>
        </Card>
      </motion.div>
      {/* BACKEND */}
      <motion.div
        variants={fadeIn('down', 0.3)}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="show"
      >
        <Card className="min-w-[360px]">
          <CardHeader>
            <CardTitle>Back-end</CardTitle>
            <CardDescription>Frameworks</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-4">
            <FaNodeJs size={80} className="hover:text-teal-400" />
            <SiExpress size={80} className="hover:text-teal-400" />
            <RiNextjsFill size={80} className="hover:text-teal-400" />
            <SiDjango size={80} className="hover:text-teal-400" />
            <SiLaravel size={80} className="hover:text-teal-400" />
          </CardContent>
          <CardFooter>
            <CardDescription className="max-w-[240px]">JS, PHP and Python Frameworks</CardDescription>
          </CardFooter>
        </Card>
      </motion.div>

      <motion.div variants={fadeIn('up', 0.3)} viewport={{ once: true }} initial="hidden" whileInView="show">
        {/* DATA MANAGEMENT */}
        <Card className="min-w-[360px]">
          <CardHeader>
            <CardTitle>Data Management</CardTitle>
            <CardDescription>Tools and Services</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-4">
            <SiMongodb size={80} className="hover:text-teal-400" />
            <SiMysql size={80} className="hover:text-teal-400" />
            <SiPrisma size={80} className="hover:text-teal-400" />
            <SiPostgresql size={80} className="hover:text-teal-400" />
            <DiSqllite size={80} className="hover:text-teal-400" />
          </CardContent>
          <CardFooter>
            <CardDescription className="max-w-[240px]">Data Management Tools</CardDescription>
          </CardFooter>
        </Card>
      </motion.div>

      {/* OTHERS */}
      <motion.div
        variants={fadeIn('down', 0.2)}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="show"
      >
        <Card className="min-w-[360px]">
          <CardHeader>
            <CardTitle>Others</CardTitle>
            <CardDescription>Tools</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-4">
            <FaGit size={80} className="hover:text-teal-400" />
            <FaGithub size={80} className="hover:text-teal-400" />
            <FaGitlab size={80} className="hover:text-teal-400" />
            <SiFigma size={80} className="hover:text-teal-400" />
            <SiPostman size={80} className="hover:text-teal-400" />
            <SiMongoose size={80} className="hover:text-teal-400" />
          </CardContent>
          <CardFooter>
            <CardDescription className="max-w-[240px]">Development and design Tools</CardDescription>
          </CardFooter>
        </Card>
      </motion.div>
    </>
  );
};

export default Stack;
