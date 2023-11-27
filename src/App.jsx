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
    if (displayValue.includes("/0")) {
      setDisplayValue("ERR");
      setTimeout(() => setDisplayValue("0"), 1500);
    } else {
      setDisplayValue(eval(displayValue).toString());
    }
  };

  const handleClearClick = () => {
    setDisplayValue("0");
  };

  const buttons = [
    { text: "1", onClick: handleNumberClick },
    { text: "2", onClick: handleNumberClick },
    { text: "3", onClick: handleNumberClick },
    { text: "+", onClick: handleOperatorClick, className: styles.operator },
    { text: "4", onClick: handleNumberClick },
    { text: "5", onClick: handleNumberClick },
    { text: "6", onClick: handleNumberClick },
    { text: "-", onClick: handleOperatorClick, className: styles.operator },
    { text: "7", onClick: handleNumberClick },
    { text: "8", onClick: handleNumberClick },
    { text: "9", onClick: handleNumberClick },
    { text: "*", onClick: handleOperatorClick, className: styles.operator },
    { text: "0", onClick: handleNumberClick },
    { text: ".", onClick: handleNumberClick },
    { text: "C", onClick: handleClearClick, className: styles.clearButton },
    { text: "/", onClick: handleOperatorClick, className: styles.operator },
    { text: "=", onClick: handleEqualClick, className: styles.lastButton },
  ];

  return (
    <div className={styles.calculator}>
      <div className={styles.display}>{displayValue}</div>
      <div className={styles.buttons}>
        {buttons.map(button => (
          <Button
            key={button.text}
            text={button.text}
            onClick={button.onClick}
            className={button.className}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
