import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Posts from "./components/Posts";
import ThemeProvider from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <ToastContainer />
      <Header />
      <main>
        <Posts />
      </main>
    </ThemeProvider>
  );
}

export default App;
