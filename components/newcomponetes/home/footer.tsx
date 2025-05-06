import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10 px-4 md:px-16 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: About */}
        <div>
          <h2 className="text-xl font-bold mb-2">🚀 CodeRani Blog</h2>
          <p className="text-sm">
            “Code se hi toh duniya hai ✨ — keep building, keep learning.”{" "}
            <br />
            Follow for dev tips, trends & tutorials in full-stack development!
          </p>
        </div>

        {/* Center: Links */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <a href="#" className="hover:underline">
            Get Started
          </a>
          <a href="#" className="hover:underline">
            Read Articles
          </a>
          <a href="#" className="hover:underline">
            Join Community
          </a>
        </div>

        {/* Right: Social & Stats */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Connect with us</h3>
          <div className="flex gap-4 mb-4">
            <a
              href="https://www.linkedin.com/in/sandeep-kumar-sahu-ab9a73303/"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sandeep-kumar-sahu-ab9a73303/"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sandeep-kumar-sahu-ab9a73303/"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sandeep-kumar-sahu-ab9a73303/"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          <div className="text-sm space-y-1">
            <p>📝 1.5K+ Published articles</p>
            <p>👨‍💻 1K+ Developers</p>
            <p>📆 15+ Years of Experience</p>
          </div>
        </div>
      </div>

      <Separator className="my-6" />

      <div className="text-center text-sm">
        © {new Date().getFullYear()} CodeRani Blog. All rights reserved. 💻❤️
      </div>
    </footer>
  );
};

export default Footer;
