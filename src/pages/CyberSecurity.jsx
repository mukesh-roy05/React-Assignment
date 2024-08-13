import React from "react";
import ReactCard from "../components/ReactCard";

const CyberSecurity = ({ data }) => {
  const cyber = data.filter((item) => item.head === "Cyber security");
  return (
    <div className="container">
      <div className="row py-5 d-flex justify-content-center">
        {cyber.map((item, index) => {
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

export default CyberSecurity;
