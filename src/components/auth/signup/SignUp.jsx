import React from "react";
import { useState } from "react";
// importing auth from firebae
// import { auth } from "../../../firebase";
import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SignUp = (e) => {
    // code crazy login logic here
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredentials) => {
        console.log(userCredentials);
      }
    );
    // alert(email + " " + password);
  };
  return (
    <div className="login__container">
      <form onSubmit={SignUp}>
        <h1>Create an account Bro</h1>
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
        <button type="submit">Create an account</button>
      </form>
    </div>
  );
};

export default SignUp;
