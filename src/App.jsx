import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { RotatingC } from "./components/RotatingC";
import { Header } from "./components/Header";
import { Contact } from "./pages/Contact.jsx"
import { Facilities } from "./pages/Facilities.jsx";
import { About } from "./pages/About.jsx";
import { Home } from "./pages/Home.jsx";

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
        <Route path='/' element={<Home />}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='facilities' element={<Facilities />}/>
        <Route path='about' element={<About />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;