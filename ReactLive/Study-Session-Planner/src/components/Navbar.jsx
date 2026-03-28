import logo from "../assets/logo.png";
import { HiOutlineBookOpen } from "react-icons/hi";
import { FiBell, FiSettings, FiMoon } from "react-icons/fi";

function Navbar() {
  return (
    <div
      className="w-full h-20 flex items-center justify-between px-6 
                    bg-[#0b1220] border-b border-white/10"
    >
      <div className="flex items-center gap-2 cursor-pointer ">
        <HiOutlineBookOpen className="text-purple-400 text-2xl " />

        <h1 className="text-xl font-semibold text-purple-300">StudyFlow</h1>
      </div>

      {/* <div className="bg-white/10 text-gray-300 px-4 py-1 rounded-full text-sm">
        ⏱ 165 MIN TODAY
      </div> */}

      <div className="flex items-center gap-5">
        <FiBell className="text-gray-400 hover:text-white cursor-pointer text-lg" />

        <FiSettings className="text-gray-400 hover:text-white cursor-pointer text-lg" />

        <FiMoon className="text-gray-400 hover:text-white cursor-pointer text-lg" />

        <img
          src="https://i.pravatar.cc/40"
          alt="user"
          className="w-8 h-8 rounded-full border border-white/20"
        />
      </div>
    </div>
  );
}

export default Navbar;
