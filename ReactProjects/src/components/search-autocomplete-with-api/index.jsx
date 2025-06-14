import React, { useState, useEffect } from "react";
import Suggestions from "./suggestion";
import './style.css'
export default function SearchAutoComplete() {
  const [Loading, setLoading] = useState(false);
  const [Users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUser] = useState([]);

  function handleChange(e) {
    const query = e.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
      const filteredData =
        Users && Users.length
          ? Users.filter((item) => item.toLowerCase().indexOf(query) > -1)
        : [];

      setFilteredUser(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  async function fetchListOfUsers() {
    try {
      setLoading(true);

      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }

      console.log(data);
    } catch (error) {

      setError(error);
      setLoading(false);
    }
  }

  function handleClick(e){
    console.log(e.target.innerText);
    setShowDropdown(false);
    setSearchParam(e.target.innerText);
    setFilteredUser([]);
  }


  useEffect(() => {
    fetchListOfUsers();
  }, []);

  console.log(Users, filteredUsers);

  return (
    <div className="search-autocomplete-container">
      {Loading ? (
        <h1>Loading Data | Please Wait</h1>
      ) : (
        <input
          type="text"
          name="search-users"
          placeholder="Search users here..."
          value={searchParam}
          onChange={handleChange}
        />
      )}
      {showDropdown && <Suggestions handleClick={handleClick} data={filteredUsers} />}
    </div>
  );
}
