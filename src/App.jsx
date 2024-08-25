import { useEffect, useState } from "react";

const api = "https://66ca324159f4350f064ea5a8.mockapi.io/users";
const App = () => {
  const [data, setData] = useState([]);
  const [isEnable, setIsEnable] = useState(false);

  useEffect(() => {
    fetch(api, { method: "GET" })
      .then((response) => response.json())
      .then((res) => setData(res));
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
