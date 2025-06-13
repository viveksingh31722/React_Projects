import React, { useState, useEffect } from "react";
import Card from "./card";
import './style.css'

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("viveksingh31722");
  const [userData, setUserData] = useState(null);
  const [errMsg, setErrMsg] = useState("");
  const [Loading, setLoading] = useState(true);

  async function fetchGithubUserData() {
    try {
      setLoading(true);
      const res = await fetch(`http://api.github.com/users/${userName}`);
      const data = await res.json();

      if (data) {
        setUserData(data);
        setLoading(false);
      }

      console.log(data);
    } catch (error) {
      setErrMsg(error.message);
      setLoading(false);
    }
  }

  function handleSubmit() {
    fetchGithubUserData();
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (Loading) {
    return <h1>Loading Data | Please Wait</h1>;
  }

  if (errMsg) {
    return <div>An Error Occurred | `${errMsg.message}`</div>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-by-username"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <Card user={userData} /> : null}
    </div>
  );
}
