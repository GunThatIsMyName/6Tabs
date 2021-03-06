import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const Job = ({title,company,dates,duties})=>{
    return(
        <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((item, index) => (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{item}</p>
              </div>
            ))}
          </article>
    )
}

export default Job;