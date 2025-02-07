import React from 'react';
import { styles } from '../styles';
import { socialLinks } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-tertiary py-12">
      <div className="container mx-auto text-center">
        <div className="mb-8">
          <h3 className={styles.sectionHeadText}>Get in touch!</h3>
          <p className="text-white mt-4">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((social, index) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary"
            >
              <img src={social.icon} alt={social.name} className="w-6 h-6" />
            </a>
          ))}
        </div>

        <div className="mb-4">
          <p className="text-white">
            Email: <a href="mailto:denis@example.com" className="text-secondary hover:underline">denis@example.com</a>
          </p>
          <p className="text-white">
            Phone: <a href="tel:+15551234567" className="text-secondary hover:underline">+1 (555) 123-4567</a>
          </p>
        </div>

        <p className="text-white text-sm">
          &copy; {new Date().getFullYear()} Denis. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
