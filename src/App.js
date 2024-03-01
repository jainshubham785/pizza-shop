import Header from "./Components/Header";
import Body from "./Components/Body";
import "./App.css";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <Header />
      <Body />
    </Provider>
  );
}

export default App;
