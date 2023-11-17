import Navbar from "./components/Navbar";
import {Welcome} from "./components/Welcome";
import Offerings from "./components/Offerings";
import About from "./components/About";
import ContactUs from "./components/ContactUs"
function App() {
  return (
    <>
    <Navbar/>
   <Welcome/>
    <Offerings/>
    <About/>
    <ContactUs/>
    </>
  );
}

export default App;
