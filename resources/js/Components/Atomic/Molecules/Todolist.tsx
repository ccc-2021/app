import React from 'react';
import { UserAvatar } from "@/Components/Atomic/Atoms/UserAvatar";
import { Todo } from "@/types";

export const ArticleCardTodo: React.FC<{ Todolist: Todo }> = (props) => {
    const { title, content, period_day, user, } = props.Todolist;

    return (
        <article className="mt-6">
            <div className="mx-auto max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
                <div className="mt-2">
                    <h2 className="text-2xl text-gray-700 font-bold">
                        Todo:{title}
                    </h2>
                    <div className="flex items-center">
                        <UserAvatar user={user} />
                        <span className="mx-1 text-gray-600">
                            {user.name}
                        </span>
                    </div>
                    <div>
                        <div className="flex items-center">
                            期限日:{period_day}
                        </div>
                    </div>
                    <p className="mt-2 text-gray-800 text-md">
                        {content}
                    </p>
                </div>
            </div>
        </article>
    )
}
