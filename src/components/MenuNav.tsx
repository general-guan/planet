import React from "react";
import { ClockCircleOutlined, IeOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useMenuStore, CurrentMenu } from "../store/menuStore";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "favorite-sites",
    label: "常用网站",
    icon: <IeOutlined />,
  },
  {
    key: "tomato-clock",
    label: "番茄时钟",
    icon: <ClockCircleOutlined />,
  },
];

export const MenuNav: React.FC = () => {
  const { currentMenu, setCurrentMenu } = useMenuStore((state) => state);

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrentMenu(e.key as CurrentMenu);
  };

  return (
    <Menu
      onClick={onClick}
      defaultSelectedKeys={[currentMenu]}
      mode="inline"
      items={items}
    />
  );
};
