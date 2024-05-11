
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
   // setIsFormVisible(true); // Make form visible again
  };

  return (
    <div className="App">
    {isSubmitted ? null : <Forminput onSubmitSuccess={handleFormSubmit} />}  {/* Conditionally render EmailForm */}
      {isSubmitted && <Formsuccess onReturnToForm={handleReturnToForm}/> }
      
    </div>
  );
}

export default App;
