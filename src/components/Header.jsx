import React from "react";
import { Link2 } from "lucide-react";
function Header() {
  return (
    <div className="flex flex-col items-center text-center mt-12 px-4">
      
      {/* Logo + App Name */}
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-600 text-white p-3 rounded-xl shadow">
          <Link2 size={20}/>
        </div>
        <h1 className="text-2xl font-bold tracking-wide">
          Shortify
        </h1>
      </div>

      {/* Heading */}
      <h2 className="text-4xl font-extrabold max-w-3xl leading-tight">
        Shorten your long URLs instantly
      </h2>

      {/* Sub text */}
      <p className="mt-4 text-gray-500 max-w-xl text-lg">
        Transform lengthy links into clean, shareable URLs in seconds.
      </p>

    </div>
  );
}

export default Header;
