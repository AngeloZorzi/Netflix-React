import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CustomNavbar from "./components/Navbar";
import FilmGallery from "./components/Gallery";
function App() {
  return (
    <>
      <header>
        <CustomNavbar />
      </header>
      <main>
        <FilmGallery title="STARWARS SAGA" film="Star Wars" />
        <FilmGallery title="SAW SAGA" film="Saw" />
        <FilmGallery title="LORD OF THE RINGS" film="Lord Of The Rings" />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
