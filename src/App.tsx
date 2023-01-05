import { FormLogin } from "./components/form/formLogin/formLogin";
import { FormRegister } from "./components/form/formRegister/formRegister";
import { RoutesMain as Routes } from "./routes/Routes";

function App() {
  return (
    <>
      <FormLogin />
      <FormRegister />
    </>
  );
}

export default App;
