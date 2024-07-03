import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./features/Signup";
import Login from "./features/Login";
import Layout from "./components/Layout";
import WelcomePage from "./features/WelcomePage";

import AllBlogs from "./features/AllBlogs";

import ProtectedRoute from "./protection/ProtectedRoute";
import PublicRoute from "./protection/PublicRoute";
import Profile from "./features/Profile";
import CreateBlog from "./features/CreateBlog";
import ShowBlog from "./features/ShowBlog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route index element={<WelcomePage />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="blogs">
              <Route index element={<AllBlogs />} />
              <Route path="createblog" element={<CreateBlog />} />
              <Route path="blog" element={<ShowBlog />} />
            </Route>
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
