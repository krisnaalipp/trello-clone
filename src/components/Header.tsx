import Image from "next/image";

import HeartIcon from "../assets/heart.svg";
import EarthIcon from "../assets/earth.svg";
import InboxIcon from "../assets/notif.svg";

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <div className="flex lg:flex-row flex-col p-5 items-center">
      <div className="flex mr-auto items-center">
        <h1 className="text-2xl font-bold">Brackets</h1>
      </div>
      <div className="flex justify-between mt-2 w-full items-center">
        <div className="flex gap-2 lg:w-1/5 lg:ml-2">
          <Image src={HeartIcon} alt="heart-icon" />
          <div className="flex gap-2">
            <div className="border border-l-black-400"></div>
            <Image src={EarthIcon} alt="earth-icon" />
            <p>Public</p>
            <div className="border border-l-black-400"></div>
          </div>
          <Image src={InboxIcon} alt="inbox-icon" />
        </div>
        <div className="flex items-center gap-2 lg:gap-5 ml-2">
          <div className="flex -space-x-8 md:-space-x-4">
            <Image
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
              width={25}
              height={25}
            />
            <Image
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
              width={25}
              height={25}
            />
            <Image
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt=""
              width={25}
              height={25}
            />
            <a
              className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
              href="#"
            >
              +99
            </a>
          </div>
          <p className="font-bold text-xl">Menu</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
