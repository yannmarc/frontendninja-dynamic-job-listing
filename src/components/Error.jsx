import React, { Fragment } from 'react'

const Error = () => {
  return (
    <Fragment>
        <div className="text-center">
            <div className="text-lg lg:text-[45px] font-bold text-slate-600">Error 500</div>
            <p className="text-slate-500 py-6 lg:py-9 lg:px-[200px] px-4 text-base lg:text-xl">It looks like server is not responding, check your internet connection and try again.</p>
        </div>
    </Fragment>
  )
}

export default Error