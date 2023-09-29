import React from "react";
import { useState, useEffect } from "react";

const Sidebar = () => {
  const [searchItem, setSearchItem] = useState("");
  const [filterUsers, setFilterUsers] = useState([]);
  const [apiUsers, setApiUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        setApiUsers(data.users);
        // update the filterUsers state
        setFilterUsers(data.users);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filterItems = apiUsers.filter((user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterUsers(filterItems);
  };

  return (
    <div className="box">
      <h3>search :</h3>
      <div className="search">
        <input
          type="search"
          placeholder="Search here"
          value={searchItem}
          onChange={handleInputChange}
        />
      </div>
      {filterUsers.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul>
          {filterUsers.map((user) => (
            <li key={user.id}>{user.firstName}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
