
import './App.css'
import {Button} from "@chakra-ui/react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ChatPage from "./Pages/ChatPage.jsx";
function App() {
  return (
        <div className="App">
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/chats" element={<ChatPage/>} />
        </Routes>
    </div>
  )
}

export default App
