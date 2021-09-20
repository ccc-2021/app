import React from 'react';
import { UserAvatar } from "@/Components/Atomic/Atoms/UserAvatar";
import { Todo, Schedule } from "@/types";

export const ArticleCardTodo: React.FC<{ Todolist: Todo, }> = (props) => {
    const { title, content, period_day, } = props.Todolist;
    return (
        <article className="mt-6">
            <div className="mx-auto max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
                <div>
                    <div className="flex items-center">
                        期限日:{period_day}
                    </div>
                </div>
                <div className="mt-2">
                    <h2 className="text-2xl text-gray-700 font-bold">
                        Todo:{title}
                    </h2>

                </div>
            </div>
        </article>
    )
}
