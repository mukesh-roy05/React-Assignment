import React from "react";
import ReactCard from "../components/ReactCard";

const Career = ({ data }) => {
  const careerData = data.filter((item) => item.head === "Career");
  return (
    <div className="container">
      <div className="row py-5 d-flex justify-content-center">
        {careerData.map((item, index) => {
          return (
            <>
              <ReactCard item={item} index={index} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Career;
