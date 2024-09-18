import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

// import image from "../src/assets/image/React.png";

function App() {
  return (
    <main className="body">
      <Header />
      <Content />
      <Footer color="blue" />
    </main>
  );
}

export default App;
