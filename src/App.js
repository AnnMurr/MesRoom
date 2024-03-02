import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Body } from "./components/common/body/body";
import { LinkGenerator } from "./components/pages/linkGenerator/linkGenerator";
import { Main } from "./components/pages/main/main";
import { Room } from "./components/pages/room/room";
import { Chat } from "./components/pages/chat/chat";

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
