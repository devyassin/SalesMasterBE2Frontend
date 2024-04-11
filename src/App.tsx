import Input from "./components/form/Input";
import InputPassword from "./components/form/InputPassword";
import { Login } from "./pages";
import SignUp from "./pages/SignUp";
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
          <Route index path="/s'authentifier"  element={<Login />} />
          <Route path="/s’inscrire" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
