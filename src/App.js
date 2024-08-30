import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DetailedElements from "./components/DetailedElements";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/sidebar/:id" element={<DetailedElements />} />
    </Routes>
  </BrowserRouter>
);

export default App;
