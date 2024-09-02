const ErrorMessage = ({ items }) => {
  // let foodItems = ["Apple", "Banana", "Orange", "Grapes", "Mango", "Green"];

  return <>{items.length === 0 && <p>I'm still hungry</p>}</>;
};

export default ErrorMessage;
