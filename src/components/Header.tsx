import React from "react";
import {  Typography } from "antd";
import {
  FacebookFilled,
  TwitterOutlined,
  LinkedinFilled,
  InstagramOutlined,
  YoutubeFilled,
} from "@ant-design/icons";


const { Link } = Typography;

const AppHeader: React.FC = () => {
  // Theme color
  const themeColor = "#5b1d5b";

  // Styles
  const topHeaderStyle: React.CSSProperties = {
    background: themeColor,
    padding: "8px 20px",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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
            <FacebookFilled style={socialIconStyle} />
          </a>
          <a href="#" aria-label="Twitter">
            <TwitterOutlined style={socialIconStyle} />
          </a>
          <a href="#" aria-label="LinkedIn">
            <LinkedinFilled style={socialIconStyle} />
          </a>
          <a href="#" aria-label="Instagram">
            <InstagramOutlined style={socialIconStyle} />
          </a>
          <a href="#" aria-label="YouTube">
            <YoutubeFilled style={socialIconStyle} />
          </a>
        </div>
      </div>
    </>
  );
};

export default AppHeader;
