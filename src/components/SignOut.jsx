import React from 'react'
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const SignOut = () => {
  return (
    <button onClick={() => signOut(auth)}>サインアウト</button>
  )
}

export default SignOut
