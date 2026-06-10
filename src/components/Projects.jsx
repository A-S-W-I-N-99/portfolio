import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      tech: "React • Tailwind CSS • Framer Motion",
      description:
        "Personal portfolio with animations, AI assistant, command palette, and modern UI.",
    },
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
                <div className="h-48 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 mb-6 flex items-center justify-center">
                  <span className="text-5xl">🚀</span>
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  {project.tech}
                </p>

                <p className="text-gray-500 mb-6">
                  {project.description}
                </p>

                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl transition">
                  View Project
                </button>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;