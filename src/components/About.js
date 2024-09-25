import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Rendred");
    return (
      <div>
        <h1>About</h1>
        <h2>This is the app's about section</h2>
        <UserClass name={"First "} location={"Jaipur Class"} />
      </div>
    );
  }
}

export default About;
