import { ChangeEvent, FC, useState } from 'react'
import { Box, Container, TextField, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { ITask } from '../../interfaces';
import ToDoTask from '../../components/ToDoTask';

import type { AppDispatch, RootState } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo } from './todoSlice'

export const ToDo: FC = () => {
  const todosList = useSelector((state: RootState) => state.todos)
  const dispatch = useDispatch<AppDispatch>()

  const [task, setTask] = useState<string>('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value)
  }

  const addTask = (): void => {
    const newTask = { taskName: task };
    dispatch(addTodo(newTask))
    setTask("")
  }

  const removeTask = (task: string): void => {
    dispatch(removeTodo(task))
  }

  const AddToDoButton = () => (
    <IconButton onClick={addTask}>
      <AddIcon />
    </IconButton >
  )

  return (
    <>
      <Container>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: .1, width: '45ch' },
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
      </Container>
      <div className="todoList">
        {todosList.map((task: ITask, key: number) => {
          return <ToDoTask key={key} task={task} removeTask={removeTask} />
        })}
      </div>
    </>
  )
}