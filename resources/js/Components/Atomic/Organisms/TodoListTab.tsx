import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import classNames from "classnames";
import TodoButton from "@/Components/Atomic/Atoms/TodoButton";

// TODO: Fix type of Todo
type Todo = {
    id: number;
    user_id: number;
    title: string;
    content?: string;
    created_at: string;
    status: string;
    is_repetition: boolean;
}

export const TodoListTab: React.FC<{ todos: Todo[] }> = ({ todos }) => {

    const labels = ['TODO', '消毒済み',];

    console.log(todos);

    return (
        <div className="w-full max-w-2xl sm:px-0 mx-auto">
            <Tab.Group>
                <Tab.List
                    className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl max-2-md"
                >
                    {labels.map((label, key) => (
                        <Tab
                            key={key}
                            className={({ selected }) =>
                                classNames(
                                    'w-full py-2.5 text-sm leading-5 font-medium rounded-lg select-none',
                                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                                    selected
                                        ? 'bg-blue-500 text-white shadow'
                                        : 'text-blue-700'
                                )
                            }
                        >
                            {label}
                        </Tab>
                    ))}
                </Tab.List>

                <Tab.Panels className="mt-2">
                    {Object.values(todos).map((category, categoryKey) => (
                        <Tab.Panel
                            key={categoryKey}
                            className={classNames(
                                'bg-white sm:rounded-xl p-3 select-none',
                                'ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                            )}
                        >
                            <ul >
                                {Object.entries(category).map((date, dateKey) => (
                                    <li key={`date-${dateKey}`} className="text-2xl">
                                        {date[0]}
                                        <ul className="ml-4 mr-4 mb-6 grid  gap-8 grid-cols-2 text-base"
                                        >
                                            {Object.values(date[1].map((sample) => (
                                                <TodoButton title={sample.title} className={""} />
                                            )))}
                                            {/* 
                                            {Object.values(date[1]).map((todo, todoKey) => (
                                                <li key={`todo-${todoKey}`}}
                                                    className=" w-full h-40 text-center border border-gray-700 rounded-md py-2.5 font-medium row-span-1 ">{todo.title}</li>
                                            ))} */}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>

        </div>
    )
}
