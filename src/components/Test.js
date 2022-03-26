import React, { useState, useEffect } from "react";
import Axios from "axios";
// import "./App.css";

function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const { data } = await Axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              id,
            },
            headers: {
              Authorization: "39494rkdjweuiriwhs9dwkelkriewuskswmwjed",
            },
          }
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(1);
  }, []);

  return <div className="App">{JSON.stringify(list)}</div>;
}

export default App;
