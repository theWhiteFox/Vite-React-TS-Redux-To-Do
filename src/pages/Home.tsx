import { useState } from 'react';
import {
  Box,
  CssBaseline,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ToDo } from '../features/todo/ToDo';

function Home() {
  const [count, setCount] = useState(0);

  // define theme
  const theme = createTheme({
    typography: {
      fontSize: 14,
    },
    palette: {
      primary: {
        light: "#63b8ff",
        main: "#0989e3",
        dark: "#005db0",
        contrastText: "#000",
      },
      secondary: {
        main: "#4db6ac",
        light: "#82e9de",
        dark: "#00867d",
        contrastText: "#000",
      },
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Paper
        elevation={3}
        sx={{ padding: "1rem", backgroundColor: "secondary.light" }}
      >
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
        </div>
        <Typography color="primary.dark" variant="h2">
          To Do App
        </Typography>
        <Typography color="secondary.dark" variant="h4">
          React Redux TS
        </Typography>
        <div className="card">
          <ToDo />
        </div>
      </Paper>

    </ThemeProvider >
  )
}
export default Home;
