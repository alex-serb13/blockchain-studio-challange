import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "./pages/Home";
import { Images } from "./pages/Images";
import { Sheets } from "./pages/Sheets";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="images" element={<Images />} />
        <Route path="sheets" element={<Sheets />} />
        <Route path="*" element={<Navigate to="home" replace />} />
      </Routes>
    </div>
  );
}

export default App;
