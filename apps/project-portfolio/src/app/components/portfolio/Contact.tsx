import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

function Contact() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black py-16 px-4">
      <section id="contact" className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-fadeInUp">
            Contact Me
          </h2>
          <p className="mt-4 text-gray-400 text-lg md:text-xl animate-fadeIn delay-500">
            I’m here to answer your questions and discuss opportunities. Let’s
            get in touch!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-700 rounded-md bg-gray-900 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-700 rounded-md bg-gray-900 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-700 rounded-md bg-gray-900 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-md hover:from-purple-600 hover:to-pink-700 transition duration-300 ease-in-out"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
            <div className="text-gray-400 mb-6">
              <h3 className="text-3xl font-semibold mb-4">Connect with Me:</h3>
              <p className="text-lg">
                Follow or connect with me on social media.
              </p>
            </div>
            <div className="flex gap-6 text-gray-300">
              <a
                href="https://github.com/Eerie-Cson"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-300"
              >
                <FaGithub size={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/ericson-sacdalan-32a763207/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-300"
              >
                <FaLinkedin size={32} />
              </a>
              <a
                href="https://twitter.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-300"
              >
                <FaTwitter size={32} />
              </a>
              <a
                href="https://www.instagram.com/ericseon___/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-300"
              >
                <FaInstagram size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }
        .animate-fadeIn {
          animation: fadeInUp 1.5s ease-out;
        }
      `}</style>
    </div>
  );
}

export default Contact;
