const Item = ({ foodItem }) => {
  // let { foodItem } = props;

  return (
    <li
      /*key={props.foodItem}*/
      key={foodItem}
      className="list-group-item kg-item"
    >
      {/* {props.foodItem} */}
      <span className="kg-span">{foodItem}</span>
    </li>
  );
};

export default Item;
