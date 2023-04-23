import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/Home/HomePage";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";
import { Paper } from "@mui/material";
import { Post } from "./pages/Post/Post";

const App: React.FC = () => {
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        maxHeight: "100vh",
      }}
      className="App"
      elevation={0}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/post" element={<Post />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </Paper>
  );
};

export default App;
