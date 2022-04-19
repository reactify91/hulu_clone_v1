import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  BadgeCheckIcon,
  LightningBoltIcon,
  CollectionIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
const Header = () => {
  return (
    <header className="flex  flex-col sm:flex-row justify-between mx-auto items-center min-h-24">
      <div className="flex items-center flex-grow justify-evenly max-w-2xl order-2 ">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain flex-grow shrink-0 cursor-pointer order-1 "
        src="/hulu.png"
        width={200}
        height={100}
        alt="hulu"
      />
    </header>
  );
};

export default Header;
