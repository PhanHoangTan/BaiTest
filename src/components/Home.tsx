import React, { useState, useEffect } from "react";
import { Layout } from "antd";

// Import các components con
import AppHeader from "./Header";
import AppSider from "./Sider";
import ContentSection from "./ContentSection";
import AppFooter from "./Footer";

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

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

  // Dữ liệu mẫu cho phần nội dung
  const featuredItems = [
    {
      id: 1,
      title: "Sản phẩm 1",
      description: "Mô tả sản phẩm 1",
      image: "https://picsum.photos/200/300?random=1",
    },
    {
      id: 2,
      title: "Sản phẩm 2",
      description: "Mô tả sản phẩm 2",
      image: "https://picsum.photos/200/300?random=2",
    },
    {
      id: 3,
      title: "Sản phẩm 3",
      description: "Mô tả sản phẩm 3",
      image: "https://picsum.photos/200/300?random=3",
    },
  ];

  const categories = [
    "Danh mục 1",
    "Danh mục 2",
    "Danh mục 3",
    "Danh mục 4",
    "Danh mục 5",
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <AppHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Layout>
        <AppSider isMobile={isMobile} categories={categories} />

        <ContentSection isMobile={isMobile} featuredItems={featuredItems} />
      </Layout>

      <AppFooter />
    </Layout>
  );
};

export default Home;
