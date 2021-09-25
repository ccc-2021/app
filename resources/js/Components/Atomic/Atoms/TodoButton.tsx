import React, {useState} from 'react';


interface Props {
    todo: {
        title: string;
        monster_image: string;
        monster_name: string;
    }
    className?: string;
}

export const TodoButton: React.FC<Props> = ({todo, className = ''}) => {

    const {monster_image, monster_name, title} = todo;

    const [select, setSelect] = useState(false);
    return (
        <div className="border border-gray-700 rounded-md" onClick={() => setSelect(!select)}>
            <button
                className={
                    'w-full text-center py-2 font-medium row-span-1 flex flex-col items-center'
                    + className}
            >
                <img
                    src={monster_image}
                    alt={monster_name}
                    className="h-28 my-1"
                />
                {title}
            </button>
        </div>
    );
}

export default TodoButton;
