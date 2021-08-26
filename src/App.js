import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Jobs from "./jobs";
import Loader from "./Loader";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  const fetchJobs = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setJobs(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  const categ = jobs.map((item) => item.company);
  return (
    <>
      <Jobs 
      {...jobs[value]} 
      category={categ} 
      number={value} 
      btn={setValue} />
    </>
  );
}

export default App;
