import { Button } from "./components/Button/Button";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [displayValue, setDisplayValue] = useState("0");

  const handleNumberClick = e => {
    setDisplayValue(prevDisplayValue =>
      prevDisplayValue === "0"
        ? e.target.value
        : prevDisplayValue + e.target.value
    );
  };

  const handleOperatorClick = e => {
    setDisplayValue(prevDisplayValue => prevDisplayValue + e.target.value);
  };

  const handleEqualClick = () => {
    setDisplayValue(eval(displayValue).toString());
  };

  const handleClearClick = () => {
    setDisplayValue("0");
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.display}>{displayValue}</div>
      <div className={styles.buttons}>
        <Button onClick={handleNumberClick} text="1" />
        <Button onClick={handleNumberClick} text="2" />
        <Button onClick={handleNumberClick} text="3" />
        <Button
          text="+"
          className={styles.operator}
          onClick={handleOperatorClick}
        />
        <Button onClick={handleNumberClick} text="4" />
        <Button onClick={handleNumberClick} text="5" />
        <Button onClick={handleNumberClick} text="6" />
        <Button
          text="-"
          className={styles.operator}
          onClick={handleOperatorClick}
        />
        <Button onClick={handleNumberClick} text="7" />
        <Button onClick={handleNumberClick} text="8" />
        <Button onClick={handleNumberClick} text="9" />
        <Button
          text="*"
          className={styles.operator}
          onClick={handleOperatorClick}
        />
        <Button onClick={handleNumberClick} text="0" />
        <Button onClick={handleNumberClick} text="." />
        <Button
          text="C"
          className={styles.clearButton}
          onClick={handleClearClick}
        />
        <Button
          text="/"
          className={styles.operator}
          onClick={handleOperatorClick}
        />
        <Button
          text="="
          onClick={handleEqualClick}
          className={styles.lastButton}
        />
      </div>
    </div>
  );
}

export default App;
