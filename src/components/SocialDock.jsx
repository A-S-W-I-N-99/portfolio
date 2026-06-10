import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function SocialDock() {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-6">

      <a
        href="https://github.com/A-S-W-I-N-99"
        target="_blank"
        rel="noreferrer"
        className="text-2xl hover:scale-125 transition"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/aswin-s-99015034a"
        target="_blank"
        rel="noreferrer"
        className="text-2xl hover:scale-125 transition"
      >
        <FaLinkedin />
      </a>

      <a
        href="mailto:yourmail@gmail.com"
        className="text-2xl hover:scale-125 transition"
      >
        <FaEnvelope />
      </a>

    </div>
  );
}

export default SocialDock;