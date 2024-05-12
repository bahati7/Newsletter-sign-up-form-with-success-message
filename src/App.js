import { useState } from "react";
import "./App.css";
import Forminput from "./components/Forminput";
import Formsuccess from "./components/Formsuccess";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setIsSubmitted(true); // Set submitted state to true on successful form submission
  };

  const handleReturnToForm = () => {
    setIsSubmitted(false); // Reset submitted state
  };

  return (
    <>
      <div className="App">
        {isSubmitted ? null : <Forminput onSubmitSuccess={handleFormSubmit} />}{" "}
        {/* Conditionally render EmailForm */}
        {isSubmitted && <Formsuccess onReturnToForm={handleReturnToForm} />}
      </div>
      <div className="flex justify-center  text-white">
        Challenge by{" "}  
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by     <a href="https://github.com/bahati7/" target="_blank"> Bahati Philemon</a>.
      </div>
    </>
  );
}

export default App;
