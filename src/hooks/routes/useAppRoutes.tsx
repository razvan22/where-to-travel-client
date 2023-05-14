import { Route } from "react-router-dom";
import HomePage from "../../pages/Home/HomePage";
import Signup from "../../pages/Signup/Signup";
import Signin from "../../pages/Signin/Signin";
import { Post } from "../../pages/Post/Post";
import { nanoid } from "nanoid";
import Location from "../../pages/Location/Location";
const useAppRoutes = () => {
  return [
    <Route key={nanoid()} path="/" element={<HomePage />} />,
    <Route key={nanoid()} path="/signup" element={<Signup />} />,
    <Route key={nanoid()} path="/signin" element={<Signin />} />,
    <Route key={nanoid()} path="/post" element={<Post />} />,
    <Route key={nanoid()} path="/:locationId" element={<Location />} />,
    <Route key={nanoid()} path="*" element={<HomePage />} />,
  ];
};

export default useAppRoutes;
