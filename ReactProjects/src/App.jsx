import "./index.css";
import Accordion from "./components/accordion";
import RandomColor from "./components/random-colors/RandomColor";
import StarRating from "./components/star-rating/Index";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import TabTest from "./components/custom-tabs/tab-test";
import ModelTest from "./components/custom-modal-popup/modal-test";
import GithubProfileFinder from "./components/github-profile-finder";
import SearchAutoComplete from "./components/search-autocomplete-with-api";
import TicTacToe from "./components/tic-tak-toe";
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
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

      {/* Load more products components */}

      {/* <LoadMoreData/> */}

      {/* Tree view component/ menu Ui component / recursive component */}

      {/* <TreeView menus={menus}/> */}

      {/* QR Code Generator */}
      {/* <QRCodeGenerator/> */}

      {/* Theme toggler */}
      {/* <LightDarkMode/> */}

      {/* Scroll Indicator */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

      {/* custom-tabs */}
      {/* <TabTest /> */}

      {/* show modal popup */}
      {/* <ModelTest/> */}

      {/* Github profile finder */}
      {/* <GithubProfileFinder/> */}

      {/* Auto completer search functionality */}
      {/* <SearchAutoComplete/> */}

      {/* Tic Tac Toe Game */}
      <TicTacToe/>
    </>
  );
}

export default App;
