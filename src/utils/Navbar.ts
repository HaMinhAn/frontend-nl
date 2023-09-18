import { NotificationOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";

const category = [
  {
    key: `xiaomi`,
    icon: React.createElement(UserOutlined),
    label: `Xiaomi`,
  },
  {
    key: `iphone`,
    icon: React.createElement(UserOutlined),
    label: `Iphone`,
  },
  {
    key: `samsum`,
    icon: React.createElement(UserOutlined),
    label: `Samsum`,
  },
  {
    key: `oppo`,
    icon: React.createElement(UserOutlined),
    label: `Oppo`,
  },
];
export const HomeElements = [
  {
    key: `home`,
    icon: React.createElement(UserOutlined),
    label: `Trang chủ`,
  },
  {
    key: `category`,
    icon: React.createElement(NotificationOutlined),
    label: `Danh mục`,
    children: category.map((res) => res),
  },
];
