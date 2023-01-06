import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";
import { DashboardPage } from "../pages/dashboard";
import { Providers } from "../contexts/Providers";

export const RoutesMain = () => {
  return (
    <Providers>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/dashboard" element={<DashboardPage />}></Route>
        <Route path="*" element={<LoginPage />}></Route>
      </Routes>
    </Providers>
  
  );
};
