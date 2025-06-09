import React from "react";
import { Row, Col, Button } from "antd";

const PromoBanner: React.FC = () => {
  // Theme color - màu tím đậm
  const themeColor = "#5b1d5b";

  // Màu nền
  const bgColor = "#f2f1ed";

  const containerStyle: React.CSSProperties = {
    backgroundColor: bgColor,
    padding: "30px",
    margin: "20px 0 40px 0",
    position: "relative",
    overflow: "hidden",
    borderRadius: "4px",
  };

  const imageContainerStyle: React.CSSProperties = {
    padding: 0,
    height: "490px",
    overflow: "hidden",
    position: "relative",
  };

  const imageStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const contentContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "60px 40px",
    height: "100%",
  };

  const brandTextStyle: React.CSSProperties = {
    color: "#e5534b",
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "10px",
    letterSpacing: "1px",
  };

  const productNameStyle: React.CSSProperties = {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "15px",
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: "18px",
    color: "#666",
    marginBottom: "30px",
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: themeColor,
    borderColor: themeColor,
    color: "white",
    fontWeight: "bold",
    height: "44px",
    padding: "0 30px",
    fontSize: "16px",
    borderRadius: "0",
  };

  const saleTagStyle: React.CSSProperties = {
    position: "absolute",
    top: "30px",
    right: "0",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: themeColor,
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
    fontWeight: "bold",
    transform: "translate(-50%, 0)",
  };

  const saleTextStyle: React.CSSProperties = {
    fontSize: "14px",
    marginBottom: "0",
  };

  const salePriceStyle: React.CSSProperties = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} style={imageContainerStyle}>
          <img
            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNraW5jYXJlJTIwZGV2aWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
            alt="ageLOC LumiSpa iO"
            style={imageStyle}
          />
          <div style={saleTagStyle}>
            <p style={saleTextStyle}>Sale Of</p>
            <p style={salePriceStyle}>$29.99</p>
          </div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          style={{ backgroundColor: bgColor, height: "490px" }}>
          <div style={contentContainerStyle}>
            <div style={brandTextStyle}>AGELOC® LUMISPA® IO</div>
            <h2 style={productNameStyle}>ageLOC® LumiSpa® iO</h2>
            <p style={descriptionStyle}>Elevate your skincare routine</p>
            <div>
              <Button type="primary" style={buttonStyle}>
                SHOP NOW
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PromoBanner;
