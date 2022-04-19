import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
const Thumbnail = ({ result }) => {
  const baseURL = "https://image.tmdb.org/t/p/original";
  return (
    <div className="group cursor-pointer p-2 transition-all duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        layout="responsive"
        height={1080}
        width={1920}
        src={`${baseURL}${result.backdrop_path || result.poster_path}`}
        alt={result.title}
      />
      <div className="p-2">
        <p className="truncate max-w-md ">{result.overview}</p>
        <h2 className="text-white font-semibold text-md md:text-lg lg:text-xl group-hover:font-bold transition-all duration-200 ease-in-out">
          {result.title || result.original_name}{" "}
        </h2>
        <p className="flex items-center sm:opacity-0  group-hover:opacity-100 cursor-pointer transition-all duration-200 ease-in-out">
          {result.media_type && `${result.media_type}`}
          {result.release_date || result.first_air_date}
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
};

export default Thumbnail;
