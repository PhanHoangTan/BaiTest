import React from "react";
import { Typography } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

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
            <FontAwesomeIcon icon={faFacebookF} style={socialIconStyle} />
          </a>
          <a href="#" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} style={socialIconStyle} />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedinIn} style={socialIconStyle} />
          </a>
          <a href="#" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} style={socialIconStyle} />
          </a>
          <a href="#" aria-label="YouTube">
            <FontAwesomeIcon icon={faYoutube} style={socialIconStyle} />
          </a>
        </div>
      </div>
    </>
  );
};

export default AppHeader;
