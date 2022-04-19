import Requests from "../utils/requests";
import { useRouter } from "next/router";
const Nav = () => {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex  whitespace-nowrap  overflow-x-scroll my-8  space-x-10 sm:space-x-20 mx-4 no-scrollbar">
        {Object.entries(Requests).map(([key, { title, url }]) => {
          return (
            <h3
              key={key}
              onClick={() => router.push(`/?genre=${key}`)}
              className="hover:text-white hover:scale-110 cursor-pointer transition-all duration-100 active:text-red-500 text-xl sm:text-2xl"
            >
              {title}
            </h3>
          );
        })}
      </div>
      <div className="absolute top-0 right-0 w-1/12  h-8 bg-gradient-to-l from-gray-800 "></div>
    </nav>
  );
};

export default Nav;
