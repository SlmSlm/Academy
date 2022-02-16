import React, { useState } from "react";
import { Link } from "react-router-dom";

import HTTP from "../../../api/api";
import ProfilePhoto from "../../../public/images/sign-up-photo.png";
import Header from "../../components/common/header";

import styles from "./styles.module.scss";

const Entry = () => {
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

  const isSignUp = document.location.pathname === "/sign-up";

  const signUp = async () => {
    // const response = await fetch("https://linkstagram-api.ga/create-account", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(userData),
    // });
    // const result = await response.json();
    // console.log(result);

    HTTP.post("create-account", userData);
  };

  const signIn = async () => {
    const body = { login: userData.login, password: userData.password };

    HTTP.post("/login", body).then((response) => {
      console.log(response);
    });
  };

  const handleSubmit = () => {
    if (isSignUp) {
      signUp();
    } else {
      signIn();
    }
  };

  const handleChange = () => {
    setUserData({
      login: (document.getElementById("login") as HTMLInputElement).value,
      password: (document.getElementById("password") as HTMLInputElement).value,
      username: (document.getElementById("name") as HTMLInputElement)?.value,
    });
  };

  return (
    <>
      <Header chooseLang />
      <div className={styles.content}>
        <div className={styles.imageBlock}>
          <img src={ProfilePhoto} className={styles.profilePhoto} alt=" " />
        </div>
        <div className={styles.form}>
          {isSignUp ? <h2>Sign Up</h2> : <h2>Log In</h2>}
          <label htmlFor="email">
            Email
            <input
              type="text"
              placeholder="example@mail.com"
              name="email"
              id="login"
              required
              onChange={() => handleChange()}
            />
          </label>
          {isSignUp && (
            <>
              <label htmlFor="name">
                User Name
                <input
                  type="text"
                  placeholder="alexexample..."
                  name="name"
                  id="name"
                  required
                  onChange={() => handleChange()}
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
              onChange={() => handleChange()}
            />
          </label>
          <div className={styles.buttonBlock}>
            <button type="submit" onClick={() => handleSubmit()}>
              {isSignUp ? "Sign Up" : "Log In"}
            </button>
            <span>
              {isSignUp ? (
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

export default Entry;
