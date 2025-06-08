import React from "react";
import { Menu, Typography, Space, Dropdown } from "antd";
import type { MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Text } = Typography;

const Nav: React.FC = () => {
  const pagesItems: MenuProps["items"] = [
    { key: "page1", label: "Page 1" },
    { key: "page2", label: "Page 2" },
    { key: "page3", label: "Page 3" },
  ];

  // Navigation styles
  const navContainerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    borderBottom: "1px solid #f0f0f0",
    backgroundColor: "#fff",
  };

  const navLinkStyle: React.CSSProperties = {
    marginRight: "24px",
    fontSize: "15px",
    color: "#666",
    fontWeight: 500,
    textDecoration: "none",
  };

  const authLinksStyle: React.CSSProperties = {
    display: "flex",
    gap: "15px",
  };

  return (
    <div style={navContainerStyle}>
      <div>
        <Link to="/" style={navLinkStyle}>
          Home
        </Link>
        <Link to="/shop" style={navLinkStyle}>
          Shop
        </Link>
        <Link to="/shop-detail" style={navLinkStyle}>
          Shop Detail
        </Link>
        <Dropdown menu={{ items: pagesItems }} placement="bottom">
          <Text style={navLinkStyle}>
            <Space>
              Pages
              <DownOutlined style={{ fontSize: "12px" }} />
            </Space>
          </Text>
        </Dropdown>
        <Link to="/contact" style={navLinkStyle}>
          Contact
        </Link>
      </div>

      <div style={authLinksStyle}>
        <Link to="/login" style={navLinkStyle}>
          Login
        </Link>
        <Link to="/register" style={navLinkStyle}>
          Register
        </Link>
      </div>
    </div>
  );
};

export default Nav;
