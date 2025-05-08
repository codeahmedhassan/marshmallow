import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter
} from "react-icons/fa6";

export default function FooterSection() {
  return (
    <footer>
      {/* Upper Footer */}
      <div className="bg-white dark:bg-[#65A4D626] py-12 px-6 border-t-4 border-[#65A4D6]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 dark:text-white text-gray-700">
          {/* Logo + Name */}
          <div className="flex flex-col items-center justify-center">
            <Image src="/logo.png" alt="Company Logo" width={150} height={150} />
            <h2 className="mt-2 text-lg font-bold">Marshmallow.Projects</h2>
          </div>

          {/* First Column */}
          <div>
            <h3 className="text-md font-semibold mb-3">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/service" className="hover:underline">Services</Link></li>
              <li><Link href="/portfolio" className="hover:underline">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Second Column */}
          <div>
            <h3 className="text-md font-semibold mb-3">More</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">BaykoToken</Link></li>
              <li><Link href="#" className="hover:underline">Perfume Business</Link></li>
              <li><Link href="#" className="hover:underline">Careers</Link></li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-md font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="https://www.facebook.com/Marshmallow.Projects" aria-label="Facebook" className="hover:text-blue-600"><FaFacebookF size={20} /></Link>
                <Link href="https://www.instagram.com/marshmallow.projects/" aria-label="Instagram" className="hover:text-pink-500"><FaInstagram size={20} /></Link>
                <Link href="https://x.com/MarshmallowProj" aria-label="Twitter/X" className="hover:text-black"><FaXTwitter size={20} /></Link>
                <Link href="https://whatsapp.com/channel/0029Vao8DJo23n3XnmFvh23X" aria-label="Twitter/X" className="hover:text-green-600"><FaWhatsapp size={20} /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black text-white py-4">
        <div className="max-w-7xl mx-auto text-center text-xs">
          Marshmallow.Projects © 2025. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
