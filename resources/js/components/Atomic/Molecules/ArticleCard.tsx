import React from 'react';
import {UserAvatar} from "@/components/Atomic/Atoms/UserAvatar";
import {RateStars} from "@/components/Atomic/Atoms/RateStars";
import {Schedule} from "@/types";

export const ArticleCard: React.FC<{ schedule: Schedule }> = (props) => {
    const {title, content, rate_avg, user, reviews,} = props.schedule;

    return (
        <article className="mt-6">
            <div className="mx-auto max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
                <div className="mt-2">
                    <h2 className="text-2xl text-gray-700 font-bold">
                        {title}
                    </h2>
                    <div className="flex items-center">
                        <UserAvatar user={user}/>
                        <span className="mx-1 text-gray-600">
                            {user.name}
                        </span>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <RateStars rate={rate_avg}/>
                            </div>
                            <p className="sr-only">
                                {rate_avg} out of 5 stars
                            </p>
                            <span className="ml-3 text-sm font-medium text-gray-500">
                                {reviews.length} 件のレビュー
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
