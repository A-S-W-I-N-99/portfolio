import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8"
      >
        <h2 className="text-4xl font-bold text-center mb-8">
          Contact Me
        </h2>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-semibold"
          >
            Send Message
          </button>

        </form>

        <div className="flex justify-center gap-8 mt-10 text-3xl">

          <a
            href="https://github.com/A-S-W-I-N-99"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/aswin-s-99015034a"
            target="_blank"
             rel="noreferrer"
          >
           <FaLinkedin />
        </a>
            
          <a href="mailto:swnsundar@gmail.com">
            <FaEnvelope />
          </a>

        </div>
      </motion.div>
    </section>
  );
}

export default Contact;