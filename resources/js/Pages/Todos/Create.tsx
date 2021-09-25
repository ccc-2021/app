import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import {useForm} from "@inertiajs/inertia-react";
import route from "ziggy-js";
import Input from "@/Components/Atomic/Atoms/Input";
import Button from "@/Components/Atomic/Atoms/Button";
import ValidationErrors from "@/Components/Atomic/Atoms/ValidationErrors";
import Label from "@/Components/Atomic/Atoms/Label";


export default function Create(props: React.PropsWithChildren<any>) {


    const {data, setData, post, processing, errors} = useForm({
        title: "",
        content: "",
    });

    // @ts-ignore
    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        post(route('todos.store'));
    };


    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={''}
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">


                    <ValidationErrors errors={errors}/>
                    <form onSubmit={submit}>
                        <div>
                            <Input
                                type="text"
                                name="title"
                                value={data.title}
                                className="mt-1 block w-full"
                                placeholder="タイトルを追加"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />
                        </div>

                        <div>
                            <Input
                                type="text"
                                name="content"
                                value={data.content}
                                className="mt-1 block w-full"
                                placeholder="説明を追加"
                                handleChange={onHandleChange}
                            />
                        </div>
                        
                        <div className="flex items-center justify-end mt-4">
                            <Button
                                className="ml-4"
                                processing={processing}
                            >
                                タスクを追加
                            </Button>
                        </div>
                    </form>

                </div>
            </div>
        </Authenticated>
    );
}
