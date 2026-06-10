import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import portfolioImage from "../assets/portfolio.png";
function Projects() {
  const projects = [
 {
  title: "Personal Portfolio Website",
  tech: "React • Tailwind CSS • Framer Motion • Vercel",
  description:
    "A modern personal portfolio featuring glassmorphism design, AI assistant, GitHub integration, command palette, particle background, and responsive UI.",
  image: portfolioImage,
  link: "https://portfolio-flax-six-94.vercel.app",
  github: "https://github.com/A-S-W-I-N-99/portfolio",
}
];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              transitionSpeed={1500}
              scale={1.03}
              glareEnable={true}
              glareMaxOpacity={0.15}
            >
              <motion.div
                whileHover={{
                  y: -10,
                }}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 h-full"
              >
                <img
  src={project.image}
  alt={project.title}
  className="w-full h-48 object-cover rounded-2xl mb-6"
/>

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  {project.tech}
                </p>

                <p className="text-gray-500 mb-6">
                  {project.description}
                </p>

             <div className="flex gap-3">
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl transition"
  >
    Live Demo
  </a>

  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 border border-white/20 hover:bg-white/10 rounded-xl transition"
  >
    GitHub
  </a>
</div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;