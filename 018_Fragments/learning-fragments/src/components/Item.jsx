import styles from "./Item.module.css";
import { useState } from "react";

const Item = ({ foodItem, bought, handleBuyButton }) => {
  // let { foodItem } = props;

  const handleButtonnCLicked = (event) => {
    console.log(event);
    console.log(`${foodItem} being bought`);
  };

  let [color, setColor] = useState(false);
  const handleColor = () => {
    color = !color;
    setColor(color);
  };

  return (
    <li
      /*key={props.foodItem}*/
      key={foodItem}
      className={` ${styles["kg-item"]} list-group-item ${bought && "active"}`}
      onClick={handleBuyButton}
    >
      {/* {props.foodItem} */}
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button className={`${styles.button} btn btn-info`}>Buy</button>
    </li>
  );
};

export default Item;
