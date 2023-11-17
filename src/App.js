
import { About } from './components/About';
import { ContactUs } from './components/ContactUs';
import Footer from './components/Footer';
import { Navbar } from './components/Navbar';
import { Offerings } from './components/Offerings';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <Offerings />
      <About />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
