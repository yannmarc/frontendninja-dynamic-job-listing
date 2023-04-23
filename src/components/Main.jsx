import React, { Fragment, useContext, useEffect, useState } from 'react';
import JobCard from './JobCard';
import { EndPointContext } from '../App';
import CardSkeleton from './CardSkeleton';
import Error from './Error';


const MapSkeleton = () => {
  const skeletonArr = new Array(5);
  for(let i = 0; i < skeletonArr.length - 1; i++) {
    return (
      <>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </>
    )
  }
}


const Main = () => {
    const {endPoint, setEndPoint} = useContext(EndPointContext);
    const [results, setReulsts] = useState([]);
    const [dataStates, setDataStates] = useState({
      isLoaded: false,
      isError: false
    })

    useEffect(() => {
      const fetchJobs = async (apiEndpoint) => {
          try {
              await fetch (apiEndpoint)
              .then((res) => res.json())
              .then((data) => {
                setReulsts(data);
                setDataStates({...dataStates, isError: false});
            })
            setDataStates({...dataStates, isLoaded: true});
            console.log(await fetch(apiEndpoint))
          } catch (err) {
              setDataStates({...dataStates, isError: true})
              console.log(dataStates.isError)
              console.log(err.message)
          }
      }
      setTimeout(() => {
        fetchJobs(endPoint);
      }, 2000)
    }, [endPoint, setEndPoint, dataStates.isError])

  return (
    <Fragment>
        <main>
            <div className="px-6 pt-[55px] lg:max-w-4xl mx-auto xl:max-w-5xl lg:mt-[70px]">
                {dataStates.isLoaded ? null : <MapSkeleton />}
                {dataStates.isError ? <Error /> : null}
                {results.map((job) => (<JobCard job={job} key={job.id}/>))}
            </div>
        </main>
    </Fragment>
  )
}

export default Main