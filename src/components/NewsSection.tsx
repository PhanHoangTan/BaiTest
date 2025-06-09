import React, { useRef } from "react";
import { Card, Typography, Button } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const NewsSection: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      title: "New Beauty Products Editors Are Loving This December",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      title: "38 New Beauty Products Our Editors Are Loving This December",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      title: "38 New Beauty Products Our Editors Are Loving This December",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      title: "38 New Beauty Products Our Editors Are Loving This December",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollLeft +=
        direction === "right" ? scrollAmount : -scrollAmount;
    }
  };

  return (
    <div
      style={{
        margin: "40px 0",
        padding: "0 20px",
        display: "flex",
        width: "100%",
        position: "relative",
      }}>
      {/* Horizontal container (75%) */}
      <div
        style={{
          width: "75%",
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          position: "relative",
        }}>
        {/* View All link - nằm trên cùng bên phải phần 75% */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "10px",
          }}>
          <Button
            type="link"
            style={{
              fontWeight: 500,
              fontSize: "13px",
              color: "#333",
              textDecoration: "underline",
              padding: 0,
            }}>
            View All <RightOutlined style={{ fontSize: "12px" }} />
          </Button>
        </div>

        <div style={{ position: "relative" }}>
          {/* Nút điều hướng trái */}
          <Button
            icon={<LeftOutlined />}
            onClick={() => scroll("left")}
            style={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              border: "none",
              background: "rgba(255, 255, 255, 0.8)",
              color: "#666",
              padding: 0,
            }}
          />

          <div
            ref={scrollRef}
            style={{
              display: "flex",
              flexWrap: "nowrap",
              overflowX: "auto",
              gap: "20px",
              paddingBottom: "10px",
              paddingRight: "100px",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            className="hide-scrollbar">
            {newsItems.map((item) => (
              <div
                key={item.id}
                style={{
                  flex: "0 0 auto",
                  minWidth: "200px",
                  textAlign: "center",
                }}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt={`News item ${item.id}`}
                      src={item.image}
                      style={{
                        height: "200px",
                        objectFit: "cover",
                        width: "100%",
                      }}
                    />
                  }
                  bodyStyle={{ padding: "12px" }}
                  style={{
                    border: "none",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                  }}>
                  <Text style={{ fontSize: "14px", color: "#666" }}>
                    {item.title}
                  </Text>
                </Card>
              </div>
            ))}
          </div>

          {/* Nút điều hướng phải */}
          <Button
            icon={<RightOutlined />}
            onClick={() => scroll("right")}
            style={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              border: "none",
              background: "rgba(255, 255, 255, 0.8)",
              color: "#666",
              padding: 0,
            }}
          />
        </div>
      </div>

      {/* Large feature image (25%) */}
      <div
        style={{
          width: "25%",
          flex: "0 0 auto",
          position: "relative",
          height: "400px",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "8px",
          overflow: "hidden",
          marginLeft: "20px",
        }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.3)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textAlign: "center",
            padding: "10px",
          }}>
          <Title
            level={3}
            style={{ color: "white", margin: 0, fontSize: "20px" }}>
            News
          </Title>
          <Text style={{ color: "white", fontSize: "14px" }}>
            Nu Skin In The News
          </Text>
          <Button
            type="primary"
            ghost
            style={{
              marginTop: "10px",
              borderColor: "white",
              color: "white",
              fontSize: "12px",
            }}>
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;

// CSS để ẩn thanh cuộn nhưng giữ chức năng
const hideScrollbarStyles = `
  .hide-scrollbar::-webkit-scrollbar {
    display: none; /* Ẩn thanh cuộn trên Chrome, Safari, Opera */
  }
`;

// Thêm CSS vào document
const styleSheet = document.createElement("style");
styleSheet.textContent = hideScrollbarStyles;
document.head.appendChild(styleSheet);
