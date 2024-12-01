import React, { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [data, setData] = useState(""); 

  const getData=async()=>{
    const response = await Axios.get("/json");
    setData(response.data);
  }

    useEffect(()=>{
      getData()
    }, []);

  return (
    <div>
      <h1>Backend Data</h1>
      
      {data === null ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Data</h2>
          <p><strong>Name:</strong> {data}</p>
        </div>
      )}
    </div>
  );
}

export default App;
