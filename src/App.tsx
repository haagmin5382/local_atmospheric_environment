import "./App.css";
import Main from "pages/Main";
import { BrowserRouter } from "react-router-dom";
import LoadingSpinner from "components/LoadingSpinner";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
      {/* <LoadingSpinner /> */}
    </div>
  );
}

export default App;
