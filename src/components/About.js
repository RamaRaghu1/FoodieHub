import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      {/* <User /> */}
      <UserClass name={"Rama from class"} location={"Chennai"} />
    </div>
  );
};

export default About;
