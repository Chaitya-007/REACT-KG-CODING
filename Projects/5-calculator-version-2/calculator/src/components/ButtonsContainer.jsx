import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = () => {
  let buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((name) => (
        <button key={name} className={styles.buttton}>
          {name}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
