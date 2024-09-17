import styles from "./WelcomeMessage.module.css";

const WelcomeMessage = ({ todoItems }) => {
  return todoItems.length === 0 ? (
    <p className={styles.welcome}>Welcome to TODO App</p>
  ) : null;
};

export default WelcomeMessage;
