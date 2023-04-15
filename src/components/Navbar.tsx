import Image from "next/image";

// Assets
import TrelloLogo from "../assets/Trello Logo.png";
import BoardIcon from "../assets/board.svg";
import PlusCircleIcon from "../assets/plus-circle.svg";
import ChatBubbleIcon from "../assets/chat-bubble.svg";
import NotifBell from "../assets/notif.svg";
import PersonIcon from "../assets/person.svg";

interface Props {}

const Navbar: React.FC<Props> = () => {
  return (
    <div className="flex justify-between items-center border border-b-[#cacccc] py-2">
      <div className="flex items-center p-2 gap-4">
        <Image
          src={TrelloLogo}
          alt="trello-logo"
          width={140}
          className="hidden md:flex"
        />
        <div className="flex gap-2">
          <Image src={BoardIcon} alt="board-icon" />
          <p className="font-bold hidden md:flex">Board</p>
        </div>
        <div className="flex justify-end gap-2 ml-5 items-center ">
          <input
            type="text"
            className="hidden md:flex w-[20rem] text-white rounded-xl bg-[#cacccc] p-1 focus"
          />
          <svg
            className="absolute h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="gap-2 justify-center flex items-center mx-5">
        <Image src={PlusCircleIcon} alt="plus-circle-icon" />
        <Image src={ChatBubbleIcon} alt="chat-bubble-icon" />
        <Image src={NotifBell} alt="notif-icon" />
        <Image
          src={PersonIcon}
          alt="person-icon"
          className="rounded-full border border-black ml-2"
          width={40}
        />
      </div>
    </div>
  );
};

export default Navbar;
