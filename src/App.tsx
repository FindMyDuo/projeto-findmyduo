import { UserCard } from './components/card/userCard/UserCard';
import { UserMessageCard } from './components/card/userMessageCard/UserMessageCard';
import { UserPostCard } from './components/card/userPostCard/UserPostCard';
import { FormLogin } from './components/form/formLogin/formLogin';
import { FormRegister } from './components/form/formRegister/formRegister';

function App() {
  return (
    <div>
      <FormRegister />
      <FormLogin />
    </div>
  );
}

export default App;
