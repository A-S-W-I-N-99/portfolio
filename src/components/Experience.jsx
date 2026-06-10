import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      year: "2026",
      title: "React Full Stack Intern",
      company: "DOT COM  INFOWAY",
      description:
        "Worked on React applications, responsive UI development, and frontend integration.",
    },
    {
      year: "2025",
      title: "Web Development Intern",
      company: "R SUN TECHONOLOGY",
      description:
        "Learned Web development concepts and built web applications.",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-4xl w-full">

        <h2 className="text-4xl font-bold text-center mb-16">
          Experience
        </h2>

        <div className="relative border-l border-white/20 ml-6">

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12 ml-10"
            >
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2"></div>

              <p className="text-blue-400 font-semibold">
                {exp.year}
              </p>

              <h3 className="text-2xl font-bold mt-2">
                {exp.title}
              </h3>

              <h4 className="text-gray-400 mt-1">
                {exp.company}
              </h4>

              <p className="text-gray-300 mt-4">
                {exp.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;