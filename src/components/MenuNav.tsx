import React from "react";
import { ClockCircleOutlined, IeOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

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
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <Menu
      onClick={onClick}
      defaultSelectedKeys={["tomato-clock"]}
      mode="inline"
      items={items}
    />
  );
};
