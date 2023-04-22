import React, { Fragment, useContext, useEffect, useState } from 'react';
import JobCard from './JobCard';
import { EndPointContext } from '../App';
import CardSkeleton from './CardSkeleton';


const Main = () => {
    const {endPoint, setEndPoint} = useContext(EndPointContext);
    const [results, setReulsts] = useState([]);
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
      const fetchJobs = async (apiEndpoint) => {
          try {
              await fetch (apiEndpoint)
              .then((res) => res.json())
              .then((data) => {
                setReulsts(data);
                setLoaded(true);
            })
          } catch (err) {
              console.log(err.message)
          }
      }
      setTimeout(() => {
        fetchJobs(endPoint);
      }, 2000)
    }, [endPoint, setEndPoint])

  return (
    <Fragment>
        <main>
            <div className="px-6 pt-[55px] lg:max-w-4xl mx-auto xl:max-w-5xl lg:mt-[70px]">
                {isLoaded ? null : <CardSkeleton />}
                {results.map((job) => (<JobCard job={job} key={job.id}/>))}
            </div>
        </main>
    </Fragment>
  )
}

export default Main