import Image from "next/image";
import HeartIcon from "../assets/heart.svg";
import AttachIcon from "../assets/paper-clip.svg";
import ChatBubble from "../assets/chat-bubble.svg";
import { Draggable } from "react-beautiful-dnd";

interface Props {
  index: number;
  item: {
    id: string;
    priority?: number;
    title?: string;
    assignees: string;
    description?: string;
    chat?: number;
    like?: number;
    attach?: number;
  };
}

const Card: React.FC<Props> = ({ item, index }) => {
  return (
    <Draggable index={index} draggableId={item.id} key={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="bg-slate-200  shadow-lg p-4 md:p-8 rounded-lg">
            <div
              className={`bg-[#ff001a] h-2 md:h-2 w-1/4 md:w-1/5 rounded-lg mb-2`}
            ></div>
            <h1 className="font-bold max-w-full md:max-w-none">{item.title}</h1>
            {item.description && (
              <p className="max-w-full md:max-w-none">{item.description}</p>
            )}

            <div className="flex flex-col md:flex-row justify-between items-center gap-3 mt-5">
              <div className="flex items-center">
                <Image
                  src={item.assignees}
                  width={36}
                  height={36}
                  className="rounded-full shadow-lg"
                  alt="avatar"
                />
              </div>
              <div className="flex gap-2">
                <Image
                  src={ChatBubble}
                  alt="chat-icon"
                  width={18}
                  height={18}
                />
                <span className="text-sm">{item.chat}</span>
                <Image
                  src={HeartIcon}
                  alt="heart-icon"
                  width={18}
                  height={18}
                />
                <span className="text-sm">{item.like}</span>
                <Image
                  src={AttachIcon}
                  alt="clip-icon"
                  width={18}
                  height={18}
                />
                <span className="text-sm">{item.attach}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
