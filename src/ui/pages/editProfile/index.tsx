import React, { useEffect, useState } from "react";

import Header from "../../components/common/header";

import styles from "./styles.module.scss";

interface UserInfo {
  username: string;
  first_name: string;
  last_name: string;
  job_title: string;
  description: string;
}

const EditProfile = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    username: "",
    first_name: "",
    last_name: "",
    job_title: "",
    description: "",
  });

  const getUserInfo = async () => {
    const response = await fetch("https://linkstagram-api.ga/account", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50X2lkIjo1ODU4LCJhdXRoZW50aWNhdGVkX2J5IjpbInBhc3N3b3JkIl19.krKzsYJlnneLMF16N2ov7wLf9R7hVXpK7hl0kjhUXvM",
      },
    });

    const result = await response.json();

    setUserInfo({ ...result });
  };

  const handleChange = async () => {
    const body = {
      account: {
        username: (document.getElementById("username") as HTMLInputElement)
          ?.value,
        first_name: (document.getElementById("firstName") as HTMLInputElement)
          ?.value,
        last_name: (document.getElementById("secondName") as HTMLInputElement)
          ?.value,
        job_title: (document.getElementById("jobTitle") as HTMLInputElement)
          ?.value,
        description: (
          document.getElementById("description") as HTMLInputElement
        )?.value,
      },
    };

    await fetch("https://linkstagram-api.ga/account", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50X2lkIjo1ODU4LCJhdXRoZW50aWNhdGVkX2J5IjpbInBhc3N3b3JkIl19.krKzsYJlnneLMF16N2ov7wLf9R7hVXpK7hl0kjhUXvM",
      },

      body: JSON.stringify(body),
    });
    await getUserInfo();
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div>
      <Header logOutBtn />
      <div className={styles.content}>
        <form className={styles.form}>
          <label htmlFor="username">
            Nickname
            <input id="username" defaultValue={userInfo.username} />
          </label>
          <label htmlFor="firstName">
            First Name
            <input id="firstName" defaultValue={userInfo.first_name} />
          </label>
          <label htmlFor="secondName">
            Second Name
            <input id="secondName" defaultValue={userInfo.last_name} />
          </label>
          <label htmlFor="jobTitle">
            Job Title
            <input id="jobTitle" defaultValue={userInfo.job_title} />
          </label>
          <label htmlFor="description">
            Description
            <textarea id="description" defaultValue={userInfo.description} />
          </label>

          <button type="button" onClick={() => handleChange()}>
            Save
          </button>
          <button className={styles.cancelBtn} type="reset">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
