import React, { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState(null); // Initialize as null to handle the loading state

  useEffect(() => {
    fetch("/json")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data); // Set the fetched data
      });
  }, []);

  return (
    <div>
      <h1>Backend Data</h1>
      
      {/* Check if data is still loading */}
      {backendData === null ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p><strong>Message:</strong> {backendData.message}</p>
          <p><strong>Status:</strong> {backendData.status}</p>

          <h2>Data</h2>
          <p><strong>ID:</strong> {backendData.data.id}</p>
          <p><strong>Name:</strong> {backendData.data.name}</p>
        </div>
      )}
    </div>
  );
}

export default App;
