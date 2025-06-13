import React from "react";

export default function Card({ user }) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;

  const createdDate = new Date(created_at);

  return (
    <div className="user">
      <div>
        <img src={avatar_url} alt="User" className="avatar" />
      </div>
      <div>
        <a href={`https://github.com/${name}`}>{name || login}</a>
        <p>
          User Joined on{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleDateString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
      <div>
        <div>
          <div>
            <p>Public Repos</p>
            <p>{public_repos}</p>
          </div>

          <div>
            <p>Followers</p>
            <p>{followers}</p>
          </div>

          <div>
            <p>Following</p>
            <p>{following}</p>
          </div>
        </div>
      </div>
    </div>
    
  );
}
