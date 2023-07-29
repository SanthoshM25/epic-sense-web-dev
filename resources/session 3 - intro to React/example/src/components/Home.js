import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Card from "./Card";

export default function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((jsonResponse) => {
        setUsers(jsonResponse);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <>{users && users.map((user) => <Card movie={user.name} />)}</>;
}
