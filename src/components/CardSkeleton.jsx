import React, { Fragment } from 'react'

const CardSkeleton = () => {
  return (
    <Fragment>
        <div className="bg-white rounded-md job-card px-6 pt-[32px] pb-[30px] mb-[60px] lg:mb-7 lg:flex lg:justify-between lg:items-center">
            <div className="lg:flex items-center lg:gap-6 relative">
                <div className=""><span className="w-[60px] h-[60px] lg:w-[92px] lg:h-[92px] job-img rounded-full block absolute top-[-60px] lg:relative lg:top-[initial]"></span></div>
                <div className="py-3">
                    <div className="flex gap-3 items-center flex-wrap">
                        <h3 className="text-[#5BA4A4] font-semibold job-company"></h3>
                        <span className="block job-list-tag px-3 rounded-[30px]"></span>
                        <span className="block job-list-tag px-3 rounded-[30px]"></span>
                    </div>
                    <div className="pb-6 border-b-[1px] border-[#7B8E8E] mt-[13px] lg:py-0 lg:border-transparent">
                        <h2 className="job-role"></h2>
                        <div className="flex gap-2 items-center text-[#7B8E8E] mt-[12px]">
                            <span className="job-text"></span>
                            <span className='block w-[6px] h-[6px] bg-[#7B8E8E] rounded-full space-x-4'></span>
                            <span className="job-text"></span>
                            <span className='block w-[6px] h-[6px] bg-[#7B8E8E] rounded-full space-x-4'></span>
                            <span className="job-text"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-[10px] items-center flex-wrap pt-4 pr-[1px] gap-y-6">
                <div className="flex gap-[10px] items-center">
                    <button className="job-spec-tag"></button>
                    <button className="job-spec-tag"></button>
                </div>
                <button className="job-spec-tag"></button>
                <button className="job-spec-tag"></button>
            </div>
        </div>
    </Fragment>
  )
}

export default CardSkeleton