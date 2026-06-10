import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";

function GithubStats() {
  return (
    <section
      id="github"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl w-full"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          GitHub Activity
        </h2>

        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 overflow-x-auto">

          <GitHubCalendar username="A-S-W-I-N-99" />

          <div className="flex justify-center mt-8">
            <a
              href="https://github.com/A-S-W-I-N-99"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700"
            >
              Visit GitHub
            </a>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

export default GithubStats;