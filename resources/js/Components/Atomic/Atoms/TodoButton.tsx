import React, { useState } from 'react';


interface Props {
    processing: boolean;
    className?: string;
    title: string;
    img: string;
}
export const TodoButton: React.FC<Props> = ({ title, img, className = '' }) => {
    const [select, setSelect] = useState(false);
    console.log(select);
    return (
        <div className="h-32" onClick={() => setSelect(!select)}>

            <button
                className={
                    'w-full h-36 text-center border border-gray-700 rounded-md py-2.5 font-medium row-span-1 '
                    + className}
            >
                <img src={img} alt="" className="h-28 items-center" />
                {title}
            </button>
        </div >
    );
}

export default TodoButton;
