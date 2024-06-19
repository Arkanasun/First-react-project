import logo from "./logo.svg";
import "./App.css";
import CollapsibleExample from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Central from "./components/Central/Central";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Header className="header"></Header>
      <Central></Central>
    <CollapsibleExample className="Sidebar"></CollapsibleExample>
    </div>
  );
}

export default App;
