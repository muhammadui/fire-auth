import "./App.css";
import LogIn from "./components/auth/login/LogIn";
import SignUp from "./components/auth/signup/SignUp";

function App() {
  return (
    <div className="App">
      <LogIn />
      <SignUp />
    </div>
  );
}

export default App;
