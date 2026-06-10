import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import GithubStats from "./components/GithubStats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SocialDock from "./components/SocialDock";
import Certifications from "./components/Certifications";
import AIAssistant from "./components/AIAssistant";
import CommandPalette from "./components/CommandPalette";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
const [loading, setLoading] = useState(true);

useEffect(() => {
const timer = setTimeout(() => {
setLoading(false);
}, 2000);


return () => clearTimeout(timer);


}, []);

if (loading) {
return ( <div className="h-screen bg-slate-950 flex flex-col items-center justify-center text-white">
<motion.h1
initial={{ opacity: 0, scale: 0.5 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 1 }}
className="text-6xl font-bold mb-4"
>
ASWIN<span className="text-blue-500">.</span>
</motion.h1>


    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="text-gray-400 text-xl"
    >
      Loading Portfolio...

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "200px" }}
        transition={{ duration: 1.8 }}
        className="h-1 bg-blue-500 rounded-full mt-6"
      />
    </motion.p>
  </div>
);


}

return ( <div className="bg-slate-950 text-white relative overflow-hidden"> <ParticlesBackground />


  <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 blur-[120px]" />

  <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 blur-[120px]" />

  <SocialDock />
  <CommandPalette />

  <Navbar />
  <Hero />
  <About />
  <Skills />
  <Experience />
  <Certifications />
  <Projects />
  <GithubStats />
  <AIAssistant />
  <Contact />
  <Footer />
</div>


);
}

export default App;
