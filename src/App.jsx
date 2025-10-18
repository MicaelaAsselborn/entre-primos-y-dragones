import { Routes, Route } from "react-router-dom";

import Intro from "./Intro";
import Town from "./locations/Town";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/town" element={<Town />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;
