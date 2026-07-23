import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { RotatingC } from "./components/RotatingC";
import { Header } from "./components/Header";

function App() {
  const [showRotatingC, setShowRotatingC] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRotatingC(false);
    }, 3000); // 2.5s animation + 0.5s fade

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {showRotatingC && <RotatingC />}

      <Header />

      <Routes>
        {/* Your routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;