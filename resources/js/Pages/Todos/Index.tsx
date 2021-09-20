import React, {useState} from 'react';
import Authenticated from '@/Layouts/Authenticated';
import {TodoListTab} from "@/Components/Atomic/Organisms/TodoListTab";

export default function Index(props: React.PropsWithChildren<any>) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={''}
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <TodoListTab todos={props.todos} />
                </div>
            </div>
        </Authenticated>
    );
}
