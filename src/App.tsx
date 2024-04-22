import Input from "./components/form/Input";
import InputPassword from "./components/form/InputPassword";
import {
  Clients,
  Dashborad,
  Facturation,
  Feed,
  Inventaire,
  Login,
  ProtectedRoute,
  Ventes,
} from "./pages";
import SignUp from "./pages/PublicRoutes/SignUp";
import "./styles/globals.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Input type="text" name="Nom" placeholder="Nom" customClasses="w-full" /> */}
      {/* <InputPassword
        name="password"
        customClasses="w-full mt-8"
        placeholder="Password"
      /> */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Feed />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashborad />} />
            <Route path="dashboard" element={<Dashborad />} />
            <Route path="clients" element={<Clients />} />
            <Route path="ventes" element={<Ventes />} />
            <Route path="inventaire" element={<Inventaire />} />
            <Route path="facturation" element={<Facturation />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
