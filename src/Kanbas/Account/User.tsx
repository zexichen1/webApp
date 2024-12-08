import { useState, useEffect } from "react";
import { useParams } from "react-router";
import PeopleTable from "../Courses/People/Table";
import * as client from "./client";
import { FaPlus } from "react-icons/fa6";

interface User {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
  section: string;
  role: string;
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [role, setRole] = useState<string>("");
  const [name, setName] = useState<string>("");
  const { uid } = useParams();

  const fetchUsers = async () => {
    try {
      const users = await client.findAllUsers();
      console.log("Retrieved users:", users);
      setUsers(users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const filterUsersByRole = async (role: string) => {
    setRole(role);
    if (role) {
      const filteredUsers = await client.findUsersByRole(role);
      setUsers(filteredUsers);
    } else {
      fetchUsers();
    }
  };

  const filterUsersByName = async (name: string) => {
    setName(name);
    if (name) {
      const filteredUsers = await client.findUsersByPartialName(name);
      setUsers(filteredUsers);
    } else {
      fetchUsers();
    }
  };

  const createUser = async () => {
    const newUser = {
      firstName: "New",
      lastName: `User${users.length + 1}`,
      username: `newuser${Date.now()}`,
      password: "password123",
      email: `email${users.length + 1}@neu.edu`,
      section: "S101",
      role: "STUDENT",
    };
    const user = await client.createUser(newUser);
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  useEffect(() => {
    fetchUsers();
  }, [uid]);

  return (
    <div>
      <button
        onClick={createUser}
        className="float-end btn btn-danger wd-add-people"
      >
        <FaPlus className="me-2" />
        Users
      </button>
      <input
        onChange={(e) => filterUsersByName(e.target.value)}
        placeholder="Search people"
        className="form-control float-start w-25 me-2 wd-filter-by-name"
      />
      <select
        value={role}
        onChange={(e) => filterUsersByRole(e.target.value)}
        className="form-select float-start w-25 wd-select-role"
      >
        <option value="">All Roles</option>
        <option value="STUDENT">Students</option>
        <option value="TA">Assistants</option>
        <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Administrators</option>
      </select>
      <PeopleTable users={users} />
    </div>
  );
}
