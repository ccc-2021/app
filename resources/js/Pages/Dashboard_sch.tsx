import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { ScheduleTimeLine } from "@/Components/Atomic/Organisms/ScheduleTimeLine";

export default function Dashboard_sch(props: React.PropsWithChildren<any>) {
    const schedules = props.schedules;

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="text-xl text-gray-800 leading-tight">今日の予定</h2>}
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <ScheduleTimeLine schedules={schedules} />
                </div>
            </div>
        </Authenticated>
    );
}
