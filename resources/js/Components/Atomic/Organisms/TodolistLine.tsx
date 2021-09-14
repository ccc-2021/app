import React from "react";
import { ArticleCardTodo } from "@/Components/Atomic/Molecules/Todolist";
import { Todo, Schedule } from "@/types";


export const TodolistLine: React.FC<{ Todos: Todo[], per_page?: number }> = (props) => {
    const Todos = props.Todos;

    return (
        <>
            {Todos.map((Todo, i) => (
                <ArticleCardTodo key={i} Todolist={Todo} />
            ))}
        </>
    )
};