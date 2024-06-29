import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  function onClickButtonText(event: React.MouseEvent<HTMLButtonElement>) {
    const style = event.currentTarget.getAttribute("data-style");
    console.log(`qhifsha ropt ${style}`);
  }

  return (
    <div>
      <Alert>
        <Button
          text="Click me"
          onClickButton={onClickButtonText}
          style="primary"
        />
      </Alert>
    </div>
  );
}

export default App;
