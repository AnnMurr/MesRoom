import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Body, Main, Room, Chat } from "./components";
import fonts from "./styles/general/fonts.css";
import reset from "./styles/general/reset.css";

function App() {
  return (
    <Router>
      <Body>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/room/:link" element={<Room />} />
          <Route path="/room/:link/:name" element={<Chat />} />
        </Routes>
      </Body>
    </Router>
  );
}

export default App;
