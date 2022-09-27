import { ChangeEvent, FC, useState } from 'react'
import type { RootState } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo } from './todoSlice'
import { Box, Typography, Container, Button, TextField, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { ITask } from '../../interfaces';
import ToDoTask from '../../components/ToDoTask';

export const ToDo: FC = () => {
  // const todos = useSelector((state: RootState) => state.todos)
  // const dispatch = useDispatch()

  const [task, setTask] = useState<string>('')
  const [todoList, setTodoList] = useState<ITask[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value)
  }

  const addTask = (): void => {
    const newTask = { taskName: task };
    setTodoList([...todoList, newTask])
    setTask("")
  }

  const AddToDoButton = () => (
    <IconButton onClick={addTask}>
      <AddIcon />
    </IconButton >
  )

  return (
    <Container>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '45ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="To Do"
          variant="outlined"
          value={task}
          onChange={handleChange}
          InputProps={{ endAdornment: <AddToDoButton /> }}
        />
      </Box>
      {todoList.map((task: ITask, key: number) => {
        return <ToDoTask key={key} task={task} />
      })}
    </Container>
  )
}