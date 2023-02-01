import React from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { authService } from "fBase";
import AuthForm from "../components/AuthForm";

const Auth = () => {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new GoogleAuthProvider();
    } else if (name === "gh") {
      provider = new GithubAuthProvider();
    }
    const data = await signInWithPopup(authService, provider);
  };
  return (
    <div>
      <AuthForm />
      <button onClick={onSocialClick} name="google">
        Continue with Google
      </button>
      <button onClick={onSocialClick} name="gh">
        Continue with Github
      </button>
    </div>
  );
};
export default Auth;
