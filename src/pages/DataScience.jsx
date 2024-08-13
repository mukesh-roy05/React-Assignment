import ReactCard from "../components/ReactCard";

const DataScience = ({ data }) => {
  const dataScience = data.filter((item) => item.head === "Data science");
  return (
    <div className="container">
      <div className="row py-5 d-flex justify-content-center">
        {dataScience.map((item, index) => {
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

export default DataScience;
