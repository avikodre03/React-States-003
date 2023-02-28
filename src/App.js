
import { useState } from 'react';
import './App.css';
import PasswordGenerator from './Components/PasswordGenerator';

function App() {
  const [password, setpassword] = useState('')
  const [passwordLength, setpasswordLength] = useState(8)
  const [Uppercase, setUppercase] = useState(false)
  const [Lowercase, setLowercase] = useState(false)
  const [Number, setNumber] = useState(false)
  const [Symbols, setSymbols] = useState(false)
  const [copied, setcopied] = useState(false)
  return (
    <div className="App">

      <PasswordGenerator
        password={password} setpassword={setpassword}
        passwordLength={passwordLength} setpasswordLength={setpasswordLength}
        Uppercase={Uppercase} setUppercase={setUppercase}
        Lowercase={Lowercase} setLowercase={setLowercase}
        Number={Number} setNumber={setNumber}
        Symbols={Symbols} setSymbols={setSymbols}
        copied={copied} setcopied={setcopied}
      />

    </div>
  );
}

export default App;
