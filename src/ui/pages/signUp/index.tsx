import React, { useState } from "react";
import { Link } from "react-router-dom";

import ProfilePhoto from "../../../public/images/sign-up-photo.png";
import Header from "../../components/common/header";

import styles from "./styles.module.scss";

const SignUp = () => {
  interface IuserData {
    username?: string;
    login?: string;
    password?: string;
  }

  const [userData, setUserData] = useState<IuserData>({
    username: "",
    login: "",
    password: "",
  });

  const signUp = async () => {
    const response = await fetch("https://linkstagram-api.ga/create-account", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const result = await response.json();

    console.log(result);
  };

  const signIn = async () => {
    const body = { login: userData.login, password: userData.password };
    const response = await fetch("https://linkstagram-api.ga/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();

    console.log(result);
  };

  const handleSubmit = () => {
    setUserData({
      login: (document.getElementById("login") as HTMLInputElement).value,
      password: (document.getElementById("password") as HTMLInputElement).value,
      username: (document.getElementById("name") as HTMLInputElement)?.value,
    });

    if (document.location.pathname === "/sign-up") {
      signUp();
    } else {
      signIn();
    }
  };

  return (
    <>
      <Header chooseLang />
      <div className={styles.content}>
        <div className={styles.imageBlock}>
          <img src={ProfilePhoto} className={styles.profilePhoto} alt=" " />
        </div>
        <div className={styles.form}>
          {document.location.pathname === "/sign-up" ? (
            <h2>Sign Up</h2>
          ) : (
            <h2>Log In</h2>
          )}
          <label htmlFor="email">
            Email
            <input
              type="text"
              placeholder="example@mail.com"
              name="email"
              id="login"
              required
            />
          </label>
          {document.location.pathname === "/sign-up" && (
            <>
              <label htmlFor="name">
                User Name
                <input
                  type="text"
                  placeholder="alexexample..."
                  name="name"
                  id="name"
                  required
                />
              </label>
            </>
          )}
          <label htmlFor="password">
            Password
            <input
              type="password"
              placeholder="Type in..."
              name="password"
              id="password"
              required
            />
          </label>
          <div className={styles.buttonBlock}>
            <button type="submit" onClick={() => handleSubmit()}>
              {document.location.pathname === "/sign-up" ? "Sign Up" : "Log In"}
            </button>
            <span>
              {document.location.pathname === "/sign-up" ? (
                <>
                  Have a account? <Link to="/sign-in">Log In</Link>{" "}
                </>
              ) : (
                <>
                  Don`t have an account? <Link to="/sign-up">Sign Up</Link>
                </>
              )}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
