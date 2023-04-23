import React, { Fragment, useContext } from "react";
import { EndPointContext } from "../App";

const JobCard = ({ job, setResults }) => {
  const languages = job.languages;
  const tools = job.tools;

  const { setEndPoint } = useContext(EndPointContext);

  const handleEndPoint = (extraRef, query) => {
    switch (query) {
      case "role":
        setEndPoint(`http://localhost:8000/jobs?${query}=${extraRef}`);
        break;
      case "level":
        setEndPoint(`http://localhost:8000/jobs?${query}=${extraRef}`);
        break;
      default:
        setEndPoint(`http://localhost:8000/jobs`);
    }
  };

  return (
    <Fragment>
      <div
        className="bg-white rounded-md job-card px-6 pt-[32px] pb-[30px] mb-[60px] lg:mb-7 lg:flex lg:justify-between lg:items-center"
        style={
          job.featured
            ? { borderLeftWidth: "5px", borderColor: "#5BA4A4" }
            : { borderBlockColor: "transparent" }
        }
      >
        <div className="lg:flex items-center lg:gap-6 relative">
          <div className="">
            {job.logo ? (
              <img
                src={job.logo}
                alt={job.company}
                className="w-[60px] h-[60px] absolute top-[-60px] lg:relative lg:top-[initial] lg:w-[92px] lg:h-[92px]"
              />
            ) : (
              <span className="w-[50px] h-50px lg:w-[92px] lg:h-[92px] bg-[#EEF6F6] rounded-full flex justify-center items-center lg:text-[30px] font-semibold text-[#5BA4A4]">
                {job.company.charAt(0).toUpperCase()}
              </span>
            )}
          </div>
          <div className="py-3">
            <div className="flex gap-3 items-center flex-wrap">
              <h3 className="text-[#5BA4A4] font-semibold">{job.company}</h3>
              {job.new && (
                <span className="inline-block py-1 font-semibold text-white bg-[#5BA4A4]  px-3 rounded-[30px]">
                  NEW
                </span>
              )}
              {job.featured && (
                <span className="inline-block py-1 font-semibold text-white bg-[#2C3A3A]  px-3 rounded-[30px]">
                  FEATURED
                </span>
              )}
            </div>
            <div className="pb-6 border-b-[1px] border-[#7B8E8E] mt-[13px] lg:py-0 lg:border-transparent">
              <h2 className="text-[#2C3A3A] font-semibold lg:hover:text-[#5BA4A4] lg:hover:cursor-pointer transition-all">
                {job.position}
              </h2>
              <div className="flex gap-2 items-center text-[#7B8E8E] mt-[12px]">
                <span className="font-medium text-sm">{job.postedAt}</span>
                <span className="w-[6px] h-[6px] bg-[#7B8E8E] rounded-full"></span>
                <span className="font-medium text-sm">{job.contract}</span>
                <span className="w-[6px] h-[6px] bg-[#7B8E8E] rounded-full"></span>
                <span className="font-medium text-sm">{job.location}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-[10px] items-center flex-wrap pt-4 pr-[1px] gap-y-6">
          <div className="flex gap-[10px] items-center">
            <button
              onClick={(e) => handleEndPoint(e.target.value, "role")}
              value={job.role}
              className="py-[8px] px-[9.5px] bg-[#EEF6F6] text-[#5BA4A4] rounded-[4px] font-medium lg:hover:bg-[#5BA4A4] lg:hover:text-white cursor-pointer transition-all"
            >
              {job.role}
            </button>
            <button
              onClick={(e) => handleEndPoint(e.target.value, "level")}
              value={job.level}
              className="py-[8px] px-[9.5px] bg-[#EEF6F6] text-[#5BA4A4] rounded-[4px] font-medium lg:hover:bg-[#5BA4A4] lg:hover:text-white cursor-pointer transition-all"
            >
              {job.level}
            </button>
          </div>
          {languages.map((tag, index) => (
            <button
              onClick={(e) => {
                handleEndPoint(e.target.value, "languages", index);
              }}
              value={tag}
              key={index}
              className="py-[8px] px-[9.5px] bg-[#EEF6F6] text-[#5BA4A4] rounded-[4px] font-medium lg:hover:bg-[#5BA4A4] lg:hover:text-white cursor-pointer transition-all"
            >
              {tag}
            </button>
          ))}
          {tools.map((tag, index) => (
            <button
              value={tag}
              key={index}
              className="py-[8px] px-[9.5px] bg-[#EEF6F6] text-[#5BA4A4] rounded-[4px] font-medium lg:hover:bg-[#5BA4A4] lg:hover:text-white cursor-pointer transition-all"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default JobCard;
