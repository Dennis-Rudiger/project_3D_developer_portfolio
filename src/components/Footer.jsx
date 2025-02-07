import React from 'react';
import { styles } from '../styles';
import { socialLinks } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-footer-gradient py-6"> {/* Reduced padding from py-12 to py-6 */}
      <div className="container mx-auto text-center">
        <div className="mb-4"> {/* Reduced margin from mb-8 to mb-4 */}
          <h3 className="text-2xl font-bold text-white">Get in touch!</h3> {/* Changed from sectionHeadText */}
          <p className="text-white mt-2 text-sm"> {/* Reduced margin and text size */}
            I'm always open to new opportunities and collaborations.
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-4"> {/* Reduced spacing and margin */}
          {socialLinks.map((social, index) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary"
            >
              <img src={social.icon} alt={social.name} className="w-5 h-5" /> {/* Reduced icon size */}
            </a>
          ))}
        </div>

        <div className="mb-2 text-sm"> {/* Reduced margin and text size */}
          <p className="text-white">
            <a href="mailto:denisrudiger@outlook.com" className="text-secondary hover:underline">denisrudiger@outlook.com</a>
          </p>
          <p className="text-white">
            <a href="tel:+254112693583" className="text-secondary hover:underline">+254112693583</a>
          </p>
        </div>

        <p className="text-white text-xs"> {/* Reduced text size */}
          &copy; {new Date().getFullYear()} Dennis. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
