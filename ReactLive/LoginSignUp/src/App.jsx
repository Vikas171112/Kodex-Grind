import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <>
      {isRegistered ? (
        <Login setIsRegistered={setIsRegistered} />
      ) : (
        <Register setIsRegistered={setIsRegistered} />
      )}
    </>
  );
}

export default App;
