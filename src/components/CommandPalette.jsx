import { useEffect, useState } from "react";
import { Command } from "cmdk";

function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);

    return () => document.removeEventListener("keydown", down);
  }, []);

  const navigateTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-start justify-center pt-32">
      <Command className="w-full max-w-xl rounded-2xl bg-slate-900 border border-white/10 p-4 text-white">

        <Command.Input
          placeholder="Search Portfolio..."
          className="w-full bg-transparent outline-none border-b border-white/10 pb-3 mb-3"
        />

        <Command.List>

          <Command.Item
            onSelect={() => navigateTo("about")}
            className="p-3 rounded-lg cursor-pointer hover:bg-white/10"
          >
            About
          </Command.Item>

          <Command.Item
            onSelect={() => navigateTo("skills")}
            className="p-3 rounded-lg cursor-pointer hover:bg-white/10"
          >
            Skills
          </Command.Item>

          <Command.Item
            onSelect={() => navigateTo("certifications")}
            className="p-3 rounded-lg cursor-pointer hover:bg-white/10"
          >
            Certifications
          </Command.Item>

          <Command.Item
            onSelect={() => navigateTo("projects")}
            className="p-3 rounded-lg cursor-pointer hover:bg-white/10"
          >
            Projects
          </Command.Item>

          <Command.Item
            onSelect={() => navigateTo("github")}
            className="p-3 rounded-lg cursor-pointer hover:bg-white/10"
          >
            GitHub
          </Command.Item>

          <Command.Item
            onSelect={() => navigateTo("contact")}
            className="p-3 rounded-lg cursor-pointer hover:bg-white/10"
          >
            Contact
          </Command.Item>

        </Command.List>
      </Command>
    </div>
  );
}

export default CommandPalette;