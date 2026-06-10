import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import resume from "../assets/resume.pdf";
import profile from "../assets/profile.jpeg";
function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-4xl text-center">

        {/* Floating Avatar */}
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1"
        >
          <img
            src={profile}
            alt="Aswin"
            className="w-full h-full rounded-full object-cover"
/>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-blue-400 mb-4 text-lg"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Aswin S
        </motion.h1>

        <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
  className="text-2xl md:text-4xl font-semibold mb-6 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent"
>
  <TypeAnimation
    sequence={[
      "React Developer",
      2000,
      "Java Developer",
      2000,
      "Full Stack Developer",
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
</motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg mb-8"
        >
          Passionate about building modern web applications using React,
          Tailwind CSS, Java, and MySQL.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold"
          >
            View Projects
          </motion.button>

          <a
            href={resume}
             download
            >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-white/20 hover:bg-white/10 rounded-xl font-semibold"
            >
            Download Resume
             </motion.button>
            </a>

        </motion.div>
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.2 }}
  className="flex justify-center gap-8 md:gap-16 mt-12"
>

  <div className="text-center">
    <h3 className="text-3xl font-bold text-blue-400">
      10+
    </h3>
    <p className="text-gray-400">
      Projects
    </p>
  </div>

  <div className="text-center">
    <h3 className="text-3xl font-bold text-cyan-400">
      15+
    </h3>
    <p className="text-gray-400">
      Technologies
    </p>
  </div>

  <div className="text-center">
    <h3 className="text-3xl font-bold text-purple-400">
      2
    </h3>
    <p className="text-gray-400">
      Internships
    </p>
  </div>

</motion.div>
      </div>
    </section>
  );
}

export default Hero;