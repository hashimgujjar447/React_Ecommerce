import React from "react";
import Card from "../../components/Card";
import { useEffect } from "react";
import fetchData from "../../customHook/useDataFromApi.js";

function Home() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    const cached = JSON.parse(localStorage.getItem("Products"));
    if (cached && cached.length > 0) {
      setData(cached);
      setLoading(false);
      return;
    }

    async function fetchAndCache() {
      try {
        const result = await fetchData();
        setData(result);
        localStorage.setItem("Products", JSON.stringify(result));
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchAndCache();
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
    <div className=" min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-3">Products available are :</h1>
      <div className="flex flex-wrap justify-center md:justify-between items-center">
        {data && data.map((item) => <Card key={item.id} cardData={item} />)}
      </div>
    </div>
  );
}

export default Home;
