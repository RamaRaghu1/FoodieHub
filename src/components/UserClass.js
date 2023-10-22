import React from "react";
import User from "./User";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Ramaraghu1");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("component updated");
  }
  componentWillUnmount() {
    console.log("component unmount");
  }
  render() {
    const { name, location, blog, avatar_url } = this.state.userInfo;
    return (
      <div>
        {/* <h2>{this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase
        </button> */}
        <img src={avatar_url} />

        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Blog:{blog}</h4>
      </div>
    );
  }
}

export default UserClass;
