import "./App.css";
import Router from "pages/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      {/* <ReactQueryDevtools /> */}
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
