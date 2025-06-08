import "./index.css";
import Accordion from "./components/accordion";
import RandomColor from "./components/random-colors/RandomColor";
import StarRating from "./components/star-rating/Index";
import ImageSlider from "./components/image-slider";
function App() {
  return (
    <>
      {/* Accordion Component */}
      {/* <Accordion/> */}

      {/* Random Color */}
      {/* <RandomColor/> */}

      {/* Star Rating */}
      {/* <StarRating/> */}

      {/* Image Slider Component */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </>
  );
}

export default App;
