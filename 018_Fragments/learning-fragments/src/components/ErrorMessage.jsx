const ErrorMessage = ({ items }) => {
  // let foodItems = ["Apple", "Banana", "Orange", "Grapes", "Mango", "Green"];

  return <>{items.length === 0 && <p>No items found</p>}</>;
};

export default ErrorMessage;
