import logo from "./logo.svg";
import "./App.css";
import { VStack } from "@chakra-ui/react";
import { Header } from "./pages/Header";
import { About } from "./pages/About";
import { Nav } from "./components/Nav";
import { Work } from "./pages/Work";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function App() {
  return (
    <VStack spacing="0">
      <Nav />
      <Header />
      <About />
      <Work />
    </VStack>
  );
}

export default App;
