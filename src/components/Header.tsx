import React from "react";
import { Layout, Input, Button, Badge, Typography } from "antd";
import {
  SearchOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  YoutubeFilled,
} from "@ant-design/icons";

const { Header } = Layout;
const { Link } = Typography;

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const AppHeader: React.FC<HeaderProps> = ({ searchTerm, setSearchTerm }) => {
  // Styles
  const topHeaderStyle: React.CSSProperties = {
    background: "#5b1d5b",
    padding: "8px 20px",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const mainHeaderStyle: React.CSSProperties = {
    background: "#fff",
    padding: "15px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    zIndex: 1,
  };

  const linkStyle: React.CSSProperties = {
    color: "white",
    margin: "0 15px",
    fontSize: "14px",
  };

  const socialIconStyle: React.CSSProperties = {
    color: "white",
    fontSize: "16px",
    margin: "0 8px",
  };

  const searchBoxStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "600px",
  };

  const searchInputStyle: React.CSSProperties = {
    borderRadius: "4px",
  };

  return (
    <>
      {/* Top Header - Purple bar */}
      <div style={topHeaderStyle}>
        <div>
          <Link style={linkStyle} href="#">
            FAQs
          </Link>
          <span style={{ color: "white" }}>|</span>
          <Link style={linkStyle} href="#">
            Help
          </Link>
          <span style={{ color: "white" }}>|</span>
          <Link style={linkStyle} href="#">
            Support
          </Link>
        </div>

        <div>
          <a href="#" aria-label="Facebook">
            <FacebookOutlined style={socialIconStyle} />
          </a>
          <a href="#" aria-label="Twitter">
            <TwitterOutlined style={socialIconStyle} />
          </a>
          <a href="#" aria-label="LinkedIn">
            <LinkedinOutlined style={socialIconStyle} />
          </a>
          <a href="#" aria-label="Instagram">
            <InstagramOutlined style={socialIconStyle} />
          </a>
          <a href="#" aria-label="YouTube">
            <YoutubeFilled style={socialIconStyle} />
          </a>
        </div>
      </div>

      {/* Main Header */}
      <Header style={mainHeaderStyle}>
        {/* Logo area (left) */}
        <div style={{ flex: 1 }}>{/* Logo placeholder */}</div>

        {/* Search bar (center) */}
        <div style={searchBoxStyle}>
          <Input
            placeholder="Search for products"
            prefix={<SearchOutlined />}
            style={searchInputStyle}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            size="large"
            suffix={
              <Button
                type="primary"
                icon={<SearchOutlined />}
                style={{ border: "none", background: "transparent" }}
              />
            }
          />
        </div>

        {/* Cart and Wishlist (right) */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            flex: 1,
            justifyContent: "flex-end",
          }}>
          <Badge count={0} showZero>
            <HeartOutlined style={{ fontSize: "24px", color: "#666" }} />
          </Badge>
          <Badge count={0} showZero>
            <ShoppingCartOutlined style={{ fontSize: "24px", color: "#666" }} />
          </Badge>
        </div>
      </Header>
    </>
  );
};

export default AppHeader;
