import { useState } from "react";
import styles from "./clickCounter.module.scss";

const ClickCounter = () => {
  const t = "";
  const [count, setCount] = useState(-1);

  const handleClick = () => {
    setCount((c) => c + 1);
  };

  return (
    <button type="button" onClick={handleClick} className={styles.test}>
      Count {count}
    </button>
  );
};

export default ClickCounter;
