import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "../../../firebase";
// import { signInWithEmailAndPassword } from "firebase/auth";
const AuthDetails = () => {
  const [AuthUser, setAuthUser] = useState("");
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
  }, []);
  return <div>AuthDetails</div>;
};

export default AuthDetails;
