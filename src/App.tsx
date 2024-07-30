import "./App.css";
import { Layout } from "antd";
import { MenuNav } from "./components/MenuNav.tsx";
import { TomatoClock } from "./components/TomatoClock.tsx";
const { Sider, Content } = Layout;

function App() {
  return (
    <>
      <Layout style={{ height: "100%" }}>
        <Sider theme="light" collapsible>
          <MenuNav />
        </Sider>
        <Layout>
          <Content style={{ padding: "16px" }}>
            <TomatoClock />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
