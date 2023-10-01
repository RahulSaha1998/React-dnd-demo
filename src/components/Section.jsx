import Header from "./Header";
import Task from "./Task";

const Section = ({ status, tasks, setTasks, todos, inProgress, closed }) => {

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

    return (
        <div className="w-64">
            <Header text={text} bg={bg} count={tasksToMap.length} />
            {tasksToMap.length > 0 && tasksToMap.map((task) => <Task
                task={task}
                key={task.id}
                tasks={tasks}
                setTasks={setTasks} />)}
        </div>
    );
};

export default Section;