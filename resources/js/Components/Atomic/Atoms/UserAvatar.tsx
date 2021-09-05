import React from "react";


type Props = {
    name: string;
    profile_photo_url: string;
};

export const UserAvatar: React.FC<{ user: Props }> = (props) => {
    return (
        <img
            src={props.user.profile_photo_url}
            alt={props.user.name}
            className="inline-block h-9 w-9 rounded-full select-none"
        />
    )
}
