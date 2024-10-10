import { Link } from "react-router-dom";
import LinkedIn from "../Logos/LinkedIn.png";
import GitHubLogo from "../Logos/GitHubLogo.png";
import EmailLogo from "../Logos/EmailLogo.png";

const Contact = () => {
  return (
    <div className=" dark:bg-black min-h-screen">
      <div className="w-11/12 m-auto">
        <div className="border-b-[2px] border-slate-300 dark:border-gray-700">
          <h1 className=" py-10 text-5xl dark:text-white font-semibold">
            Contact Us
          </h1>
        </div>
        <div>
          <h5 className="pt-8 text-slate-500">
            If you'd like to get in touch with us, Please find below the mail
            address, LinkedIn profile and Github for referrence.
          </h5>
        </div>
        <div className="pt-6">
          <div>
            <h1 className="pb-2">
              <a
                href="mailto:manishkuntsj@gmail.com"
                className="text-[rgb(254,80,5)] no-underline hover:no-underline"
              >
                <span className="dark:text-slate-400 text-slate-500 mr-5 inline-flex items-center ">
                  Email <img className="w-7 ml-7" src={EmailLogo} />
                </span>
                <span>manishkuntsj@gmail.com</span>
              </a>
            </h1>
          </div>

          <div>
            <h2 className="pb-2">
              <a
                href="https://github.com/manishkunt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgb(254,80,5)] no-underline hover:no-underline"
              >
                <span className="dark:text-slate-400 text-slate-500 mr-2 inline-flex items-center ">
                  GitHub <img className="w-7 ml-4" src={GitHubLogo} />
                </span>
                <span className="ml-3">https://github.com/manishkunt</span>
                
              </a>
            </h2>
          </div>
          <div>
            <h3 className="pb-2">
              <a
                href="https://www.linkedin.com/in/manishhkt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgb(254,80,5)] no-underline hover:no-underline"
              >
                <span className="dark:text-slate-400 text-slate-500 inline-flex items-center ">
                  LinkedIn <img className="w-7 ml-2" src={LinkedIn} />
                </span>
                <span className="ml-5">www.linkedin.com/in/manishhkt</span>
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
