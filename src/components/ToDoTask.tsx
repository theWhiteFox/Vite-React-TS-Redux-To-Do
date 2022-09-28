import { ITask } from "../interfaces"
import { Button } from '@mui/material';

interface Props {
    task: ITask
}

const ToDoTask = ({ task }: Props) => {
    return (
        <div className="task">
            <div className="content">
                {task.taskName}
            </div>
            <Button />
        </div>
    )
}

export default ToDoTask