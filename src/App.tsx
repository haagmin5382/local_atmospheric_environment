import "./App.css";
import Main from "pages/Main";
import { BrowserRouter } from "react-router-dom";
import Footer from "components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </>
  );
}

export default App;
