import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import ForgotPassword from './Components/ForgotPassword'
import UpdateProfile from "./Components/UpdateProfile";

import { Container } from "react-bootstrap";
import { AuthProvider } from "./Contexts/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PrivateRoute from "./Components/PrivateRoute";

function App() {

  return (
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: '400px'}} >
          <BrowserRouter>
            <AuthProvider>
              <Routes>
                <Route exact path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="/update-profile" element={<PrivateRoute><UpdateProfile /></PrivateRoute>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/forgot-password" element={<ForgotPassword/>} />
              </Routes>
            </AuthProvider>
          </BrowserRouter>
        </div>
      </Container>
  )
}

export default App;
