import React, {useState} from "react";
import {Tab} from "@headlessui/react";
import classNames from "classnames";

export const TodoListTab: React.FC<{ todos: any }> = ({ todos }) => {

    const labels: { "1": string; "2": string } = {
        1: 'TODO',
        2: '消毒済み',
    }

    let [categories]: any = useState(todos);

    return (
        <div className="w-full max-w-2xl sm:px-0 mx-auto">
            <Tab.Group>
                <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl max-2-md">
                    {Object.keys(categories).map((category) => (
                        <Tab
                            key={category}
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
                            {labels[category]}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                    {Object.values(categories).map((todos, idx) => (
                        <Tab.Panel
                            key={idx}
                            className={classNames(
                                'bg-white rounded-xl p-3 select-none',
                                'ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                            )}
                        >
                            <ul>
                                {todos.map((todo: any) => (
                                    <li
                                        key={todo.id}
                                        className="relative p-3 rounded-md hover:bg-coolGray-100"
                                    >

                                        <label className="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
                                            />
                                                <span className="ml-2">{todo.title}</span>
                                        </label>
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
