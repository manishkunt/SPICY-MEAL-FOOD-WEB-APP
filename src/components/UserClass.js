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

    const data = await fetch("https://api.github.com/users/manishkunt");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    // console.log(name + "child Rendor");
    const { avatar_url } = this.state.userInfo;

    return (
      <div>
      <div className="hidden lg:flex items-center w-9/12 ml-10 ">
        <div className="pl-10 pt-10 user-card  w-2/5 ml-24 flex flex-col items-center">
          <img className="rounded-full w-56" src={avatar_url}></img>
          <h2 className="font-medium dark:text-white">Manish Kumar</h2>
          <h2 className="font-medium text-slate-700 dark:text-slate-400">Full Stack Developer</h2>
        </div>
        <div className="w-3/5 text-slate-500 font-medium">
          <p><span className="font-bold">Manish</span> is a 2024 Computer Science Engineering (CSE) graduate and a Full Stack Development engineer with a
             strong foundation in MERN Stack (MongoDB, Express.js, React.js, and Node.js) and Java Development
             (Stream API, Spring). He is proficient in designing user interactive, simple and visually stunning UI 
             interfaces.
             </p>
        </div>
      </div>
      {/*Smaller screens display*/}
      <div className="lg:hidden flex items-center w-full ">
        <div className="pt-14 w-2/5 ml-2 mr-2 flex flex-col items-center">
          <img className="rounded-full w-44" src={avatar_url}></img>
          <h2 className="font-medium dark:text-white">Manish Kumar</h2>
          <h2 className="font-medium text-slate-700 dark:text-slate-400">Full Stack Developer</h2>
        </div>
        <div className="w-3/5 mr-2 text-slate-500 font-medium text-sm">
          <p><span className="font-bold">Manish</span> is a 2024 Computer Science Engineering (CSE) graduate and a Full Stack Development engineer with a
             strong foundation in MERN Stack (MongoDB, Express.js, React.js, and Node.js) and Java Development
             (Stream API, Spring). He is proficient in designing user interactive, simple and visually stunning UI 
             interfaces.
             </p>
        </div>
      </div>
      </div>
    );
  }
}

export default UserClass;
