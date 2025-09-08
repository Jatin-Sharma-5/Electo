import React from "react";
import Link from "next/link";
import { pressStart } from "@/app/layout";
import { Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    // <footer className="w-full bg-blue-50 text-gray-800">
    //   <div className="mx-auto max-w-7xl px-6 py-12">
    //     {/* Top Section */}
    //     <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
    //       {/* Logo / Brand */}
    //       <div className={`${pressStart.className}`}>
    //         <Link href="/" className="text-2xl  tracking-tight  text-blue-900">
    //           Electo
    //         </Link>
    //          </div>

    //       {/* Navigation */}
    //       <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-600">
    //         <Link href="/about" className="hover:text-gray-900 transition">About</Link>
    //         <Link href="/shop" className="hover:text-gray-900 transition">Shop</Link>
    //         <Link href="/blog" className="hover:text-gray-900 transition">Blog</Link>
    //         <Link href="/contact" className="hover:text-gray-900 transition">Contact</Link>
    //       </nav>

    //       {/* Social Icons */}
    //       <div className="flex gap-4">
    //         <a href="https://twitter.com" target="_blank" className="rounded-full border border-gray-200 p-2 hover:border-blue-400 transition">
    //           <Twitter className="h-4 w-4 text-gray-900 hover:text-gray-900" />
    //         </a>
    //         <a href="https://instagram.com" target="_blank" className="rounded-full border border-gray-200 p-2 hover:border-blue-400 transition">
    //           <Instagram className="h-4 w-4 text-gray-900 hover:text-gray-900" />
    //         </a>
    //         <a href="https://linkedin.com" target="_blank" className="rounded-full border border-gray-200 p-2 hover:border-blue-400 transition">
    //           <Linkedin className="h-4 w-4 text-gray-900 hover:text-gray-900" />
    //         </a>
    //       </div>
    //     </div>

    //     {/* Divider */}
    //     <div className="my-10 border-t border-gray-200"></div>

    //     {/* Bottom Section */}
    //     <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
    //       <p>© {new Date().getFullYear()} Electo. All rights reserved.</p>
    //       <div className="flex gap-6">
    //         <Link href="/privacy" className="hover:text-gray-900 transition">Privacy</Link>
    //         <Link href="/terms" className="hover:text-gray-900 transition">Terms</Link>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    // Tesla / Bold Brand Footer  

    <footer className="mt-16 w-full bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-300
     shadow-lg shadow-gray-800">
      <div className="mx-auto max-w-5xl px-6 py-12 text-center">
        {/* Logo */}
          <h1 className={`${pressStart.className}  text-xl font-semibold text-blue-300`}>
          ELECTO </h1>

        {/* Links */}
        <nav className="mt-6 flex flex-wrap justify-center gap-8 text-sm text-gray-200">
          <Link href="#" className="hover:text-blue-300">Shop</Link>
          <Link href="#" className="hover:text-blue-300">About</Link>
          <Link href="#" className="hover:text-blue-300">Support</Link>
          <Link href="#" className="hover:text-blue-300">Contact</Link>
        </nav>

        {/* Bottom */}
        <p className="mt-8 text-xs text-gray-200">
          © {new Date().getFullYear()} Electo. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;



   


    // Apple-Inspired Minimal Footer
    // <footer className="w-full bg-blue-50 text-gray-600">
    //   <div className="mx-auto max-w-6xl px-6 py-10 space-y-8">
    //     {/* Links */}
    //     <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
    //       <a href="#" className="hover:text-gray-900">About</a>
    //       <a href="#" className="hover:text-gray-900">Careers</a>
    //       <a href="#" className="hover:text-gray-900">Blog</a>
    //       <a href="#" className="hover:text-gray-900">Contact</a>
    //     </nav>

    //     {/* Divider */}
    //     <div className="border-t border-gray-200"></div>

    //     {/* Bottom */}
    //     <div className="flex flex-col items-center justify-between gap-4 text-xs text-gray-500 md:flex-row">
    //       <p>© {new Date().getFullYear()} Electo. All rights reserved.</p>
    //       <div className="flex gap-6">
    //         <a href="#" className="hover:text-gray-900">Privacy</a>
    //         <a href="#" className="hover:text-gray-900">Terms</a>
    //       </div>
    //     </div>
    //   </div>
    // </footer>


    // Shopify-Inspired Newsletter Footer
    // <footer className="w-full bg-gray-50">
    //   <div className="mx-auto max-w-6xl px-6 py-12 space-y-8">
    //     {/* Newsletter */}
    //     <div className="flex flex-col items-center text-center sm:flex-row sm:justify-between">
    //       <h3 className="text-lg font-semibold text-gray-900">Stay in the loop</h3>
    //       <form className="mt-4 flex w-full max-w-sm sm:mt-0">
    //         <input
    //           type="email"
    //           placeholder="Enter your email"
    //           className="w-full rounded-l-md border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none"
    //         />
    //         <button
    //           type="submit"
    //           className="rounded-r-md bg-black px-4 py-2 text-sm text-white hover:bg-gray-800"
    //         >
    //           Subscribe
    //         </button>
    //       </form>
    //     </div>

    //     {/* Bottom */}
    //     <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row">
    //       <p>© {new Date().getFullYear()} Electo. All rights reserved.</p>
    //       <nav className="flex gap-6">
    //         <a href="#">Privacy</a>
    //         <a href="#">Terms</a>
    //       </nav>
    //     </div>
    //   </div>
    // </footer>

    //  Stripe-Inspired Grid Footer
    // <footer className="w-full bg-gray-900 text-gray-300">
    //   <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
    //     {/* Column */}
    //     <div>
    //       <h3 className="text-sm font-semibold text-white">Product</h3>
    //       <ul className="mt-4 space-y-2 text-sm">
    //         <li><a href="#">Features</a></li>
    //         <li><a href="#">Pricing</a></li>
    //         <li><a href="#">Integrations</a></li>
    //       </ul>
    //     </div>

    //     {/* Column */}
    //     <div>
    //       <h3 className="text-sm font-semibold text-white">Company</h3>
    //       <ul className="mt-4 space-y-2 text-sm">
    //         <li><a href="#">About</a></li>
    //         <li><a href="#">Careers</a></li>
    //         <li><a href="#">News</a></li>
    //       </ul>
    //     </div>

    //     {/* Column */}
    //     <div>
    //       <h3 className="text-sm font-semibold text-white">Support</h3>
    //       <ul className="mt-4 space-y-2 text-sm">
    //         <li><a href="#">Help Center</a></li>
    //         <li><a href="#">Contact</a></li>
    //       </ul>
    //     </div>

    //     {/* Column */}
    //     <div>
    //       <h3 className="text-sm font-semibold text-white">Legal</h3>
    //       <ul className="mt-4 space-y-2 text-sm">
    //         <li><a href="#">Privacy</a></li>
    //         <li><a href="#">Terms</a></li>
    //       </ul>
    //     </div>
    //   </div>

    //   {/* Bottom */}
    //   <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
    //     © {new Date().getFullYear()} Electo. All rights reserved.
    //   </div>
    // </footer>

    // Luxury / Premium Gradient Footer
    // <footer className="w-full bg-gradient-to-b from-gray-50 to-gray-100">
    //   <div className="mx-auto max-w-6xl px-6 py-12 text-center">
    //     {/* Logo */}
    //     <h1 className="text-2xl font-bold tracking-wide text-gray-900">ELECTO</h1>

    //     {/* Social Icons */}
    //     <div className="mt-6 flex justify-center gap-4">
    //       <a href="#" className="text-gray-600 hover:text-black">Twitter</a>
    //       <a href="#" className="text-gray-600 hover:text-black">Instagram</a>
    //       <a href="#" className="text-gray-600 hover:text-black">LinkedIn</a>
    //     </div>

    //     {/* Bottom */}
    //     <p className="mt-8 text-xs text-gray-500">
    //       © {new Date().getFullYear()} Electo. Crafted with ♥
    //     </p>
    //   </div>
    // </footer>

