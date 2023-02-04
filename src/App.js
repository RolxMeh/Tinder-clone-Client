import "./App.css";
import TinderCard from "./Components/Cards/TinderCards";
import Header from "./Components/Header/Header";
import SwipeButton from "./Components/SwipeButton/SwipeButton";

function App() {
  return (
    <div className="App">
      <Header />
      <TinderCard />
      <SwipeButton />
    </div>
  );
}

export default App;
