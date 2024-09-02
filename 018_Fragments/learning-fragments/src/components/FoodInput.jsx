import styles from "./FoodInput.module.css";

const FoodInput = ({ handleKeyDown }) => {
  return (
    <input
      type="text"
      className={styles.foodInput}
      placeholder="Enter the foodItem"
      onKeyDown={handleKeyDown}
    />
  );
};

export default FoodInput;
