import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-[#0A0A0E] border-t border-white/5 text-center">
      <p className="text-gray-500 font-mono text-sm">
        © {new Date().getFullYear()} Andy Li. Built with React & Tailwind.
      </p>
    </footer>
  );
};

export default Footer;