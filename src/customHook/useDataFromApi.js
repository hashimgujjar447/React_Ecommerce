async function fetchData() {
  const url = "https://fakestoreapi.com/products";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error; // Re-throw to let calling code handle it
  }
}

export default fetchData;
