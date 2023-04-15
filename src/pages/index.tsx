import Image from "next/image";
import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// Components
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import Header from "@/components/Header";

//Assets
import PlusIcon from "@/assets/plus-circle.svg";
import ThreeDots from "@/assets/three-dots.svg";

// Others
import data from "@/data/tasks.json";
import createTaskList from "@/utils/createInstance";

export default function Home() {
  const [ready, setReady] = useState<boolean>(false);

  const [boardData, setBoardData] = useState(createTaskList(data));

  useEffect(() => {
    if (typeof window !== "undefined") {
      setReady(true);
    }
  }, []);

  const onDragEnd = (re: any) => {
    if (!re.destination) return;

    const sourceColumnIndex = parseInt(re.source.droppableId);
    const destinationColumnIndex = parseInt(re.destination.droppableId);

    if (isNaN(sourceColumnIndex) || isNaN(destinationColumnIndex)) return;
    if (
      sourceColumnIndex === destinationColumnIndex &&
      re.source.index === re.destination.index
    )
      return;

    const newBoardData = [...boardData];
    const sourceColumn = newBoardData[sourceColumnIndex];
    const destinationColumn = newBoardData[destinationColumnIndex];
    const [draggedItem] = sourceColumn.items.splice(re.source.index, 1);

    if (!draggedItem) return;

    destinationColumn.items.splice(re.destination.index, 0, draggedItem);

    setBoardData(createTaskList(newBoardData));
  };

  return (
    <>
      <Navbar />
      <div className="relative">
        {/* Header */}
        <Header />
        {/* Content */}
        <div className="mt-5 px-4 flex overflow-x-auto w-full">
          {/* Board Column */}
          {ready && (
            <div className="flex flex-nowrap gap-5 whitespace-nowrap">
              <DragDropContext onDragEnd={onDragEnd}>
                {boardData.map((board, index) => {
                  return (
                    <div className="w-[19rem]" key={index}>
                      <Droppable droppableId={index.toString()}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                          >
                            <div className="flex rounded items-center justify-between p-2 bg-slate-300">
                              <h1 className="font-bold text-xl">
                                {board.name}
                              </h1>
                              <Image
                                src={ThreeDots}
                                alt="three-dots"
                                width={40}
                              />
                            </div>
                            <div className="flex flex-col gap-5 mt-4">
                              {board.items.map((item, i) => {
                                return (
                                  <Card index={i} key={item.id} item={item} />
                                );
                              })}
                              {provided.placeholder}
                            </div>
                            <div className="flex justify-center items-center border border-slate-400 rounded-lg my-4 gap-2 p-5">
                              <Image
                                src={PlusIcon}
                                alt="plus-icon"
                                width={40}
                              />
                              Add new Card
                            </div>
                          </div>
                        )}
                      </Droppable>
                    </div>
                  );
                })}
              </DragDropContext>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
