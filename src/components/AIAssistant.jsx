import { useState } from "react";

function AIAssistant() {
  const [message, setMessage] = useState("");

  const [chat, setChat] = useState([
    {
      sender: "ai",
      text: "Hi! I'm Aswin AI. Ask me about skills, certifications, GitHub, internships, or contact information.",
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const handleAsk = () => {
    if (!message.trim()) return;

    let aiReply = "";

    const msg = message.toLowerCase();

    if (msg.includes("skills")) {
      aiReply =
        "I work with React, JavaScript, Tailwind CSS, Java, MySQL, Git and GitHub.";
    } else if (msg.includes("certificate")) {
      aiReply =
        "I have completed the Cisco Networking Academy IoT certification.";
    } else if (msg.includes("github")) {
      aiReply =
        "My GitHub username is A-S-W-I-N-99.";
    } else if (msg.includes("internship")) {
      aiReply =
        "I am currently gaining experience through Full Stack Development internships.";
    } else if (msg.includes("contact")) {
      aiReply =
        "You can reach me through LinkedIn, GitHub, or the contact form.";
    } else {
      aiReply =
        "Try asking about my skills, certifications, internships, GitHub, or contact information.";
    }

    setChat((prev) => [
      ...prev,
      {
        sender: "user",
        text: message,
      },
    ]);

    setMessage("");
    setIsTyping(true);

    setTimeout(() => {
      setChat((prev) => [
        ...prev,
        {
          sender: "ai",
          text: aiReply,
        },
      ]);

      setIsTyping(false);
    }, 1200);
  };

  return (
    <section
      id="assistant"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-3xl w-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
        
        <h2 className="text-4xl font-bold text-center mb-8">
          🤖 Ask Aswin AI
        </h2>

        {/* Suggested Questions */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <button
            onClick={() => setMessage("skills")}
            className="px-4 py-2 bg-white/10 rounded-full hover:bg-white/20"
          >
            Skills
          </button>

          <button
            onClick={() => setMessage("certificate")}
            className="px-4 py-2 bg-white/10 rounded-full hover:bg-white/20"
          >
            Certificate
          </button>

          <button
            onClick={() => setMessage("github")}
            className="px-4 py-2 bg-white/10 rounded-full hover:bg-white/20"
          >
            GitHub
          </button>

          <button
            onClick={() => setMessage("internship")}
            className="px-4 py-2 bg-white/10 rounded-full hover:bg-white/20"
          >
            Internship
          </button>

          <button
            onClick={() => setMessage("contact")}
            className="px-4 py-2 bg-white/10 rounded-full hover:bg-white/20"
          >
            Contact
          </button>
        </div>

        {/* Chat Area */}
        <div className="h-80 overflow-y-auto mb-6 space-y-4">
          {chat.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] px-4 py-3 rounded-2xl ${
                  msg.sender === "user"
                    ? "bg-blue-600"
                    : "bg-white/10"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white/10 px-4 py-3 rounded-2xl animate-pulse">
                Typing...
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask me anything..."
          className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAsk();
            }
          }}
        />

        <button
          onClick={handleAsk}
          className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl"
        >
          Ask
        </button>
      </div>
    </section>
  );
}

export default AIAssistant;