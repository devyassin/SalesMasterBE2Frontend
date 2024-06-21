
import {
  Clients,
  Dashborad,
  Facturation,
  Feed,
  Inventaire,
  Login,
  ProtectedRoute,
  VenteDetails,
  Ventes,
} from "./pages";
import FacturationDetails from "./pages/NestedRoutes/FacturationDetails";
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
            <Route path="dashboard" element={<Dashborad />} />
            <Route path="clients" element={<Clients />} />
            <Route path="ventes">
              <Route path="/ventes" element={<Ventes />} />
              <Route path=":id" element={<VenteDetails />} />
            </Route>
            <Route path="inventaire" element={<Inventaire />} />
            <Route path="facturation">
              <Route path="/facturation" element={<Facturation />} />
              <Route path=":id" element={<FacturationDetails />} />
            </Route>
          </Route>
          <Route index path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
