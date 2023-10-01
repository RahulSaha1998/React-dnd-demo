import { useDrop } from "react-dnd";
import Header from "./Header";
import Task from "./Task";
import toast from "react-hot-toast";

const Section = ({ status, tasks, setTasks, todos, inProgress, closed }) => {

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => addItemToSection(item?.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    let text = "Todo";
    let bg = "bg-slate-500"
    let tasksToMap = todos

    if (status === "inprogress") {
        text = "In Progress"
        bg = "bg-purple-500"
        tasksToMap = inProgress
    }

    if (status === "closed") {
        text = "Closed"
        bg = "bg-green-500"
        tasksToMap = closed
    }


    const addItemToSection = (id) => {
        setTasks(prev => {
            console.log("prev", prev);
            const mTasks = prev?.map(t => {
                if (t?.id === id) {
                    return { ...t, status: status }
                }
                return t;
            });

            localStorage.setItem('tasks', JSON.stringify(mTasks));
            toast('Task status changed!', {icon:'😮'})
            return mTasks;
        })
    }

    return (
        <div
            ref={drop}
            className={`w-64 rounded-md p-2 ${isOver ? 'bg-slate-200' : ""}`}
        >
            <Header text={text} bg={bg} count={tasksToMap?.length} />
            {tasksToMap?.length > 0 && tasksToMap?.map((task) => <Task
                task={task}
                key={task?.id}
                tasks={tasks}
                setTasks={setTasks} />)}
        </div>
    );
};

export default Section;