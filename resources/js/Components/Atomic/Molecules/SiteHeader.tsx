import React from "react";
import {TopNavbar} from "@/Components/Atomic/Atoms/TopNavbar";

export const SiteHeader: React.FC<{ title: React.ReactNode, auth: any}> = ({ title, auth}) => (
    <header>
        <TopNavbar auth={auth} />

        {title && (
            <div className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    {title}
                </div>
            </div>
        )}

    </header>
);
