import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Posts from "./components/Posts";
import ThemeProvider from "./context/ThemeContext";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <ThemeProvider>
      <ToastContainer />
      <GlobalStyle />
      <Header />
      <main>
        <Posts />
      </main>
    </ThemeProvider>
  );
}

export default App;
