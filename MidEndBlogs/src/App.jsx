import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./features/HomePage";
import Signup from "./features/Signup";
import Login from "./features/Login";
import WelcomePage from "./features/WelcomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<WelcomePage />} />
        <Route path="home" element={<HomePage />}/>
        <Route path="signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
