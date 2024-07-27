import { SetStateAction, useState } from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaPinterest, FaTwitter } from 'react-icons/fa';

const ContactUs = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

  const handleNewsletterSignup = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log('Newsletter signup:', email);
  };

  return (
    <div className="py-24 px-6 md:px-12 lg:px-24 xl:px-48 2xl:px-64 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Contact Form and Info */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-16 bg-white p-10 rounded-lg shadow-lg">
          {/* Contact Form */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h1 className="text-4xl font-bold text-blue-700 mb-4">Contact Us</h1>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-700"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-700"
              />
              <textarea
                placeholder="Your Message"
                rows={6}
                className="p-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-700"
              ></textarea>
              <button
                type="submit"
                className="p-4 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* Contact Info */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h1 className="text-4xl font-bold text-blue-700 mb-4">Get in Touch</h1>
            <p className="text-lg leading-relaxed">
              If you have any questions, feedback, or just want to say hello, feel free to reach out to us. We're here to help and would love to hear from you!
            </p>
            <p className="text-lg leading-relaxed">
              <strong>Address:</strong> 3252 Winding Way, Central Plaza, Willowbrook, CA 90210, United States
            </p>
            <p className="text-lg leading-relaxed">
              <strong>Email:</strong> hello@geomancycoaching.org
            </p>
            <p className="text-lg leading-relaxed">
              <strong>Phone:</strong> +1 234 567 890
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-blue-700 text-3xl hover:text-blue-900 transition duration-300" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-blue-700 text-3xl hover:text-blue-900 transition duration-300" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-blue-700 text-3xl hover:text-blue-900 transition duration-300" />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                <FaPinterest className="text-blue-700 text-3xl hover:text-blue-900 transition duration-300" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-blue-700 text-3xl hover:text-blue-900 transition duration-300" />
              </a>
            </div>
          </div>
        </div>
        {/* Newsletter Signup */}
        <div className="bg-white p-10 rounded-lg shadow-lg flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">Subscribe to Our Newsletter</h1>
          <p className="text-lg leading-relaxed">
            Stay updated with the latest news, articles, and resources, sent straight to your inbox. Subscribe now!
          </p>
          <form className="flex gap-4" onSubmit={handleNewsletterSignup}>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={handleEmailChange}
              className="p-4 w-3/4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-700"
            />
            <button
              type="submit"
              className="w-1/4 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
