import React, { useState } from "react";

const UserForm = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    username: "",
    password: "",
    country: "",
    gender: "",
    birthdate: "",
    tel: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleAddUser = () => {
    if (user.username.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    // Ensure username is unique
    if (users.find((u) => u.username === user.username)) {
      alert("Username must be unique");
      return;
    }

    setUsers([...users, user]);
    setUser({
      fname: "",
      lname: "",
      username: "",
      password: "",
      country: "",
      gender: "",
      birthdate: "",
      tel: "",
    });
  };

  const handleDeleteUser = (username) => {
    setUsers(users.filter((u) => u.username !== username));
  };

  const handleEditUser = (username) => {
    const userToEdit = users.find((u) => u.username === username);
    setUser(userToEdit);
  };

  const handleUpdateUser = () => {
    setUsers(users.map((u) => (u.username === user.username ? user : u)));
    setUser({
      fname: "",
      lname: "",
      username: "",
      password: "",
      country: "",
      gender: "",
      birthdate: "",
      tel: "",
    });
  };

  return (
    <section className="bg-black h-svh flex items-center justify-center">
        <div className="flex flex-col items-center text-white bg-yellow-200 rounded-xl p-10 justify-between gap-10">
      <h1 className="text-amber-600">User CRUD</h1>
      <form className="flex flex-wrap justify-center gap-1">
        <input
        className="text-gray-500 w-[49%] p-3 rounded-lg"
          name="fname"
          placeholder="First Name"
          value={user.fname}
          onChange={handleChange}
        />
        <input
        className="text-gray-500 w-[49%] p-3 rounded-lg"
          name="lname"
          placeholder="Last Name"
          value={user.lname}
          onChange={handleChange}
        />
        <input
        className="text-gray-500 w-[49%] p-3 rounded-lg"
          name="username"
          placeholder="Username"
          value={user.username}
          onChange={handleChange}
        />
        <input
        className="text-gray-500 w-[49%] p-3 rounded-lg"
          name="password"
          placeholder="Password"
          type="password"
          value={user.password}
          onChange={handleChange}
        />
        <input
        className="text-gray-500 w-[49%] p-3 rounded-lg"
          name="country"
          placeholder="Country"
          value={user.country}
          onChange={handleChange}
        />
        <select
        className="w-[49%] text-gray-500 bg-white p-3"
          name="gender"
          value={user.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input
        className="text-gray-500 w-[49%] p-3 rounded-lg"
          name="birthdate"
          placeholder="Birthdate"
          type="date"
          value={user.birthdate}
          onChange={handleChange}
        />
        <input
        className="text-gray-500 w-[49%] p-3 rounded-lg"
          name="tel"
          placeholder="Telephone"
          value={user.tel}
          onChange={handleChange}
        />

        {users.some((u) => u.username === user.username) ? (
          <button className="bg-amber-800 rounded-full py-2 px-5 mt-5" type="button" onClick={handleUpdateUser}>
            Update User
          </button>
        ) : (
          <button className="bg-amber-800 rounded-full py-2 px-5 mt-5" type="button" onClick={handleAddUser}>
            Add User
          </button>
        )}
      </form>

      <h2 className="text-orange-400 text-[20px] font-bold">Users List</h2>
      <ul className="border-aqua border-4 rounded-md p-2 text-green-600 font-bold text-[18px]">
        {users.map((u) => (
          <li className="flex gap-3" key={u.username}>
            {u.fname} {u.lname} - {u.username} - {u.country} - {u.gender} - {u.birthdate} - {u.tel}
            <button className="bg-blue-200 rounded-full py-1 px-4 text-blue-950" onClick={() => handleEditUser(u.username)}>Edit</button>
            <button className="bg-red-700 rounded-full py-1 px-4 text-red-300" onClick={() => handleDeleteUser(u.username)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    </section>
  );
};

export default UserForm;
