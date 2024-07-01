import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./features/HomePage";
import Signup from "./features/Signup";
import Login from "./features/Login";
import Layout from "./components/Layout";
import WelcomePage from "./features/WelcomePage";

import Posts from "./features/Posts";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<WelcomePage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="blog" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="Posts" element={<Posts/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
