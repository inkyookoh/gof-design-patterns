import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Singleton from "./singleton";
import Adapter from "./adapter";
import Bridge from "./bridge";
import Composite from "./composite";
import Options from "./composite/options";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          gap: 30,
          alignItems: "center",
          justifyContent: "center",
          padding: 30,
        }}
      >
        <Link to="/singleton">Singleton</Link>
        <Link to="/adapter">Adapter</Link>
        <Link to="/bridge">Bridge</Link>
        <Link to="/composite">Composite</Link>
      </div>
      <Routes>
        <Route path="/singleton" element={<Singleton />} />
        <Route path="/adapter" element={<Adapter />} />
        <Route path="/bridge" element={<Bridge />} />
        <Route path="/composite" element={<Composite />} />
        <Route path="/composite/options" element={<Options />} />
      </Routes>
    </div>
  );
}

export default App;
