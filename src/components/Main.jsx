import React, { Fragment, useContext, useEffect, useState } from 'react';
import JobCard from './JobCard';
import useFetchJobs from '../hooks/useFetchJobs';
import { EndPointContext } from '../App';


const Main = () => {
    const {endPoint, setEndPoint} = useContext(EndPointContext);
    console.log(endPoint);
    const [results, setReulsts] = useState([]);
    console.log(results);

    useEffect(() => {
      const fetchJobs = async (apiEndpoint) => {
          try {
              await fetch (apiEndpoint)
              .then((res) => res.json())
              .then((data) => setReulsts(data))
          } catch (err) {
              console.log(err.message)
          }
      }
      fetchJobs(endPoint);
    }, [endPoint])

  return (
    <Fragment>
        <main>
            <div className="px-6 pt-[55px] lg:max-w-4xl mx-auto xl:max-w-5xl">
                {results.map((job) => (<JobCard job={job} key={job.id}/>))}
            </div>
        </main>
    </Fragment>
  )
}

export default Main