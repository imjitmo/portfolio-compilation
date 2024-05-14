import Stack from './stack/Stack';

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex flex-col gap-8 justify-center py-8">
      <div className="flex flex-col gap-2 px-8">
        <h3 className="text-3xl py-2">
          My <strong className="text-teal-400 hover:invert">Tech Stack</strong> in Web Development
        </h3>
        <div className="text-md leading-8">
          <p>
            I'm using different technologies to build my web projects. I always keep learning new technologies
            to improve my skill in web development
          </p>
          <p>
            Keeping myself up-to-date with the latest technologies is important to me. I'm always looking for
            new ways to upskill myself.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8">
        <Stack />
      </div>
    </section>
  );
};

export default Skills;
