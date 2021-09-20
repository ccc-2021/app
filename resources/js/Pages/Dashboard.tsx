import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { ScheduleTimeLine } from "@/Components/Atomic/Organisms/ScheduleTimeLine";
import { TodolistLine } from '@/Components/Atomic/Organisms/TodolistLine';

export default function Dashboard(props: React.PropsWithChildren<any>) {
    const todos = props.Todos;
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="text-xl text-gray-800 leading-tight">TODO</h2>}
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <TodolistLine Todos={todos} />
                </div>

            </div>
        </Authenticated>
    );
}
