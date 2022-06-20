import "./App.css";
import Main from "pages/Main";
import { BrowserRouter } from "react-router-dom";
import LoadingSpinner from "components/LoadingSpinner";
import Footer from "components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
      {/* <LoadingSpinner /> */}
      <Footer />
    </div>
  );
}

export default App;
