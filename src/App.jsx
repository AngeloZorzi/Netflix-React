import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CustomNavbar from "./components/Navbar";
import FilmGallery from "./components/Gallery";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <>
          <header>
            <CustomNavbar />
          </header>
          <main>
            <FilmGallery title="STARWARS SAGA" film="Star Wars" />
            <FilmGallery title="SAW SAGA" film="Saw" />
            <FilmGallery title="LORD OF THE RINGS" film="Lord Of The Rings" />
            <FilmGallery title="MARVEL MULTIVERSE" film="Marvel" />
            <FilmGallery title="ANIME" film="Anime" />
          </main>
          <Footer />
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
