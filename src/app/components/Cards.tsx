'use client'

import { useEffect, useState } from "react";
import Card from "./Card";
import { DragDropContext, Draggable, Droppable, DropResult } from '@hello-pangea/dnd';

type CardType = {
    id: string;
    title: string;
    description: string;
}

type ColumnKey = 'toDo' | 'onProgress' | 'completed';

type Columns = Record<ColumnKey, CardType[]>;

export default function Cards(){

    const [columns, setColumns] = useStickyState({
        toDo: [
            {id: "t1", title: "Brainstorming", description: "Brainstorming brings team members' diverse experience into play."},
            {id: "t2", title: "Research", description: "User research helps you to create an optimal product for users."},
            {id: "t3", title: "Wireframes", description: "Low fidelity wireframes include the most basic content and visuals."}
        ],
        onProgress: [
            {id: "p1", title: "Onboarding Illustrations ", description: "/cardImage1.png"},
            {id: "p2", title: "Onboarding Illustrations ", description: "/cardImage1.png"}
        ],
        completed: [
            {id: "c1", title: "Mobile App Design", description: "/cardImage4.png"},
            {id: "c2", title: "Design System", description: "It just needs to adapt the UI from what you did before."}
        ]
    }, "cards")

    function useStickyState(defaultValue: Columns, name: string): [Columns, React.Dispatch<React.SetStateAction<Columns>>, boolean] {
        const [value, setValue] = useState<Columns>(defaultValue);
        const [ready, setReady] = useState(false);

        useEffect(() => {
            try {
                const persisted = typeof window !== "undefined" ? window.localStorage.getItem(name) : null;
                if (persisted) setValue(JSON.parse(persisted) as Columns);
            } finally {
                setReady(true);
            }
        }, [name]);

        useEffect(() => {
            if (!ready) return;
            window.localStorage.setItem(name, JSON.stringify(value));
        }, [name, value, ready]);

        return [value, setValue, ready];
    }


    function onDragEnd(result: DropResult) {
        const { source, destination } = result
        if (!destination) return

        const from = source.droppableId as ColumnKey
        const to = destination.droppableId as ColumnKey

        setColumns((prev) => {
            const next: Columns = { ...prev }
            const fromList = Array.from(next[from])
            const toList = from === to ? fromList : Array.from(next[to])

            const [moved] = fromList.splice(source.index, 1)
            toList.splice(destination.index, 0, moved)

            next[from] = fromList
            next[to] = toList
            return next
        })
    }
    

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-[15px] max-lg:m-10 max-sm:m-0">
                <Droppable droppableId="toDo">
                    {(provided) => (
                        <div className="col-span-1 bg-[#F5F5F5] rounded-md p-[20px]">
                            <div className="flex items-center justify-between mb-[23px]">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" className="mr-[8px]">
                                        <circle cx="4" cy="4" r="4" fill="#5030E5"/>
                                    </svg>
                                    <p className="font-semibold mr-[12px]">To Do</p>
                                    <p className="text-sm bg-[#DBDBDB] text-[#625F6D] rounded-full w-4 h-4 flex justify-center items-center">{columns.toDo.length}</p>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path opacity="0.2" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="#5030E5"/>
                                        <path d="M16 11.25H12.75V8C12.75 7.59 12.41 7.25 12 7.25C11.59 7.25 11.25 7.59 11.25 8V11.25H8C7.59 11.25 7.25 11.59 7.25 12C7.25 12.41 7.59 12.75 8 12.75H11.25V16C11.25 16.41 11.59 16.75 12 16.75C12.41 16.75 12.75 16.41 12.75 16V12.75H16C16.41 12.75 16.75 12.41 16.75 12C16.75 11.59 16.41 11.25 16 11.25Z" fill="#5030E5"/>
                                    </svg>
                                </div>
                            </div>
                            <hr className="text-[#5030E5] border-[1px] mb-[28px]"/>
                                <div className="flex flex-col gap-[20px]" ref={provided.innerRef} {...provided.droppableProps}>
                                    {columns.toDo.map((card, index) => (
                                        <Draggable draggableId={card.id} key={card.id} index={index}>
                                            {(provided) => (
                                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                    <Card id={card.id} title={card.title} description={card.description}/>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                        </div>
                    )}
                </Droppable>
                <Droppable droppableId="onProgress">
                    {(provided) => (
                        <div className="col-span-1 bg-[#F5F5F5] rounded-md p-[20px]">
                            <div className="flex items-center justify-between mb-[23px]">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" className="mr-[8px]">
                                        <circle cx="4" cy="4" r="4" fill="#FFA500"/>
                                    </svg>
                                    <p className="font-semibold mr-[12px]">On Progress</p>
                                    <p className="text-sm bg-[#DBDBDB] text-[#625F6D] rounded-full w-4 h-4 flex justify-center items-center">{columns.onProgress.length}</p>
                                </div>
                            </div>
                            <hr className="text-[#FFA500] border-[1px] mb-[28px]"/>
                                <div className="flex flex-col gap-[20px]" ref={provided.innerRef} {...provided.droppableProps}>
                                    {columns.onProgress.map((card, index) => (
                                        <Draggable draggableId={card.id} key={card.id} index={index}>
                                            {(provided) => (
                                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                    <Card id={card.id} title={card.title} description={card.description}/>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                        </div>
                    )}
                </Droppable>
                <Droppable droppableId="completed">
                    {(provided) => (
                        <div className="col-span-1 bg-[#F5F5F5] rounded-md p-[20px]">
                            <div className="flex items-center justify-between mb-[23px]">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" className="mr-[8px]">
                                        <circle cx="4" cy="4" r="4" fill="#76A5EA"/>
                                    </svg>
                                    <p className="font-semibold mr-[12px]">Done</p>
                                    <p className="text-sm bg-[#DBDBDB] text-[#625F6D] rounded-full w-4 h-4 flex justify-center items-center">{columns.completed.length}</p>
                                </div>
                            </div>
                            <hr className="text-[#8BC48A] border-[1px] mb-[28px]"/>
                                <div className="flex flex-col gap-[20px]" ref={provided.innerRef} {...provided.droppableProps}>
                                    {columns.completed.map((card, index) => (
                                        <Draggable draggableId={card.id} key={card.id} index={index}>
                                            {(provided) => (
                                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                    <Card id={card.id} title={card.title} description={card.description}/>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                        </div>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
    )
}