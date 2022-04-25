import logo from "./logo.svg";
import "./App.css";
import Articles from "./components/Articles";
import User from "./components/User";

function App() {
  return (
    <div className="">
      <header>
        <h1>React Skeleton</h1>
      </header>
      <div className="content">
        <Articles />
        <User />
      </div>
    </div>
  );
}

export default App;
