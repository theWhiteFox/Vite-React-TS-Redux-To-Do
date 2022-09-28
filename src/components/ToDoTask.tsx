import { ITask } from "../interfaces"
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
    task: ITask;
    removeTask(taskName: string): void
}

const ToDoTask = ({ task, removeTask }: Props) => {
    return (
        <div className="task">
            <div className="content">
                <span>{task.taskName}</span>
                <Button onClick={() => removeTask(task.taskName)} sx={{ ml: 2 }} startIcon={<DeleteIcon />}>Delete</Button>
            </div>
        </div>
    )
}

export default ToDoTask