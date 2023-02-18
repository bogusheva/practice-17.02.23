import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";
import Content from "./component/Content";
import Aside from "./component/Aside";
import "./style.css";
import { pets } from "./data/catArray.js";

export default function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Content data={pets} />
        <Aside data={pets} />
      </div>
      <Footer />
    </>
  );
}
