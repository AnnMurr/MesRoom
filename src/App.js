import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Body, Main, LinkGenerator, Room, Chat } from "./components";


function App() {
  return (
    <Router>
      <Body>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/generator" element={<LinkGenerator />} />
          <Route path="/room/:link" element={<Room />} />
          <Route path="/room/:link/:name" element={<Chat />} />
        </Routes>
      </Body>
    </Router>
  );
}

export default App;
