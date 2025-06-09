import React, { useState, useEffect } from "react";
import { Layout, Input } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import AppHeader from "./Header";
import AppFooter from "./Footer";
import AppSider from "./Sider";
import Nav from "./Nav";
import SearchSection from "./SearchSection";
import { categories } from "../models/Category";

const { Content } = Layout;

const Detail: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const initialSearchTerm = searchParams.get("search") || "";

  const [searchTerm, setSearchTerm] = useState<string>(initialSearchTerm);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
  const { cartCount } = useCart(); // Use the shared cart context

  // Xử lý responsive
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const contentStyle: React.CSSProperties = {
    minHeight: "calc(100vh - 134px)",
    background: "#fff",
    padding: "0",
  };

  const textareaStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "600px",
    height: "200px",
    borderRadius: "4px",
    borderColor: "#5b1d5b",
    resize: "none",
    marginTop: "0",
  };

  // Handle search button click
  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/detail?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <AppHeader />
      <Layout>
        <AppSider isMobile={isMobile} categories={categories} />
        <Content style={contentStyle}>
          {/* Search section */}
          <SearchSection
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            cartCount={cartCount}
            handleSearch={handleSearch}
          />
          <Nav />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
            }}>
            <Input.TextArea
              style={textareaStyle}
              value={initialSearchTerm}
              readOnly
              placeholder="Search term will appear here"
            />
          </div>
        </Content>
      </Layout>
      <AppFooter />
    </Layout>
  );
};

export default Detail;
