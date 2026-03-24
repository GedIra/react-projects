import * as Checks from './components/checks'
import { useState, useMemo } from 'react';
import Requirements from './components/Requirements';
import Inputs from './components/Input';

function App() {
  const [password, setPassword] = useState("");

  const validOptions = useMemo(() => {
    return [
      Checks.length(password),
      Checks.upperCase(password),
      Checks.lowerCase(password),
      Checks.digits(password),
      Checks.special(password),
    ];
  }, [password]);

  function handleChange(e) {
    setPassword(e.target.value);
  }

  const [showPassword, setshowPassword] = useState(true)

  const toggleShowPassword = (e) => {
    setshowPassword(prev => !prev)
  }

  return (
    <div className="flex flex-col gap-2 mx-auto w-fit content-center p-16 border rounded-2xl mt-32">
      <h1 className="font-bold text-2xl">Create password</h1>

      <Inputs
        password={password}
        setPassword={setPassword}
        handleChange={handleChange}
        toggleShowPassword={toggleShowPassword}
        showPassword={showPassword}
      />

      <Requirements options={validOptions} password={password}/>
    </div>
  );
}

export default App;
