import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import AdminRegistration from "./Pages/admin-registration/AdminRegistration";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<AdminRegistration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
