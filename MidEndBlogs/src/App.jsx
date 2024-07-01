import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./features/HomePage";
import Signup from "./features/Signup";
import Login from "./features/Login";
import Layout from "./components/Layout";
import WelcomePage from "./features/WelcomePage";
import CreateBlog from "./features/CreateBlog";
import ProtectedRoute from "./protection/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<WelcomePage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="home" element={<HomePage />} />
            <Route path="createblog" element={<CreateBlog />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
