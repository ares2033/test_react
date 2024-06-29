import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  function onClickButtonText(event: React.MouseEvent<HTMLButtonElement>) {
    const style = event.currentTarget.getAttribute("data-style");
    console.log(`qhifsha ropt ${style}`);
  }

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button
        text="Click me"
        onClickButton={(e) => {
          onClickButtonText(e);
          setAlertVisibility(true);
        }}
        buttonStyle="secondary"
      />
    </div>
  );
}

export default App;
