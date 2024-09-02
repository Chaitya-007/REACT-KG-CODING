import styles from "./FoodInput.module.css";

const FoodInput = ({ handlChange }) => {
  return (
    <input
      type="text"
      className={styles.foodInput}
      placeholder="Enter the foodItem"
      onChange={handlChange}
    />
  );
};

export default FoodInput;
