import Header from "./Components/Header";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={appStore}>
      <Header />
      <Body />
      <ToastContainer />
    </Provider>
  );
}

export default App;
