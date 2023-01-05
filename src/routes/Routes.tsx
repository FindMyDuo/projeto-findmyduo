import { Providers } from "../contexts/Providers";
import { Route, Routes } from "react-router-dom";

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
