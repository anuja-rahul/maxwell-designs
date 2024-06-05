import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="fixed flex min-h-20 w-screen flex-row items-center justify-between p-1 bg-transparent z-[9999]">
      <h1 className="ml-6 font-bold text-info/50 bg-transparent">Logo</h1>
      <div
        className="flex min-w-[30%] items-center justify-around gap-x-3 text-balance rounded-full bg-info/5 px-3 py-3 text-sm 
      font-semibold text-info/50 backdrop-blur-sm duration-300 hover:bg-info/10"
      >
        <Link
          href="/"
          className="rounded-full bg-transparent px-2 py-1 duration-500 hover:-translate-y-1 hover:text-accent"
        >
          Home
        </Link>
        <Link
          href="/"
          className="rounded-full bg-transparent px-2 py-1 duration-500 hover:-translate-y-1 hover:text-accent"
        >
          About
        </Link>
        <Link
          href="/"
          className="rounded-full bg-transparent px-2 py-1 duration-500 hover:-translate-y-1 hover:text-accent"
        >
          Designs
        </Link>
        <Link
          href="/"
          className="rounded-full bg-transparent px-2 py-1 duration-500 hover:-translate-y-1 hover:text-accent"
        >
          Contact us
        </Link>
      </div>
      <div
        className="mr-6 flex items-center justify-center rounded-full bg-info/5 px-4 py-2 text-sm font-semibold text-info/50 
      backdrop-blur-sm duration-500 hover:text-accent"
      >
        <FontAwesomeIcon
          icon={faSearch}
          color="#c4c4c4"
          className="mr-2 w-4 bg-transparent"
        />
        Search
      </div>
    </header>
  );
}
