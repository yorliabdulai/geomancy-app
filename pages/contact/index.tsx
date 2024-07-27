import { SetStateAction, useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';

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
    <section className="bg-blue-50 dark:bg-slate-800" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
              Contact
            </p>
            <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
              We are here to assist you with all your geomancy needs and inquiries.
            </p>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                Whether you have a question about our services, need assistance with your geomancy practices, or just want to provide feedback, we are here to help.
              </p>
              <ul className="mb-6 md:mb-0">
                <li className="flex mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <FaMapMarkerAlt className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Our Address</h3>
                    <p className="text-gray-600 dark:text-slate-400">123 Geomancy Street</p>
                    <p className="text-gray-600 dark:text-slate-400">Accra, Ghana</p>
                  </div>
                </li>
                <li className="flex mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <FaPhoneAlt className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact</h3>
                    <p className="text-gray-600 dark:text-slate-400">Mobile: +233 (0) 123-456-789</p>
                    <p className="text-gray-600 dark:text-slate-400">Email: support@geomancyapp.com</p>
                  </div>
                </li>
                <li className="flex mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <FaClock className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Working Hours</h3>
                    <p className="text-gray-600 dark:text-slate-400">Monday - Friday: 09:00 - 18:00</p>
                    <p className="text-gray-600 dark:text-slate-400">Saturday: 09:00 - 13:00</p>
                    <p className="text-gray-600 dark:text-slate-400">Sunday: Closed</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
              <h2 className="mb-4 text-2xl font-bold dark:text-white">Ready to Get Started?</h2>
              <form id="contactForm">
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label>
                    <input
                      type="text"
                      id="name"
                      autoComplete="given-name"
                      placeholder="Your name"
                      className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                      name="name"
                    />
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label>
                    <input
                      type="email"
                      id="email"
                      autoComplete="email"
                      placeholder="Your email address"
                      className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                      name="email"
                    />
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label>
                    <textarea
                      id="textarea"
                      name="textarea"
                      cols={30}
                      rows={5}
                      placeholder="Write your message..."
                      className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                    ></textarea>
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold dark:text-white">Subscribe to our Newsletter</h2>
          <p className="mt-2 text-gray-600 dark:text-slate-400">Stay updated with the latest news and promotions</p>
          <form onSubmit={handleNewsletterSignup} className="mt-4 flex justify-center">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className="rounded-l-md border border-gray-400 py-2 pl-4 pr-2 shadow-md dark:text-gray-300 dark:bg-slate-800"
            />
            <button type="submit" className="bg-blue-800 text-white px-4 py-2 rounded-r-md">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
