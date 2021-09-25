import React, { useState } from 'react';
import { useForm } from "@inertiajs/inertia-react";
import route from "ziggy-js";
import Input from "@/Components/Atomic/Atoms/Input";
import Button from "@/Components/Atomic/Atoms/Button";


export default function Create(props: React.PropsWithChildren<any>) {


    const { data, setData, post, processing, errors } = useForm({
        title: "",
        content: "",
        period_day: "",
        is_repetition: "",
    });

    // @ts-ignore
    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        post(route('todos.store'));
    };
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);


    return (
        // <Authenticated
        //     auth={props.auth}
        //     errors={props.errors}
        //     header={''}
        // >
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">


                {/* <ValidationErrors errors={errors} /> */}
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

                    <div className="mt-6 border border-gray-300 bg-white focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm">
                        <div className="flex justify-between pt-2 pb-2">
                            <p>日付</p>
                            <p onClick={() => setShow(currentShow => !currentShow)}>選択してください</p>
                        </div>
                        {show ? <Input
                            type="date"
                            name="period_day"
                            value={data.period_day}
                            className="mt-1 block w-full rounded-none"
                            placeholder=""
                            handleChange={onHandleChange}
                        /> : null}
                    </div>

                    {/* <div className="mt-6 border border-gray-300 bg-white focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm">
                        <div className="flex justify-between pt-2 pb-2">
                            <p>繰り返し</p>
                            <p onClick={() => setShow(currentShow => !currentShow)}>選択してください</p>
                        </div>
                        {show ? <Input
                            type="text"
                            name="is_repetition"
                            value={data.is_repetition}
                            className="mt-1 block w-full rounded-none"
                            placeholder="    0 : 繰り返さない      1 : 繰り返す"
                            handleChange={onHandleChange}
                        /> : null}
                    </div> */}

                    <div className="flex items-center justify-end mt-4">
                        <Button
                            className="mt-32 mb-10 w-full text-2xl  text-center"
                            processing={processing}
                        >
                            タスクを追加
                            </Button>
                    </div>
                </form>

            </div>
        </div >
        // </Authenticated >
    );
}
