import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy data",
        location: "default",
      },
    };
    // console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "child componentDidMount");
    // API call

    this.timer = setInterval(() => {
      console.log("Robin Chan is love...!");
    }, 1000);

    const data = await fetch("https://api.github.com/users/manishkunt");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("component will unmount");
  }

  render() {
    // console.log(name + "child Rendor");
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: @manishkunt</h2>
      </div>
    );
  }
}

export default UserClass;
