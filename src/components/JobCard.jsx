import React, { Fragment, useContext, useEffect, useRef} from 'react';
import { EndPointContext } from '../App';

const JobCard = ({ job }) => {
    
    const languages = job.languages;
    const tools = job.tools;
    const extra = [job.role, job.level];

    const {endPoint, setEndPoint} = useContext(EndPointContext);
    
    const langRef = useRef();
    const toolRef = useRef();
    const extraRef = useRef();

   const handleEndPoint = (extraRef) => {
        setEndPoint(`http://localhost:3000/jobs?level=${extraRef}`);
        console.log(endPoint)
    }



  return (
    <Fragment>
        <div className="bg-white rounded-md job-card px-6 pt-[32px] pb-[30px] mb-10 lg:flex lg:justify-between lg:items-center" style={job.featured ? {borderLeftWidth: "5px", borderColor: "#5BA4A4"} : {borderBlockColor: "transparent"}}>
            <div className="lg:flex lg:gap-6">
                <div className="">{job.logo ? <img src={job.logo} alt={job.company} className="w-[50px] h-[50px] lg:w-[92px] lg:h-[92px]" /> : <span className="w-[50px] h-50px lg:w-[92px] lg:h-[92px] bg-[#EEF6F6] rounded-full flex justify-center items-center lg:text-[30px] font-semibold text-[#5BA4A4]">{job.company.charAt(0).toUpperCase()}</span>}</div>
                <div className="">
                    <div className="flex gap-3 items-center flex-wrap">
                        <h3 className="text-[#5BA4A4] font-semibold">{job.company}</h3>
                        {job.new && <span className="inline-block py-1 font-semibold text-white bg-[#5BA4A4]  px-3 rounded-[30px]">NEW</span>}
                        {job.featured && <span className="inline-block py-1 font-semibold text-white bg-[#2C3A3A]  px-3 rounded-[30px]">FEATURED</span>}
                    </div>
                    <div className="pb-6 border-b-[1px] border-[#7B8E8E] mt-[13px] lg:py-0 lg:border-transparent">
                        <h2 className="text-[#2C3A3A] font-semibold lg:hover:text-[#5BA4A4] lg:hover:cursor-pointer transition-all">{job.position}</h2>
                        <div className="flex gap-2 items-center text-[#7B8E8E] mt-[12px]">
                            <span className="font-medium text-sm">{job.postedAt}</span>
                            <span className='w-[6px] h-[6px] bg-[#7B8E8E] rounded-full'></span>
                            <span className="font-medium text-sm">{job.contract}</span>
                            <span className='w-[6px] h-[6px] bg-[#7B8E8E] rounded-full'></span>
                            <span className="font-medium text-sm">{job.location}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-[10px] items-center flex-wrap pt-4 pr-[1px] gap-y-6">
                {extra.map((tag, index) => (
                    <button onClick={() => handleEndPoint(extraRef.current.value)} ref={extraRef} value={tag} key={index} className="py-[8px] px-[9.5px] bg-[#EEF6F6] text-[#5BA4A4] rounded-[4px] font-medium lg:hover:bg-[#5BA4A4] lg:hover:text-white cursor-pointer transition-all">{tag}</button>
                ))}
                {languages.map((tag, index) => (
                    <button ref={langRef} value={tag} key={index} className="py-[8px] px-[9.5px] bg-[#EEF6F6] text-[#5BA4A4] rounded-[4px] font-medium lg:hover:bg-[#5BA4A4] lg:hover:text-white cursor-pointer transition-all">{tag}</button>
                ))}
                {tools.map((tag, index) => (
                    <button ref={toolRef} value={tag} key={index} className="py-[8px] px-[9.5px] bg-[#EEF6F6] text-[#5BA4A4] rounded-[4px] font-medium lg:hover:bg-[#5BA4A4] lg:hover:text-white cursor-pointer transition-all">{tag}</button>
                ))}
            </div>
        </div>
    </Fragment>
  )
}

export default JobCard