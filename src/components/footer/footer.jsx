import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 w-full lg:w-1/7">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="list-none p-0">
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Contact Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Categories
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
          <h3 className="text-xl font-bold mb-4">Important Links</h3>
          <ul className="list-none p-0">
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Terms of Service
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        
        <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
          <h3 className="text-xl font-bold mb-4">Social-media links</h3>
          <ul className="list-none p-0">
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Facebook
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Instagram
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-400">
                Twitter
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-1/4">
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="mb-2">KS-Township</p>
          <p className="mb-2">Lahore, Pakistan</p>
          <p className="mb-2">knowledge.tech@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;