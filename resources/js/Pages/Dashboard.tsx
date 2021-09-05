import React from 'react';
// @ts-ignore
import Authenticated from '@/Layouts/Authenticated';
import {ScheduleTimeLine} from "@/components/Atomic/Organisms/ScheduleTimeLine";

export default function Dashboard(props: React.PropsWithChildren<any>) {
    const schedules = props.schedules;

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <ScheduleTimeLine schedules={schedules} />
                </div>
            </div>
        </Authenticated>
    );
}
