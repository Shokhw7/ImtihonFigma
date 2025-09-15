import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-[32.5px] lg:px-[124px] md:px-[32px] sm:px-[16px]">
      <img className="" src="../assets/images/logo.svg" alt="Logo" />

      <ul className="hidden md:flex gap-10 text-[1.6rem] text-preset-7">
        <li>
          <Link to="/" className="">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="">
            About
          </Link>
        </li>
        <li>
          <Link to="/recipes" className="">
            Recipes
          </Link>
        </li>
      </ul>

      <div className="hidden md:block">
        <Link to={"/recipes"}>
        <button className="btn w-[169px] ml-[93px] px-[12px] py-[16px] h-[52px] text-[2rem]">
          Browse recipes
        </button>
        </Link>
      </div>

      <button
        className="md:hidden border px-3 py-1 rounded text-[1.6rem]"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {isOpen && (
        <div className="absolute top-33 left-0 w-full bg-white shadow-md flex flex-col gap-4 px-6 py-6 md:hidden text-preset-7 z-20">
          <Link to="/" className="" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/recipes" className="" onClick={() => setIsOpen(false)}>
            Recipes
          </Link>

        <Link to={"/recipes"}>
          <button className="btn w-full h-[52px] px-[12px] py-[16px] text-[2rem]">
            Browse recipes
          </button>
        </Link>
        
        </div>
      )}
    </nav>
  );
}

export default Navbar;
