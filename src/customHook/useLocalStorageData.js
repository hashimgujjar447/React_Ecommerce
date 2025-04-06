export default function getDataFromLS() {
  const data = localStorage.getItem("Products");
  if (data) {
    return JSON.parse(data);
  }
  return null;
}
