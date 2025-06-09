import React, { useEffect, useState, useRef } from "react";
import { Card, Button, Tabs, Carousel, Row, Col, message } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import productController from "../controllers/ProductController";
import type { Product } from "../models/Product";

const { TabPane } = Tabs;

// Theme color
const themeColor = "#5b1d5b";

interface PopularProductsProps {
  title?: string;
  setCartCount: (count: number | ((prev: number) => number)) => void;
}

const PopularProducts: React.FC<PopularProductsProps> = ({
  title = "Most Popular Products",
  setCartCount,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [activeTab, setActiveTab] = useState<string>("description");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const carouselRef = useRef<any>(null);

  useEffect(() => {
    // Lấy dữ liệu sản phẩm phổ biến từ controller
    const popularProducts = productController.getPopularProducts();
    console.log("Popular products:", popularProducts); // Debug dữ liệu
    setProducts(popularProducts);
  }, []);

  // Hàm xử lý khi nhấn "Add to cart"
  const handleAddToCart = (productName: string) => {
    try {
      console.log(`Adding ${productName} to cart`); // Debug
      setCartCount((prev: number) => {
        console.log("Previous cart count:", prev, "New count:", prev + 1); // Debug cart count
        return prev + 1;
      });
      message.success(`${productName} added to cart successfully!`, 3); // Thông báo 3 giây
    } catch (error) {
      console.error("Error in handleAddToCart:", error);
      message.error("Failed to add product to cart", 3);
    }
  };

  // Hàm kiểm tra message.success
  const testMessage = () => {
    console.log("Testing message.success");
    message.success("Test message displayed!", 3);
  };

  // Style cho tiêu đề
  const titleSectionStyle: React.CSSProperties = {
    textAlign: "center",
    padding: "20px 0",
    marginBottom: "20px",
    position: "relative",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: themeColor,
    padding: "10px 30px",
    display: "inline-block",
    borderRadius: "30px",
    margin: "0 auto",
  };

  // Style cho tab
  const tabsStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "30px",
  };

  // Style cho sản phẩm
  const productCardStyle: React.CSSProperties = {
    border: "1px solid #eee",
    borderRadius: "4px",
    overflow: "hidden",
    marginBottom: "20px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    transition: "all 0.3s ease",
    maxWidth: "95%",
    margin: "0 auto",
  };

  const productImageStyle: React.CSSProperties = {
    width: "100%",
    height: "300px",
    objectFit: "contain",
    background: "#fff",
    padding: "10px",
  };

  const brandStyle: React.CSSProperties = {
    fontSize: "12px",
    color: "#999",
    textTransform: "uppercase",
    marginBottom: "5px",
    textAlign: "center",
  };

  const productNameStyle: React.CSSProperties = {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "10px",
    textAlign: "center",
  };

  const priceContainerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "15px",
  };

  const currentPriceStyle: React.CSSProperties = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#E8AD00",
    marginRight: "10px",
  };

  const originalPriceStyle: React.CSSProperties = {
    fontSize: "14px",
    textDecoration: "line-through",
    color: "#999",
  };

  const saleTagStyle: React.CSSProperties = {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "#65DB30",
    color: "#fff",
    padding: "3px 8px",
    fontSize: "12px",
    fontWeight: "bold",
    borderRadius: "4px",
  };

  const addToCartStyle: React.CSSProperties = {
    backgroundColor: themeColor,
    color: "white",
    border: "none",
    borderRadius: "0",
    width: "100%",
    marginTop: "auto",
    height: "40px",
    marginBottom: "30px",
  };

  const carouselContainerStyle: React.CSSProperties = {
    position: "relative",
    padding: "0 40px",
    marginBottom: "40px",
  };

  const carouselArrowStyle: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#fff",
    borderRadius: "50%",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
    zIndex: 2,
    cursor: "pointer",
  };

  const circleRatingStyle: React.CSSProperties = {
    position: "absolute",
    top: "10px",
    left: "10px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    border: "2px solid #65DB30",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  };

  // Style cho phần bên trái
  const leftSectionStyle: React.CSSProperties = {
    position: "relative",
    height: "450px",
    backgroundColor: "#f5f5f5",
    borderRadius: "4px",
    padding: "40px 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: "20px",
  };

  const leftHeadingStyle: React.CSSProperties = {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "15px",
    lineHeight: "1.2",
  };

  const leftSubheadingStyle: React.CSSProperties = {
    fontSize: "16px",
    color: "#666",
    marginBottom: "10px",
  };

  const greenLineStyle: React.CSSProperties = {
    position: "absolute",
    height: "4px",
    background: "#00BFA6",
    borderRadius: "10px",
    transform: "rotate(-15deg)",
  };

  // Style cho dots của carousel
  const carouselDotStyle = {
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    backgroundColor: "#000000",
    border: "2px solid #000000",
  };

  const carouselActiveDotStyle = {
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    backgroundColor: "#000000",
    border: "2px solid #000000",
  };

  const carouselSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    dotStyle: carouselDotStyle,
    dotsClass: "slick-dots slick-dots-black",
    activeDotStyle: carouselActiveDotStyle,
  };

  return (
    <div className="popular-products" style={{ padding: "20px" }}>
      {/* CSS nội tuyến để tùy chỉnh dots và thông báo */}
      <style>
        {`
          /* CSS tùy chỉnh cho dots của carousel */
          .slick-dots-black {
            position: absolute;
            bottom: -35px !important;
            display: block !important;
            width: 100%;
            padding: 0;
            margin: 0;
            list-style: none;
            text-align: center;
            z-index: 10;
          }
          .slick-dots-black li {
            position: relative;
            display: inline-block;
            width: 20px;
            height: 20px;
            margin: 0 10px !important;
            padding: 0;
            cursor: pointer;
          }
          .slick-dots-black li button {
            font-size: 0;
            line-height: 0;
            display: block;
            width: 15px !important;
            height: 15px !important;
            padding: 0 !important;
            cursor: pointer;
            color: transparent;
            border: 0;
            outline: none;
            background-color: #000 !important;
            border: 2px solid #000 !important;
            border-radius: 50%;
            opacity: 0.7 !important;
            box-shadow: 0 0 5px rgba(0,0,0,0.5) !important;
          }
          .slick-dots-black li.slick-active button {
            background-color: #000 !important;
            opacity: 1 !important;
            width: 15px !important;
            height: 15px !important;
            box-shadow: 0 0 8px rgba(0,0,0,0.8) !important;
          }
          .slick-dots-black li button:before {
            потол: '' !important;
            display: none !important;
          }
          
          /* Đảm bảo dots không bị che */
          .slick-slider {
            margin-bottom: 50px !important;
          }

          /* Đảm bảo thông báo Ant Design hiển thị */
          .ant-message {
            z-index: 10000 !important;
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            width: auto;
            max-width: 90%;
          }
          .ant-message-notice-content {
            padding: 10px 16px !important;
            border-radius: 4px !important;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
          }
        `}
      </style>

      {/* Nút kiểm tra message.success */}
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <Button type="primary" onClick={testMessage}>
          Test Message
        </Button>
      </div>

      {/* Tiêu đề và View All */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}>
        <div style={{ flex: 1 }}></div>
        <div style={{ flex: 3, ...titleSectionStyle }}>
          <h2 style={titleStyle}>{title}</h2>
        </div>
        <div style={{ flex: 1, textAlign: "right" }}>
          <a href="/products" style={{ color: themeColor, fontWeight: "bold" }}>
            View All
          </a>
        </div>
      </div>

      {/* Tabs */}
      <div style={tabsStyle}>
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          className="custom-tabs">
          <TabPane tab="DESCRIPTION" key="description" />
          <TabPane tab="SPECIFICATIONS" key="specifications" />
        </Tabs>
      </div>

      {/* Layout chính với phần bên trái và carousel */}
      <Row gutter={16}>
        {/* Phần bên trái */}
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <div style={leftSectionStyle}>
            {/* Các đường kẻ xanh */}
            <div
              style={{
                ...greenLineStyle,
                width: "100px",
                top: "80px",
                right: "30px",
              }}></div>
            <div
              style={{
                ...greenLineStyle,
                width: "120px",
                top: "140px",
                right: "40px",
              }}></div>
            <div
              style={{
                ...greenLineStyle,
                width: "140px",
                top: "200px",
                right: "20px",
              }}></div>
            <div
              style={{
                ...greenLineStyle,
                width: "160px",
                top: "260px",
                right: "30px",
              }}></div>
            <div
              style={{
                ...greenLineStyle,
                width: "130px",
                top: "350px",
                left: "40px",
                opacity: 0.3,
              }}></div>
            <div
              style={{
                ...greenLineStyle,
                width: "80px",
                top: "380px",
                left: "20px",
                opacity: 0.2,
              }}></div>

            {/* Nội dung */}
            <div style={{ position: "relative", zIndex: 2 }}>
              <h3 style={leftHeadingStyle}>
                Find out what everyone's talking about
              </h3>
              <p style={leftSubheadingStyle}>Browse our best</p>
            </div>
          </div>
        </Col>

        {/* Carousel sản phẩm */}
        <Col xs={24} sm={24} md={18} lg={18} xl={18}>
          <div style={carouselContainerStyle}>
            {/* Nút điều hướng trái */}
            <div
              style={{ ...carouselArrowStyle, left: 0 }}
              onClick={() => carouselRef.current?.prev()}>
              <LeftOutlined />
            </div>

            {/* Sử dụng Carousel với reference */}
            <Carousel
              ref={carouselRef}
              {...carouselSettings}
              style={{ marginBottom: "50px" }}>
              {products.map((product) => (
                <div key={product.id} style={{ padding: "0 10px" }}>
                  <Card bodyStyle={{ padding: 0 }} style={productCardStyle}>
                    <div style={{ position: "relative" }}>
                      <img
                        alt={product.name}
                        src={product.imageUrl}
                        style={productImageStyle}
                      />
                      {product.isOnSale && <div style={saleTagStyle}>SALE</div>}
                      <div style={circleRatingStyle}>
                        <div
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            background: "#65DB30",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}></div>
                      </div>
                    </div>
                    <div
                      style={{
                        textAlign: "center",
                        padding: "10px 0",
                        backgroundColor: "#f9f9f9",
                      }}>
                      <div style={brandStyle}>{product.brand}</div>
                      <div style={productNameStyle}>{product.name}</div>
                      <div style={priceContainerStyle}>
                        <div style={currentPriceStyle}>
                          ${product.price.toFixed(2)}
                        </div>
                        <div style={originalPriceStyle}>
                          ${product.originalPrice.toFixed(2)}
                        </div>
                      </div>
                    </div>
                    <Button
                      style={addToCartStyle}
                      type="primary"
                      onClick={() => handleAddToCart(product.name)}>
                      Add to cart
                    </Button>
                  </Card>
                </div>
              ))}
            </Carousel>

            {/* Nút điều hướng phải */}
            <div
              style={{ ...carouselArrowStyle, right: 0 }}
              onClick={() => carouselRef.current?.next()}>
              <RightOutlined />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PopularProducts;
