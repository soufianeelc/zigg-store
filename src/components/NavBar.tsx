import { ShoppingCartIcon, UserCircleIcon } from "@heroicons/react/24/outline";
const links = ["shop", "most wanted", "new arrivals", "brands"];
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import SearchBar from "./SearchBar";

export default function NavBar() {
  const { open, setIsOpen } = useContext(CartContext);
  return (
    <div className="bg-white/40 py-3 z-50">
      <header className="container px-6 py-2 max-w-6xl flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src="/logo.svg" className="h-8 mr-3" alt="FlowBite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Zagg
          </span>
        </a>

        <ul className="hidden md:flex items-center space-x-4">
          {links.map((link) => (
            <li className="text-gray-500 transition-colors ease-out duration-100 delay-75 hover:text-gray-800 first-letter:uppercase cursor-pointer">
              {link}
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-2">
          <SearchBar />
          <button onClick={() => setIsOpen(!open)}>
            <ShoppingCartIcon className="w-5 h-5" />
          </button>

          <UserCircleIcon className="w-5 h-5" />
        </div>
      </header>
    </div>
  );
}
