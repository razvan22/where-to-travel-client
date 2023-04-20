import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/Home/HomePage";
import Signup from "./pages/Signup/Signup";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
