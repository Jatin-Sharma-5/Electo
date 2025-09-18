import Image from "next/image"
import {pressStart } from "@/app/layout";
import Link from "next/link"
import Searchbar from "./Searchbar";
import { Bell, Home, ShoppingBag, ShoppingCart } from "lucide-react";
import ShoppingCartIcon from "./ShoppingCartIcon";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between border-b border-blue-200 pb-4">
        {/* Left */}

        <Link href='/' className="flex items-center gap-2">
             {/* <Image src="/logo.png" width={70} height={36} alt="Logo" className="w-6 h-6 md:w-9 md:h-9" /> */}
            <span className={`${pressStart.className}  text-xl font-semibold text-blue-900`}>
                Electo
            </span>
        </Link>

        {/* Right */}

        <div className="flex items-center gap-6">
            <Searchbar/>
        <Link href='/'>
        <Home className='w-4 h-4 text-gray-700' />
        </Link>
        <Bell className='w-4 h-4 text-gray-700' />
       <ShoppingCartIcon/>
        </div>
      <Link
        href="/login"
        className="rounded-md border border-blue-200 px-4 py-2 text-sm font-medium text-gray-700 
             hover:border-blue-400 hover:text-blue-600 transition 
              shadow-blue-100 shadow-lg hover:shadow-blue-200">
        Sign In
      </Link>

        </div>
  )
}

export default Navbar