import { navBar } from "@/constant/navbar";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-16 z-50  bg-slate-100/50 text-slate-600 fixed top-0  items-center  w-full flex  justify-around">
      <div>
        <Link href={`#Home`}>
          <h2>YALA Travel</h2>
        </Link>
      </div>
      <div className="hidden md:flex items-center">
        {navBar.map((nav):any => (
          <Link
 key={nav}         
            href={`#${nav}`}
            className={`mx-3 ${
              nav === "Contact"
                ? " font-extrabold text-white px-5 p-1 bg-cyan-500 rounded-full"
                : "text-slate-600"
            }`}
          >
            {nav}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
