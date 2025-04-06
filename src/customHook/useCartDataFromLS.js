export default function useCartDataFromLS() {
  const savedData = localStorage.getItem("cart");
  if (savedData) {
    return JSON.parse(savedData);
  }
}
