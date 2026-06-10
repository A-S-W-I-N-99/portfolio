import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl w-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12"
      >
        <h2 className="text-4xl font-bold mb-6 text-center">
          About Me
        </h2>

        <p className="text-gray-300 text-lg leading-8 text-center">
         React Full Stack Intern at Dot Com Infoway.
<br></br>
Passionate about building scalable web applications and preparing for software engineering placements through DSA, React, Java, and modern web technologies.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="bg-white/5 rounded-2xl p-6 text-center">
            <h3 className="text-4xl font-bold text-blue-400">10+</h3>
            <p className="mt-2 text-gray-300">Projects Built</p>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">15+</h3>
            <p className="mt-2 text-gray-300">Technologies</p>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 text-center">
            <h3 className="text-4xl font-bold text-purple-400">2</h3>
            <p className="mt-2 text-gray-300">Internships</p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

export default About;