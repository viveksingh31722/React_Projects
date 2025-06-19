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
import FeatureFlagsGlobalState from "./components/feature-flag/context";
import FeatureFlags from "./components/feature-flag";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOnclickOutsideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom";
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
      {/* <TicTacToe/> */}

      {/* Feature Flag Implementation */}
      {/* <FeatureFlagsGlobalState>
        <FeatureFlags/>
      </FeatureFlagsGlobalState> */}

      {/* useFetch - custom hook */}
      {/* <UseFetchHookTest/> */}

      {/* Use onclick outside hook test */}
      {/* <UseOnclickOutsideTest/> */}

      {/* use window resize hook */}
      {/* <UseWindowResizeTest/> */}

      {/* Scroll to top and bottom feature */}
      <ScrollToTopAndBottom/>
    </>
  );
}

export default App;
