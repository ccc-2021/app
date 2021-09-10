import React from "react";

type Props = {
    name: string;
    profile_photo_url: string;
};

export const UserAvatar: React.FC<{ user: Props }> = ({user}) => {
    const {name, profile_photo_url} = user;

    return (
        <img
            src={profile_photo_url}
            alt={name}
            className="inline-block h-9 w-9 rounded-full select-none"
        />
    )
};
