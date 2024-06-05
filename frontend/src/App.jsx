
import './App.css'
import {Button} from "@chakra-ui/react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./Pages/Homepage";
function App() {
  return (
    <div>
      <Routes>
      <Route path="/" component={<Homepage/>} />
    </Routes>
    </div>
  )
}

export default App
