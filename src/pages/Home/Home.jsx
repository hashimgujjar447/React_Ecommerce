import React from "react";
import Card from "../../components/Card";
import { useEffect } from "react";
import fetchData from "../../customHook/useDataFromApi.js";
import Container from "../../components/Container.jsx";

function Home() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    async function fetchAndLogData() {
      try {
        const data = await fetchData();
        console.log(data);
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      }
    }

    fetchAndLogData();
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Products"));
    if (data) {
      setData(data);
    }
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      localStorage.setItem("Products", JSON.stringify(data));
    }
  }, [data]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-red-500 text-3xl">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center text-red-500 text-3xl">
        Error: {error.message}
      </div>
    );
  }

  return (
    <Container>
      <div className="flex flex-wrap justify-between items-center min-h-screen ">
        {data && data.map((item) => <Card key={item.id} cardData={item} />)}
      </div>
    </Container>
  );
}

export default Home;
