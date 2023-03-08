import React from "react";
import { useState } from "react";
// import auth from firebae
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    // code crazy login logic here
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password).then(
      (userCredentials) => {
        console.log(userCredentials);
      }
    );
  };
  return (
    <div className="login__container">
      <form action="" method="post" onSubmit={signIn}>
        <h1>Login Bro</h1>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LogIn;
