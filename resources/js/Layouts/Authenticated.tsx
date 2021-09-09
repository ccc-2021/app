import React  from 'react';
import {SiteHeader} from "@/Components/Atomic/Molecules/SiteHeader";
import {BottomTabs} from "@/Components/Atomic/Molecules/BottomTabs";

interface Props {
    auth: any;
    header: React.ReactNode;
    children: React.ReactNode;
    errors?: any;
}

export default function Authenticated({ auth, header, children }: Props) {

    return (
        <div className="min-h-screen bg-gray-100">
            <SiteHeader title={header} auth={auth} />
            <main>{children}</main>
            <BottomTabs />
        </div>
    );
}
