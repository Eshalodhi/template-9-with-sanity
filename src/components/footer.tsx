import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    
    <footer className="relative bg-black text-gray-400">
      {/* Yellow Line */}
      <div className="w-center h-1 bg-[#ff9f0d]"></div>

      {/* Top Section */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us Section */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">About Us</h4>
          <p className="text-sm leading-relaxed mb-4">
            Corporate clients and leisure travelers have been relying on
            Groundlink for dependable, safe, and professional chauffeured car
            service in major cities across the world.
          </p>
          <div className="flex items-start space-x-2 mt-4">
            {/* Opening Hours Box */}
            <div className="bg-[#ff9f0d] text-white w-8 h-8 flex items-center justify-center rounded-md">
              <span className="text-lg">&#8635;</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Opening Hours</p>
              <p className="text-sm">Mon - Sat: 8:00 - 6:00</p>
              <p className="text-sm">Sunday - Closed</p>
            </div>
          </div>
        </div>

        {/* Useful Links Section */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Useful Links</h4>
          <ul className="space-y-2 text-sm">
            {["About", "News", "Partners", "Team", "Menu", "Contacts"].map((link, index) => (
              <li key={index}>
                <a href="#" className="hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Help?</h4>
          <ul className="space-y-2 text-sm">
            {[
              "FAQ",
              "Terms & Conditions",
              "Reporting",
              "Documentation",
              "Support Policy",
              "Privacy",
            ].map((helpItem, index) => (
              <li key={index}>
                <a href="#" className="hover:text-white">
                  {helpItem}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Post Section */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Recent Post</h4>
          <ul className="space-y-4 text-sm">
            {[
              { img: "/unsplash_tzl1UCXg5Es.png", date: "20 Feb 2022", title: "Keep Your Business" },
              { img: "/unsplash_CRoAeTh5S_I.png", date: "20 Feb 2022", title: "Keep Your Business" },
              { img: "/Mask Group.png", date: "20 Feb 2022", title: "Keep Your Business" },
            ].map((post, index) => (
              <li key={index} className="flex items-center">
                <div className="w-12 h-12 relative rounded-md overflow-hidden mr-4">
                  <Image
                    src={post.img}
                    alt={`Post Thumbnail ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div>
                  <p className="text-white font-medium">{post.title}</p>
                  <p className="text-xs text-gray-500">{post.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-[#ff9f0d] text-white relative">
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2022 Ayeman. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* Icons in Square Boxes */}
            <a
              href="#"
              className="bg-white text-[#ff9f0d] w-8 h-8 flex items-center justify-center rounded-md hover:bg-black hover:text-white"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="bg-white text-[#ff9f0d] w-8 h-8 flex items-center justify-center rounded-md hover:bg-black hover:text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-white text-[#ff9f0d] w-8 h-8 flex items-center justify-center rounded-md hover:bg-black hover:text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-white text-[#ff9f0d] w-8 h-8 flex items-center justify-center rounded-md hover:bg-black hover:text-white"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              className="bg-white text-[#c48425] w-8 h-8 flex items-center justify-center rounded-md hover:bg-black hover:text-white"
            >
              <FaPinterest />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
