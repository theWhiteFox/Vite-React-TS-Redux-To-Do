import { ITask } from "../interfaces"

interface Props {
    task: ITask
}

const ToDoTask = ({ task }: Props) => {
    return (
        <div>{task.taskName}</div>
    )
}

export default ToDoTask