import { motion } from "framer-motion";
import certificatePdf from "../assets/cisco-certificate.pdf";

const certifications = [
  {
    title: "AI for Beginners",
    issuer: "HP LIFE",
    year:"2026",
    certificate: "/certificates/ai-beginners.pdf",
  },
  {
    title: "Programming In Java",
    issuer: "NPTEL",
     year:"2025",
    certificate: "/certificates/nptel-java.pdf",
  },
{
  title: "AI Workshop",
  issuer: "Dell",
  year: "2025",
  certificate: "/certificates/dell-ai-workshop.pdf",
},
  {
    title: "Learn Java Programming from Basics to Experts",
    issuer: "Udemy",
     year:"2025",
    certificate: "/certificates/udemy-java.pdf",
  },
  {
    title: "Cybersecurity for Beginners",
    issuer: "TATA STRIVE",
     year:"2025",
    certificate: "/certificates/tata-cybersecurity.pdf",
  },
 {
 title: "Exploring IoT with Cisco Packet Tracer",
 issuer: "Cisco Networking Academy",
 year: "2026",
 certificate: certificatePdf,
},
];

function Certifications() {
  return (
    <section
      id="certifications"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-6xl w-full">

        <h2 className="text-4xl font-bold text-center mb-12">
          Certifications & Internships
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 overflow-hidden"
            >
              <h3 className="text-xl font-bold mb-3">
                {cert.title}
              </h3>
              

              <p className="text-gray-400">
                {cert.issuer}
              </p>

              <p className="text-blue-400 mt-4">
                {cert.year}
              </p>
       <a
  href={cert.certificate}
  target="_blank"
  rel="noreferrer"
  className="inline-block mt-4 px-4 py-2 bg-blue-600 rounded-xl hover:bg-blue-700"
>
  View Certificate
</a>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;