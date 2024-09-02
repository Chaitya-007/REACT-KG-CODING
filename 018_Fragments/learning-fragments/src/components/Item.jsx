import styles from "./Item.module.css";

const Item = ({ foodItem, handleBuyButton }) => {
  // let { foodItem } = props;

  const handleButtonnCLicked = (event) => {
    console.log(event);
    console.log(`${foodItem} being bought`);
  };

  return (
    <li
      /*key={props.foodItem}*/
      key={foodItem}
      className={` ${styles["kg-item"]} list-group-item `}
      onClick={handleBuyButton}
    >
      {/* {props.foodItem} */}
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button className={`${styles.button} btn btn-info`}>Buy</button>
    </li>
  );
};

export default Item;
