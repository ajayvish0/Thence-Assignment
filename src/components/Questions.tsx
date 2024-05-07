import { useState } from "react";
import Union from "../assets/images/Union.png";
import Plus from "../assets/images/plus.png";
import minus from "../assets/images/minus.png";

type questionType = {
  heading?: string;
  content?: string;
};

const Question: questionType[] = [
  {
    heading: "Do you offer freelancers? ",
    content:
      "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the dispute resolution process if needed.",
  },
  {
    heading:
      "What's the gurantee that I wiil be satisfied with the hired talent? ",
    content:
      "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the dispute resolution process if needed.",
  },
  {
    heading: "Can I hire mutiple talents at once?",
    content:
      "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the dispute resolution process if needed.",
  },
  {
    heading: "Why should I not go to an agency directly?",
    content:
      "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the dispute resolution process if needed.",
  },
  {
    heading: "Who can help me pick a right skillset and duration for me?",
    content:
      "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the dispute resolution process if needed.",
  },
];

const Questions = () => {
  return (
    <div className="lg:grid lg:grid-cols-2">
      <div>
        <div>
          <h3 className="font-Grace text-[1.5rem] text-gray-600">
            {" "}
            What's on your mind{" "}
          </h3>
          <h1 className="text-5xl font-semibold "> Ask Questions</h1>
        </div>
        <div className="relative top-[4rem] right-[3rem]">
          <img src={Union} alt="union" className="" />
        </div>
      </div>
      <div className="h-full w-full py-[2rem] px-[4rem]">
        <RightPanel />
      </div>
    </div>
  );
};

function RightPanel() {
  const [openPanels, setOpenPanels] = useState(
    Array(Question.length).fill(false)
  );

  return (
    <div>
      {Question.map((item, index) => (
        <div key={index} className=" ">
          <div className="pb-5 border-b-[0.01rem] border-zinc-400">
            <div className="flex  justify-between pt-[2rem]">
              <h1 className="text-xl font-semibold max-w-[450px] ">
                {item.heading}
              </h1>
              <button
                className="text-2xl font-semibold text-black"
                onClick={() => {
                  const updatedPanels = [...openPanels];
                  updatedPanels[index] = !updatedPanels[index];
                  setOpenPanels(updatedPanels);
                }}
              >
                {openPanels[index] ? (
                  <img src={minus} alt="minus.png" className=" " />
                ) : (
                  <img src={Plus} alt="plus" className=" " />
                )}
              </button>
            </div>
            {openPanels[index] && (
              <p className="text-[1rem] text-slate-600 pt-5">{item.content}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
export default Questions;
