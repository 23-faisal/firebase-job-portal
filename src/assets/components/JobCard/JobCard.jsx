import React from "react";
import dayjs from "dayjs";

const JobCard = (props) => {
  const skills = ["JavaScript", "React", "Nodejs"];
  const date1 = dayjs(Date.now());
  const diffInDays = date1.diff(props.postedOn, "day");
  return (
    <div className="mx-40 mt-6 mb-6">
      <div className="flex items-center justify-between bg-zinc-200 border border-black shadow-lg hover:border-blue-500 px-6 py-3 rounded-md  text-slate-800  hover:translate-x-1 transition ease-in-out duration-100">
        <div className="flex flex-col gap-3 ">
          <h1 className="text-lg font-semibold ">
            {props.title} - {props.company}
          </h1>
          <p>
            {props.type} &#x2022; {props.experience} &#x2022; {props.location}
          </p>
          <button className="flex items-center gap-3">
            {skills.map((skill) => {
              return (
                <div
                  className="text-gray-500 py-1 px-2 rounded-md border border-black  text-md "
                  key={skill}
                >
                  {skill}
                </div>
              );
            })}
          </button>
        </div>

        <div>
          <div className="flex items-center gap-10">
            <h1 className="text-gray-500 ">
              {" "}
              Posted {diffInDays > 0 ? `${diffInDays} days ago` : `today`}
            </h1>
            <a href={props.jobLink} target="_blank">
              <button className="px-6 py-2  text-teal-500 border border-teal-500  hover:bg-teal-500 rounded-md hover:text-slate-100 cursor-pointer transition ease-in-out duration-75">
                Apply
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
