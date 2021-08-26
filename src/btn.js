import React from "react";

const Btn = ({category,btn,number})=>{
    return(
        <div className="btn-container">
            {category.map((item, index) => (
              <button
                onClick={() => btn(index)}
                key={index}
                className={`job-btn ${index === number && "active-btn"}`}
              >
                {item}
              </button>
            ))}
          </div>
    )
}

export default Btn;