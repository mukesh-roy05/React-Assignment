import React from "react";
import ReactCard from "../components/ReactCard";

const All = ({ data }) => {
  return (
    <div className="container">
      <div className="row py-5 d-flex justify-content-center">
        {data.map((item, index) => (
          <ReactCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default All;
