import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";
import FoodPack from "../Logos/FoodPack.png";
import Samosa from "../Logos/Samosa.png";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dark:bg-black min-h-screen">
        <div className="flex items-center h-72 border-b-2 border-slate-300 dark:border-gray-700">
          <div className="flex w-1/5 ">
            <img className="w-72 pt-20" src={FoodPack} />
          </div>
          <div className="w-3/5">
            <h1 className="text-center text-5xl  font-semibold dark:text-white">
              About Us
            </h1>
            <h1 className="text-center pt-8 text-slate-500 font-medium ">
              "Craving a food adventure? Our app serves restaurant vibes, menu
              dives, and a
            </h1>
            <h1 className="text-center  text-slate-500 font-medium">
              dash of code on the side—bon app-é!"
            </h1>
          </div>
          <div className="w-1/5">
            <img className="w-72 pt-24" src={Samosa} />
          </div>
        </div>
        <div className="pt-10">
          <h1 className="text-2xl text-center font-semibold text-gray-600 dark:bg-black dark:text-white">Meet The Developer</h1>
          <UserClass name={"First "} location={"Jaipur"} />
        </div>
      </div>
    );
  }
}

export default About;
