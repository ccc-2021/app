import React from "react";
import cn from "classnames";
import route from "ziggy-js";
import IconHome from "@/Components/Icons/IconHome";
import IconSearch from "@/Components/Icons/IconSearch";
import IconHeart from "@/Components/Icons/IconHeart";
import { InertiaLink } from "@inertiajs/inertia-react";

type Props = {
    name: string
    link: string
}

export const IconLink: React.FC<Props> = ({ name, link, children }) => {
    const active = route().current(link);
    return (
        <InertiaLink
            href={link}
            className='w-full flex flex-col self-center text-center'
        >
            <div className={cn(
                'block w-7 h-7 fill-current text-gray-500 mx-auto',
                { 'text-blue-500': active }
            )}>
                {children}
            </div>
            <span className={cn(
                'text-gray-700 text-base tracking-tighter',
                { 'text-blue-500': active }
            )}>
                {name}
            </span>
        </InertiaLink>
    );
};

export const BottomTabs: React.FC = () => (
    <footer className="sm:hidden bottom-0 shadow-2xl border-t w-screen fixed z-50 bg-white">
        <div className="items-cent flex items-center justify-center justify-items-center max-w-5xl mx-auto my-3">
            <IconLink name="今日の予定" link="todos/create">
                <IconHome />
            </IconLink>

            <IconLink name="発見する" link="#">
                <IconSearch />
            </IconLink>

            <IconLink name="お気に入り" link="#">
                <IconHeart />
            </IconLink>
        </div>
    </footer>
);
