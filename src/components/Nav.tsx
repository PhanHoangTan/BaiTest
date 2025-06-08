import React from "react";
import { Typography, Space, Dropdown } from "antd";
import type { MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

const { Text } = Typography;

const Nav: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

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

  const navLinkStyle = (isActive: boolean): React.CSSProperties => ({
    marginRight: "24px",
    fontSize: "15px",
    color: isActive ? "#ff7200" : "#666",
    fontWeight: isActive ? 700 : 500,
    textDecoration: isActive ? "none" : "none",
    position: "relative",
    paddingBottom: "3px",
    borderBottom: isActive ? "2px solid #ff7200" : "none",
  });

  const authLinksStyle: React.CSSProperties = {
    display: "flex",
    gap: "15px",
  };

  const isActive = (path: string) => {
    // Check for exact matches to prevent nested path highlighting
    if (path === "/" && currentPath === "/") return true;
    if (path === "/shop" && currentPath === "/shop") return true;
    if (path === "/shop-detail" && currentPath === "/shop-detail") return true;
    if (path === "/contact" && currentPath === "/contact") return true;
    if (path === "/login" && currentPath === "/login") return true;
    if (path === "/register" && currentPath === "/register") return true;

    // For pages dropdown
    if (path.includes("/pages") && currentPath.includes("/pages")) return true;

    return false;
  };

  return (
    <div style={navContainerStyle}>
      <div>
        <Link to="/" style={navLinkStyle(isActive("/"))}>
          Home
        </Link>
        <Link to="/shop" style={navLinkStyle(isActive("/shop"))}>
          Shop
        </Link>
        <Link to="/shop-detail" style={navLinkStyle(isActive("/shop-detail"))}>
          Shop Detail
        </Link>
        <Dropdown menu={{ items: pagesItems }} placement="bottom">
          <Text style={navLinkStyle(currentPath.includes("/pages"))}>
            <Space>
              Pages
              <DownOutlined style={{ fontSize: "12px" }} />
            </Space>
          </Text>
        </Dropdown>
        <Link to="/contact" style={navLinkStyle(isActive("/contact"))}>
          Contact
        </Link>
      </div>

      <div style={authLinksStyle}>
        <Link to="/login" style={navLinkStyle(isActive("/login"))}>
          Login
        </Link>
        <Link to="/register" style={navLinkStyle(isActive("/register"))}>
          Register
        </Link>
      </div>
    </div>
  );
};

export default Nav;
