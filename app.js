import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <h1>React 60</h1>
      {show && <p>Hello 👋</p>}
    </div>
  );
}
