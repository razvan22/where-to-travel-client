import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/Home/HomePage";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";
import { Paper } from "@mui/material";
import { Post } from "./pages/Post/Post";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const App: React.FC = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Paper
        style={{
          padding: 0,
          margin: 0,
          maxHeight: "90vh",
        }}
        className="App"
        elevation={0}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/post" element={<Post />} />
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </Paper>
      <ReactQueryDevtools position="bottom-right" />
    </QueryClientProvider>
  );
};

export default App;
