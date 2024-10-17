import UserClass from "./UserClass";
import { Component } from "react";
import FoodPack from "../Logos/FoodPack.png";
import Samosa from "../Logos/Samosa.png";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dark:bg-black min-h-screen">
        {/* Responsive Content for all screen sizes */}
        <div className="flex items-center h-52 lg:h-72 border-b-2 border-slate-300 dark:border-gray-700">
          {/* Image on the left */}
          <div className="flex w-2/12 lg:w-1/5">
            <img className="w-24 lg:w-72 pt-16" src={FoodPack} alt="Food Pack" />
          </div>

          {/* About Us text */}
          <div className="w-8/12 lg:w-3/5">
            <h1 className="text-center text-3xl lg:text-5xl font-semibold dark:text-white">
              About Us
            </h1>
            <h1 className="text-center pt-4 lg:pt-8 text-slate-500 font-medium">
              "Craving a food adventure? Our app serves restaurant vibes, menu dives, and a
            </h1>
            <h1 className="text-center text-slate-500 font-medium">
              dash of code on the side—bon app-é!"
            </h1>
          </div>

          {/* Image on the right */}
          <div className="flex w-2/12 lg:w-1/5">
            <img className="w-24 lg:w-72 pt-16 lg:pt-20" src={Samosa} alt="Samosa" />
          </div>
        </div>

        {/* Developer Section */}
        <div className="pt-10">
          <h1 className="text-2xl text-center font-semibold text-gray-600 dark:bg-black dark:text-white">
            Meet The Developer
          </h1>
          <UserClass name={"First "} location={"Jaipur"} />
        </div>
      </div>
    );
  }
}

export default About;
