import React from "react";
import { Layout, Input } from "antd";
import { useLocation } from "react-router-dom";
import AppHeader from "./Header";
import AppFooter from "./Footer";

const { Content } = Layout;

const Detail: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("search") || "";

  const contentStyle: React.CSSProperties = {
    minHeight: "calc(100vh - 134px)",
    background: "#fff",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const textareaStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "600px",
    height: "200px",
    borderRadius: "4px",
    borderColor: "#5b1d5b",
    resize: "none",
  };

  return (
    <Layout>
      <AppHeader />
      <Content style={contentStyle}>
        <Input.TextArea
          style={textareaStyle}
          value={searchTerm}
          readOnly
          placeholder="Search term will appear here"
        />
      </Content>
      <AppFooter />
    </Layout>
  );
};

export default Detail;
