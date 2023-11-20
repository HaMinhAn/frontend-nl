import {
  BookOutlined,
  FileFilled,
  NotificationOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";
import React from "react";
import { Link, useHistory } from "react-router-dom";

const category = [
  {
    key: 1,
    icon: React.createElement(UserOutlined),
    label: "Xiaomi",
  },
  {
    key: 2,
    icon: React.createElement(UserOutlined),
    label: "Iphone",
  },
  {
    key: 3,
    icon: React.createElement(UserOutlined),
    label: "SamSung",
  },
  {
    key: 4,
    icon: React.createElement(UserOutlined),
    label: "Oppo",
  },
];
export const HomeElements: MenuProps["items"] = [
  {
    key: 0,
    icon: React.createElement(UserOutlined),
    label: "Trang chủ",
  },
  {
    key: 0,
    icon: React.createElement(NotificationOutlined),
    label: `Danh mục`,
    children: category.map((res) => res),
  },
];

export const AdminElements: MenuProps["items"] = [
  {
    key: "phone",
    icon: <BookOutlined />,
    label: "Quản lý điện thoại",
  },
  {
    key: "order",
    icon: <FileFilled />,
    label: "Quản lý giao dịch",
  },
];

export const AdminItems = (name: string) => {
  const history = useHistory();
  const item: MenuProps["items"] = [
    {
      key: "hi",
      label: `Hi, ${name}`,
      children:
        name === "admin"
          ? [
              {
                key: "infor",
                icon: <UserOutlined />,
                label: `Đăng xuất`,
                onClick: () => {
                  localStorage.clear();
                  window.location.href = "/login";
                },
              },
            ]
          : [
              {
                key: "infor",
                icon: <UserOutlined />,
                label: `Thông tin cá nhân`,
              },
              {
                key: "orderDetail",
                icon: <ShoppingCartOutlined />,
                label: `Đơn hàng của tôi`,
              },
              {
                key: "logout",
                icon: <UserOutlined />,
                label: `Đăng xuất`,
                onClick: () => {
                  localStorage.clear();
                  window.location.href = "/login";
                },
              },
              {
                key: "logout",
                icon: <UserOutlined />,
                label: `Giỏ hàng`,
                onClick: () => {
                  history.push("/cart");
                },
              },
            ],
    },
  ];
  return item;
};
