import "./App.css";
import Header from "./Components/Header/Header";
import Test1 from "./Components/Test/Test1";
import Test2 from "./Components/Test/Test2";
import CarouselEffect from "./Components/Carousel/CarouselEffect";
import Category from "./Components/Category/Category";
import Product from "./Components/Product/Product";
function App() {
  return (
    <div className="App">
      <Header />
      <CarouselEffect />
      <Category/>
      <Product/>
    </div>
  );
}

export default App;
