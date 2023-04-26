import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/Home/HomePage";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";
import { Paper } from "@mui/material";
import { Post } from "./pages/Post/Post";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const App: React.FC = () => {
  const queryClient = new QueryClient();
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
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/post" element={<Post />} />
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </QueryClientProvider>
    </Paper>
  );
};

export default App;
