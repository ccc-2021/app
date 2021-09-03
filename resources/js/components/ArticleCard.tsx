import React from 'react';
import {UserAvatar} from "./UserAvatar";
import {StatIcon} from "./StatIcon";

type Props = {
    title: string;
    content: string;
    user: {
        name: string;
        profile_photo_url: string;
    };
};

export const ArticleCard: React.FC<{ item: Props }> = (props) => {
    const {title, content, user} = props.item;
    return (
        <article className="mt-6">
            <div className="mx-auto max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
                <div className="mt-2">
                    <h2 className="text-2xl text-gray-700 font-bold">
                        {title}
                    </h2>
                    <div className="flex items-center">
                        <UserAvatar user={user} />
                        <span className="mx-1 text-gray-600">
                            {user.name}
                        </span>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <StatIcon/>
                                <StatIcon/>
                                <StatIcon/>
                                <StatIcon/>
                                <StatIcon/>
                            </div>
                            <p className="sr-only">
                                4 out of 5 stars
                            </p>
                            <span className="ml-3 text-sm font-medium text-gray-500">
                                133 件のレビュー
                            </span>
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
