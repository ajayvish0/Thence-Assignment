import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Redirecting from "./pages/Redirecting";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/redirecting" element={<Redirecting />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
