import { navLinks } from "@/constants/NavConfig";
import Link from 'next/link';
import Image from "next/image";


const Header: React.FC = () => {
  return (
    <header className="flex flex-col justify-center items-center bg-blue-600 shadow-md w-full bg-white shadow-md gap-4">
      <div className="flex items-center justify-center bg-emeraldTint w-full">
        <div className=" flex items-center justify-center gap-[5px] sm:gap[10px] w-full max-w-[100%] xs:max-w-[70%] h-[50px]">
          <Image
            src="/assets/images/icons/bag.svg"
            alt="Infor"
            width={15}
            height={15}
            className="w-[15px] h-[15px] xs:w-[20px] xs:h-[20px] text-white"
          />

          <p className="text-xs xs:text-xs text-white flex-1 flex items-center flex-wrap">
            Overseas trip? Get the latest information on travel guides
          </p>

          <button
            className="bg-black text-white px-2 py-1 rounded-3xl text-xs sm:text-xs w-[70px] text-center whitespace-nowrap overflow-hidden shrink-0"
          >
            More Info
          </button>

        </div>
      </div>

      <div className="flex flex-wrap justify-around items-center gap-[10px] w-full px-4">

        <Image src="/assets/images/logo/Vector.svg" alt="logo" width={35} height={35} className="text-black hidden xs:block" />

        <div className="flex items-center justify-between bg-white rounded-full shadow-md px-4 py-1 w-1/2 max-w-lg min-w-[150px] mx-auto border border-gray-200">
          <div className="flex flex-row gap-2 w-full overflow-x-auto whitespace-nowrap scrollbar-hide">

            <div className="flex flex-col gap-1 justify-end min-h-[48px] w-[80px]">
              <label className="text-sm">Where to </label>
              <input
                type="text"
                placeholder="Location?"
                className="text-xs sm:block border-none focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-1 justify-end min-h-[48px] w-[60px]">
              <label className="text-sm sm:flex hidden">Check in</label>
              <input
                type="text"
                placeholder=" Add date"
                className="text-xs sm:block border-none focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-1 justify-end min-h-[48px] w-[60px] sm:flex hidden">
              <label className="text-sm ">Check out</label>
              <input
                type="text"
                placeholder=" Add date"
                className="text-xs sm:block border-none focus:outline-none sm:flex hidden"
              />
            </div>

            <div className="flex flex-col gap-1 justify-end min-h-[48px] w-[60px]">
              <label className="text-sm sm:flex hidden">People</label>
              <input
                type="number"
                min="1"
                placeholder=" Add guest"
                className="text-xs sm:block border-none focus:outline-none"
              />
            </div>
          </div>
          <button title="Search" className="bg-yellow-400 text-white p-2 rounded-full  hover:bg-yellow-600">
            <Image src="/assets/images/icons/search-button.svg" alt="search" width={20} height={20} className="text-white" />
          </button>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-2">
          <button className="bg-emeraldTint text-white px-3 py-1 rounded-full text-sm sm:text-base xs:block hidden hover:bg-emeraldTintHover transition-colors duration-300">
            Sign In
          </button>

          <button className="bg-white-500 text-gray-600 px-3 py-1 rounded-full text-sm sm:text-base xs:block hidden border border-gray-300 hover:bg-white-700 hover:border-gray-400 transition-colors duration-300">
            Sign Up
          </button>
          <Image src="/assets/images/icons/user.svg" alt="logo" width={35} height={35} className="text-black xs:hidden " />

        </div>

      </div>

      <div className="w-full overflow-x-auto whitespace-nowrap py-2 scrollbar-hide">
        <nav className="flex px-2 gap-4">
          {navLinks.map((nav, idx) => (
            <Link
              key={idx}
              href={nav.href}
              className="flex flex-col items-center justify-center space-y-2 hover:text-blue-600"
            >
              <Image
                src={nav.iconSrc}
                alt={nav.label}
                width={15}
                height={15}
                className="w-[18px] h-[18px] sm:w-[25px] sm:h-[25px] text-black"
              />
              <span className="text-black-500 text-xs sm:text-sm">{nav.label}</span>
            </Link>
          ))}
        </nav>
      </div>


    </header>
  );
}

export default Header;