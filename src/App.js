import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Body, Main, Room, Chat } from "./components";
import "./styles/general/fonts.css";
import "./styles/general/reset.css";

function App() {
  return (
    <>
    <Router>
      <Body>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/room/:link" element={<Room />} />
          <Route path="/:name" element={<Chat />} />
        </Routes>/room/:link
      </Body>
    </Router>
    </>
  );
}

export default App;
