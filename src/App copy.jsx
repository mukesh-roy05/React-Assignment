import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import axios, { Axios } from "axios";
import Table from "react-bootstrap/Table";

export const API_URL = "https://65decdeeff5e305f32a07e6e.mockapi.io/Users";

const App = () => {
  const [userDetails, setUserDettails] = useState([]);
  const [isError, setIsError] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      setUserDettails(response.data);
      // console.log(response.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* <Header />
      <Dashboard userDetails={userDetails} /> */}

      <h2>React Axios Task GUVI</h2>
      {isError !== "" && <h2>{isError}</h2>}

      <div>
        <Table>
          <thead>
            {userDetails.map((data,index) => {
              const keys = Object.keys(data);
              console.log(keys);
                <tr key={index}>
                  <th></th>
                </tr>;
            })}
          </thead>
        </Table>
      </div>
    </div>
  );
};

export default App;
