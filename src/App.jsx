import { Routes, Route } from "react-router-dom";

import Intro from "./locations/Intro";
import Town from "./locations/Town";
import Shop from "./locations/Shop";
import Forest from "./locations/Forest";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/town" element={<Town />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/forest" element={<Forest />} />
      </Routes>
    </>
  );
}

export default App;
