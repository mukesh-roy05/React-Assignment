import React from "react";
import ReactCard from "../components/ReactCard";

const Fullstack = ({ data }) => {
  const fullstackData = data.filter((item) => item.head === "Full Stack");
  return (
    <div className="container">
      <div className="row py-5 d-flex justify-content-center">
        {fullstackData.map((item, index) => {
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

export default Fullstack;
