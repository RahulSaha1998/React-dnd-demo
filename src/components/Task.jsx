import React from 'react';
import { useDrag } from 'react-dnd';
import toast from 'react-hot-toast';

const Task = ({ task, tasks, setTasks }) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: {id: task?.id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    console.log(isDragging);

    const handleRemove = (id) => {
        console.log(id);
        const fTasks = tasks?.filter(t => t?.id !== id);
        localStorage.setItem('tasks', JSON.stringify(fTasks))
        setTasks(fTasks)
        toast("Task removed", { icon: "💀" })
    }


    return (
        <div
            ref={drag}
            className={`relative p-4 mt-8 shadow-md rounded
            ${isDragging ? "opacity-25" : "opacity-100"}
            cursor-grab`}>
            <h2>{task?.name}</h2>
            <button
                onClick={() => handleRemove(task?.id)}
                className='absolute bottom-1 right-1 text-slate-400'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </button>
        </div>
    );
};

export default Task;