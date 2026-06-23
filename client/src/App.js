import { Space } from "antd";

import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Content from "./components/Content";

import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Space className="SideMenuAndContent">
        <SideMenu></SideMenu>
        <Content></Content>
      </Space>
      <Footer />
    </div>
  );
}

export default App;
