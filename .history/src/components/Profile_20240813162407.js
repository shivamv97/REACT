import { useState } from "react";

const Profile = (props) => {
  const [count] = useState(0);
  return (
    <div>
      <h2>This is my Profile page</h2>
      <h3>Name: {props.name}</h3>
    </div>
  );
};

export default Profile;