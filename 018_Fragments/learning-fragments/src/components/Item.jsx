import styles from "./Item.module.css";

const Item = ({ foodItem }) => {
  // let { foodItem } = props;

  return (
    <li
      /*key={props.foodItem}*/
      key={foodItem}
      className={` ${styles["kg-item"]}`}
    >
      {/* {props.foodItem} */}
      <span className={styles["kg-span"]}>{foodItem}</span>
    </li>
  );
};

export default Item;
