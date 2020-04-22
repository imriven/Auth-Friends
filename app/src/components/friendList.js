import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/auth";
import { Link } from "react-router-dom";
import { CardDiv, CardContainerDiv } from "../styles/index"

function Friendslist() {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then((res) => setFriends(res.data))
      .catch((err) => console.log(err));
  }, []);
  // const handleDelete = (e) => {
  //   e.preventDefault();
  //   axiosWithAuth()
  //     .delete((res) => {
  //       history.push("/friendslist");
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <div>
    <CardContainerDiv>
      {friends &&
        friends.map((friend) => (
          <CardDiv>
            <p>{friend.name}</p>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
          </CardDiv>
        ))}
        
    </CardContainerDiv>
    <Link to="/addfriend">Add Friend</Link>
   </div>
  );
}

export default Friendslist;
