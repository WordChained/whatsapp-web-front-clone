import { useState } from "react";
import styles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LeftHeader } from "./components/shared/headers/LeftHeader";
import { NotFount404 } from "./views/404/NotFount404";
import { Homepage } from "./views/home/Homepage";
import { Chatroom } from "./components/chatroom/Chatroom";
import { UsersContextProvider } from "./store/contexts/UsersContext";
function App() {
  return (
    <UsersContextProvider>
      <div className={styles.App}>
        <Homepage />
        {/* <BrowserRouter>
          <Routes>
            <Route path="/chatroom/:id" element={<Chatroom />} />
            <Route path="*" element={<NotFount404 />} />
          </Routes>
        </BrowserRouter> */}
      </div>
    </UsersContextProvider>
  );
}

export default App;
