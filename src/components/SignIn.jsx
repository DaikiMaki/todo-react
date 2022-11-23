import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../firebase'

const SignIn = () => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
  }
  return (
    <button onClick={signInWithGoogle}>Googleでログイン</button>
  )
}

export default SignIn
