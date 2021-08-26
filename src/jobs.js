import React from "react";
import Btn from "./btn";
import Job from "./Job";
import Title from "./Title";

const Jobs = (props) => {
  const { id, title, duties, dates, company, category, btn,number } = props;
  return (
    <>
      <section className="section">
        <Title />
        <div className="jobs-center">
          <Btn category={category} number={number} btn={btn} />
          <Job title={title} company={company} duties={duties} dates={dates} />
        </div>
      </section>
    </>
  );
};

export default Jobs;
