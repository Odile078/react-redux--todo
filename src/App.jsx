import { Provider } from "react-redux";
import MainContent from "./components/MainContent";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <MainContent />
    </Provider>
  );
}

export default App;
