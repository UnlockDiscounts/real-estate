import { Routes, Route } from "react-router-dom";

import About from "./Pages/About";
import Service from "./Pages/Service";
import Footer from "./components/common/Footer";
import Home from "./Pages/Home";


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/home" element={<Home />} />

        </Routes>
      </main>

      <Footer />
    </div>
  );
}


export default App;
