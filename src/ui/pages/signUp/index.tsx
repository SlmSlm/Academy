import React from "react";
import { Link } from "react-router-dom";

import ProfilePhoto from "../../../public/images/sign-up-photo.png";

import styles from "./styles.module.scss";

const SignUp = () => {
  return (
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
            required
          />
        </label>
        <div className={styles.buttonBlock}>
          <button type="submit">
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
  );
};

export default SignUp;
