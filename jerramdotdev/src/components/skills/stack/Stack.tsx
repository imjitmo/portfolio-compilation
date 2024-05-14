import { fadeIn } from '@/anim/variant';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { DiSqllite } from 'react-icons/di';

import { FaBootstrap, FaGit, FaGithub, FaGitlab, FaNodeJs, FaReact } from 'react-icons/fa';
import { RiBearSmileFill, RiNextjsFill, RiTailwindCssFill, RiVuejsLine } from 'react-icons/ri';
import {
  SiDaisyui,
  SiDjango,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiJquery,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiRedux,
  SiShadcnui,
  SiSupabase,
} from 'react-icons/si';

const Stack = () => {
  return (
    <>
      {/* FRONTEND */}
      <motion.div variants={fadeIn('up', 0.2)} viewport={{ once: true }} initial="hidden" whileInView="show">
        <Card className="min-w-[360px]">
          <CardHeader>
            <CardTitle>Front-end</CardTitle>
            <CardDescription>List</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-4">
            <FaReact className="size-14 hover:text-teal-400" />
            <RiNextjsFill className="size-14 hover:text-teal-400" />
            <RiVuejsLine className="size-14 hover:text-teal-400" />
            <SiShadcnui className="size-14 hover:text-teal-400" />
            <SiDaisyui className="size-14 hover:text-teal-400" />
            <RiTailwindCssFill className="size-14 hover:text-teal-400" />
            <FaBootstrap className="size-14 hover:text-teal-400" />
          </CardContent>
          <CardFooter>
            <CardDescription className="max-w-[240px]">Environment, Library & Framework</CardDescription>
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
            <CardDescription>List</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-4">
            <FaNodeJs className="size-14 hover:text-teal-400" />
            <SiExpress className="size-14 hover:text-teal-400" />
            <RiNextjsFill className="size-14 hover:text-teal-400" />
            <SiDjango className="size-14 hover:text-teal-400" />
            <SiLaravel className="size-14 hover:text-teal-400" />
            <SiJquery className="size-14 hover:text-teal-400" />
            <SiNestjs className="size-14 hover:text-teal-400" />
          </CardContent>
          <CardFooter>
            <CardDescription className="max-w-[240px]">Environment, Library & Framework</CardDescription>
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
            <SiMongodb className="size-14 hover:text-teal-400" />
            <SiMysql className="size-14 hover:text-teal-400" />
            <SiPrisma className="size-14 hover:text-teal-400" />
            <SiPostgresql className="size-14 hover:text-teal-400" />
            <DiSqllite className="size-14 hover:text-teal-400" />
            <SiFirebase className="size-14 hover:text-teal-400" />
            <SiSupabase className="size-14 hover:text-teal-400" />
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
            <FaGit className="size-14 hover:text-teal-400" />
            <FaGithub className="size-14 hover:text-teal-400" />
            <FaGitlab className="size-14 hover:text-teal-400" />
            <SiFigma className="size-14 hover:text-teal-400" />
            <SiPostman className="size-14 hover:text-teal-400" />
            <SiRedux className="size-14 hover:text-teal-400" />
            <RiBearSmileFill className="size-14 hover:text-teal-400" />
          </CardContent>
          <CardFooter>
            <CardDescription className="max-w-[240px]">Development and, Design Tools</CardDescription>
          </CardFooter>
        </Card>
      </motion.div>
    </>
  );
};

export default Stack;
