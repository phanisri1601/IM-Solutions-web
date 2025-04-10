// src/app/components/Footer.tsx

import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white pt-16 pb-8 px-6 md:px-20">
      <div className="grid md:grid-cols-3 gap-12">
        {/* Get In Touch */}
        <div>
          <h3 className="text-2xl font-bold mb-2 text-white">Get In Touch</h3>
          <div className="w-16 border-b-2 border-red-600 mb-6"></div>
          <form className="flex flex-col gap-4">
            <input className="p-3 rounded bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-red-600" placeholder="Name*" />
            <input className="p-3 rounded bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-red-600" placeholder="Email*" />
            <input className="p-3 rounded bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-red-600" placeholder="Contact*" />
            <textarea className="p-3 rounded bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-red-600" rows={3} placeholder="Message*" />
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded w-fit transition">Submit</button>
          </form>
        </div>

        {/* Visit Us */}
        <div>
          <h3 className="text-2xl font-bold mb-2 text-white">Visit Us</h3>
          <div className="w-16 border-b-2 border-red-600 mb-6"></div>
          <div className="space-y-6 text-sm text-gray-300">
            <div className="flex items-start gap-3">
              <MapPin className="text-red-500 mt-1" />
              <div>
                <strong className="text-white">Corporate Office</strong><br />
                921, Laxmi Tower, 4th Floor, 5th Main Rd, Sector 7, HSR Layout,<br />
                Bengaluru, Karnataka 560102
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-red-500" />
              <span>+91-8880564488</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-red-500" />
              <span>info@imsolutions.mobi</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="text-red-500 mt-1" />
              <div>
                <strong className="text-white">Branch Office</strong><br />
                214, South West Block, Alwar, Rajasthan<br />
                219, Nilkanth Plaza, Varachha Road, Surat, Gujarat 395010
              </div>
            </div>
          </div>
        </div>

        {/* Follow Us & Map */}
        <div>
          <h3 className="text-2xl font-bold mb-2 text-white">Follow Us</h3>
          <div className="w-16 border-b-2 border-red-600 mb-6"></div>
          <div className="flex gap-5 mb-6 text-xl text-white">
            <a href="#" className="hover:text-red-500 transition"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-red-500 transition"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-red-500 transition"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="hover:text-red-500 transition"><i className="fab fa-youtube"></i></a>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18..."
            width="100%"
            height="180"
            loading="lazy"
            className="rounded shadow-md border border-red-600"
          ></iframe>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-16 pt-6 text-center text-sm text-gray-400">
        <p className="mb-2">
          Advertising Agency in Bangalore | SEO Agency | Digital Marketing | ORM | PPC | Social Media Marketing
        </p>
        <p className="text-white">© 2013-2025 IM Solutions | All Rights Reserved | <span className="text-red-500">Privacy Policy</span></p>
      </div>
    </footer>
  );
};

export default Footer;
