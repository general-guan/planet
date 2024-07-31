import "./App.css";
import { Layout } from "antd";
import { MenuNav } from "./components/MenuNav.tsx";
import { TomatoClock } from "./components/TomatoClock.tsx";
import { FavoriteSites } from "./components/FavoriteSites.tsx";
import { useMenuStore } from "./store/menuStore";

const { Sider, Content } = Layout;

function App() {
  const { currentMenu } = useMenuStore((state) => state);

  return (
    <>
      <Layout style={{ height: "100%" }}>
        <Sider theme="light" collapsible>
          <MenuNav />
        </Sider>
        <Layout>
          <Content style={{ padding: "16px", overflow: "auto" }}>
            {currentMenu === "favorite-sites" && <FavoriteSites />}
            {currentMenu === "tomato-clock" && <TomatoClock />}
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
