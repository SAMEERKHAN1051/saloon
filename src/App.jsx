import About from "./page/About";
import Contact from "./page/Contact";
import Blog from "./page/Blog";
import Find from "./page/Find";
import Service from "./page/Service";
import Home from "./page/Home";
import SalonLayout from "./page/SalonLayout";
import './Main.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SalonLayout/>}>
          <Route index element={<Home />} />
          <Route path="find" element={<Find />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
