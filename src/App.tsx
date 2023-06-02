import "./App.css";
import BigImage from "./components/BigImage";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Thumbnails from "./components/Thumbnails";
import { GalleryProvider } from "./context/GalleryProvider";
import "./index.css";

function App() {
  return (
    <Container>
      <GalleryProvider>
        <BigImage />
        <Thumbnails />
        <Footer />
      </GalleryProvider>
    </Container>
  );
}

export default App;
