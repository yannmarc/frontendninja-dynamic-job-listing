import { Fragment, createContext, useState } from "react";

import Home from "./pages/Home";
// import { FilterProvider } from "./context/FilterContext";

export const EndPointContext = createContext();
export const JobsContext = createContext();



function App() {

  const [endPoint, setEndPoint] = useState("http://localhost:8000/jobs")

  return (
   <Fragment>
      <EndPointContext.Provider value={{endPoint, setEndPoint}}>
        <Home />
      </EndPointContext.Provider>
   </Fragment>
  );
}

export default App;
