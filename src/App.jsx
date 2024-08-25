import { useEffect, useState } from "react";
import axios from "axios";

const api = "https://66ca324159f4350f064ea5a8.mockapi.io/users";
const App = () => {
  const [data, setData] = useState([]);
  const [isEnable, setIsEnable] = useState(false);

  const urlFetch = async () => {
    try {
      const fetchData = await axios.get(api);
      setData(fetchData.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // fetch(api, { method: "GET" })
    //   .then((response) => response.json())
    //   .then((res) => setData(res));
    urlFetch();
  }, []);

  const handleClick = (e) => {
    console.log(e.target.value);
    setIsEnable(!isEnable);
  };

  return (
    <div>
      <h1>Book Author</h1>
      <button onClick={handleClick}>{isEnable ? "Hide" : "Show"} </button>
      {isEnable && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
