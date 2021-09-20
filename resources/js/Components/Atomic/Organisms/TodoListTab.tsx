import React, {useState} from "react";
import {Tab} from "@headlessui/react";
import classNames from "classnames";

type Todo = {
    id: number;
    user_id: number;
    title: string;
    content?: string;
    created_at: string;
    status: string;
    is_repetition: boolean;
}

export const TodoListTab: React.FC<{ todos: Todo[] }> = ({todos}) => {

    const labels = ['TODO', '消毒済み',];

    let [categories]: any = useState(todos);

    return (
        <div className="w-full max-w-2xl sm:px-0 mx-auto">
            <Tab.Group>
                <Tab.List
                    className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl max-2-md"
                >
                    {labels.map((label, key) => (
                        <Tab
                            key={key}
                            className={({selected}) =>
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
                    {Object.values(categories).map((category, categoryKey) => (
                        <Tab.Panel
                            key={categoryKey}
                            className={classNames(
                                'bg-white sm:rounded-xl p-3 select-none',
                                'ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                            )}
                        >
                            <ul>
                                {Object.entries(category).map((date, dateKey) => (
                                    <li key={`date-${dateKey}`}>
                                        <span className="text-3xl font-bold ml-5">
                                            {date[0]}
                                        </span>
                                        <ul className="ml-10">
                                            {Object.values(date[1]).map((todo, todoKey) => (
                                                <li key={`todo-${todoKey}`}>{todo.title}</li>
                                            ))}
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
