import Stack from './stack/Stack';

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen snap-center p-10">
      <div className="p-10">
        <h3 className="text-3xl py-2">
          My <strong className="text-teal-400 hover:invert">Tech Stack</strong> in Web Development
        </h3>
        <p className="text-md py-2 leading-8">
          I'm using different technologies to build my web projects. I always keep learning new technologies
          to improve my skill in web development
        </p>
        <p>
          Keeping myself up-to-date with the latest technologies is important to me. I'm always looking for
          new ways to upskill myself.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        <Stack />
      </div>
    </section>
  );
};

export default Skills;
