import React from "react";
import { Input, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

// Theme color
const themeColor = "#5b1d5b";

interface SearchSectionProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  cartCount: number;
  handleSearch: () => void;
}

const SearchSection: React.FC<SearchSectionProps> = ({
  searchTerm,
  setSearchTerm,
  cartCount,
  handleSearch,
}) => {
  // Styles for search section
  const searchSectionStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
    marginBottom: "10px",
    borderBottom: "1px solid #eee",
  };

  const searchBoxStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "600px",
  };

  const searchInputStyle: React.CSSProperties = {
    borderRadius: "4px",
    borderColor: themeColor,
  };

  const iconStyle: React.CSSProperties = {
    color: themeColor,
    fontSize: "18px",
  };

  const actionIconStyle: React.CSSProperties = {
    fontSize: "22px",
    color: themeColor,
    marginRight: "2px",
  };

  const iconBoxStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    padding: "8px 12px",
    background: "#ffffff",
    border: "1px solid #e0e0e0",
    borderRadius: "4px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
  };

  const countStyle: React.CSSProperties = {
    fontSize: "14px",
    color: "#999",
    marginLeft: "5px",
  };

  return (
    <div style={searchSectionStyle}>
      {/* Search bar */}
      <div style={searchBoxStyle}>
        <Input
          placeholder="Search for products"
          style={searchInputStyle}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          size="large"
          suffix={
            <Button
              type="text"
              icon={<FontAwesomeIcon icon={faSearch} style={iconStyle} />}
              style={{ border: "none" }}
              onClick={handleSearch}
            />
          }
        />
      </div>

      {/* Cart and Wishlist */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flex: 0,
        }}>
        <div style={iconBoxStyle}>
          <FontAwesomeIcon icon={faHeart} style={actionIconStyle} />
          <span style={countStyle}>0</span>
        </div>
        <div style={iconBoxStyle}>
          <FontAwesomeIcon icon={faCartShopping} style={actionIconStyle} />
          <span style={countStyle}>{cartCount}</span>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
