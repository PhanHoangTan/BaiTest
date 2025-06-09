import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import { useCart } from "../context/CartContext";

// Import các components con
import AppHeader from "./Header";
import AppSider from "./Sider";
import ContentSection from "./ContentSection";
import AppFooter from "./Footer";
import PopularProducts from "./PopularProducts";
import PromoBanner from "./PromoBanner";
import AwardRecognition from "./AwardRecognition";
import CompanyImpact from "./CompanyImpact";
import NewsSection from "./NewsSection";
import { categories } from "../models/Category";

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
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

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <AppHeader />
      <Layout>
        <AppSider isMobile={isMobile} categories={categories} />
        <ContentSection
          isMobile={isMobile}
          featuredItems={featuredItems}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          cartCount={cartCount}
        />
      </Layout>
      {/* Thêm phần Most Popular Products */}
      <PopularProducts />
      {/* Thêm phần Promo Banner */}
      <div style={{ padding: "0 20px" }}>
        <PromoBanner />
      </div>
      {/* Thêm phần Award And Recognition */}
      <div style={{ padding: "0 20px" }}>
        <AwardRecognition />
      </div>
      {/* Thêm phần The Nu Skin Way */}
      <div style={{ padding: "0 20px" }}>
        <CompanyImpact />
      </div>
      {/* Thêm phần Nu Skin In The News */}
      <div style={{ padding: "0 20px" }}>
        <NewsSection />
      </div>
      <AppFooter />
    </Layout>
  );
};

export default Home;
