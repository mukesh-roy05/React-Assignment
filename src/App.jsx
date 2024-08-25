import { useEffect, useState } from "react";

const api = "https://66ca324159f4350f064ea5a8.mockapi.io/users";
const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(api, { method: "GET" })
      .then((response) => response.json())
      .then((res) => setData(res));
  }, []);
  return (
    <div>
      <h1>Book Author</h1>
      <ul style={{ listStyle: "none" }}>
        {data.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
