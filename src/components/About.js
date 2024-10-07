import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <div>
          loggedInUser
          <UserContext.Consumer>
            {({loggedInUser}) => <h1 className="font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h2>This is the app's about section</h2>
        <UserClass name={"First "} location={"Jaipur Class"} />
      </div>
    );
  }
}

export default About;
