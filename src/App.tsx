import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import useTheme from "./hooks/useTheme";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  const { currentTheme, toggleTheme } = useTheme();

  return (
    <ThemeProvider theme={currentTheme}>
      <ToastContainer />
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <main></main>
    </ThemeProvider>
  );
}

export default App;
