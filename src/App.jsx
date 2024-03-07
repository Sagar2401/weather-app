import { useContext } from "react";
import "./App.css";
import MenuBox from "./Section/MenuBox";
import Home from "./Section/home";
import Search from "./assets/Search";
import Menu from "./assets/menu";
import Header from "./components/Header";
import { AppContext } from "./hook/useApp";

function App() {
  const { setIsOpenMenu } = useContext(AppContext);
  return (
    <div className="App">
      <div className="Mobileview">
        <Header />
        <MenuBox />
        <div className="search-bar">
          <div
            style={{ cursor: "pointer" }}
            onClick={() => setIsOpenMenu(true)}
          >
            <Menu />
          </div>
          <Search />
        </div>
        <Home />
      </div>
    </div>
  );
}

export default App;
