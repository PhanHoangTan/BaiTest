import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";

// Theme color giống với PopularProducts
const themeColor = "#5b1d5b";

const AwardRecognition: React.FC = () => {
  const [bgColor, setBgColor] = useState("#edeef0");

  // Hiệu ứng chuyển đổi màu nền
  useEffect(() => {
    const interval = setInterval(() => {
      setBgColor((prev) => (prev === "#edeef0" ? "#d9d9d7" : "#edeef0"));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const awards = [
    {
      id: 1,
      name: "ageLOC® LumiSpa® iO",
      year: "2023 Best",
      description: "Cleansing Device Award Winner",
      organization: "NewBeauty Awards",
      image:
        "https://www.nuskin.com/content/corpcom/en_US/newsroom/news1/Nu-Skin-Awards/_jcr_content/bodyContent/textimage_664569546/image.img.png/1968d922889-cache.png",
      badgeImage:
        "https://www.nuskin.com/content/corpcom/en_US/newsroom/news1/Nu-Skin-Awards/_jcr_content/bodyContent/textimage_664569546/image.img.png/1968d922889-cache.png",
    },
    {
      id: 2,
      name: "Epoch Baobab Body Butter",
      year: "2023",
      description: "Body Butter Silver Winner",
      organization: "2023 Beauty Bible Awards",
      image:
        "https://www.punchline-gloucester.com/images/user/54604_1-beauty-bible-gold.jpeg",
      badgeImage:
        "https://www.punchline-gloucester.com/images/user/54604_1-beauty-bible-gold.jpeg",
    },
    {
      id: 3,
      name: "Nu Skin Enterprises",
      year: "2022 Best USA",
      description: "Beauty Brand",
      organization: "Global Makeup Awards",
      image:
        "https://www.nuskin.com/content/dam/HK/2023/Award/Global-Makeup-Award-Gold.jpg",
      badgeImage:
        "https://www.nuskin.com/content/dam/HK/2023/Award/Global-Makeup-Award-Gold.jpg",
    },
    {
      id: 4,
      name: "Epoch® Yin & Yang Mask",
      year: "2022 Most",
      description: "Sustainable Packaging: Silver Winner",
      organization: "Global Green Beauty Awards",
      image:
        "https://static.wixstatic.com/media/84a118_ff4aaf8b849c4cedb617b67b86700402~mv2.png/v1/fill/w_440,h_312,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/84a118_ff4aaf8b849c4cedb617b67b86700402~mv2.png",
      badgeImage:
        "https://static.wixstatic.com/media/84a118_ff4aaf8b849c4cedb617b67b86700402~mv2.png/v1/fill/w_440,h_312,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/84a118_ff4aaf8b849c4cedb617b67b86700402~mv2.png",
    },
    {
      id: 5,
      name: "ageLOC® Facial Spa",
      year: "2021 Readers'",
      description: "Choice Beauty Award Winner",
      organization: "InStyle",
      image:
        "https://www.nuskin.com/content/corpcom/en_US/newsroom/news1/Nu-Skin-Awards/_jcr_content/bodyContent/textimage_1956104319/image.img.png/1968d922889-cache.png",
      badgeImage:
        "https://www.nuskin.com/content/corpcom/en_US/newsroom/news1/Nu-Skin-Awards/_jcr_content/bodyContent/textimage_1956104319/image.img.png/1968d922889-cache.png",
    },
    {
      id: 6,
      name: "Nutricentials® Eye Love Bright Eyes",
      year: "2022 Pure Beauty",
      description: "Award Finalist",
      organization: "Pure Beauty Global Awards",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR345g2-ydhy-RVwk6EikDdNjGOVYBpuraK3Q&s",
      badgeImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR345g2-ydhy-RVwk6EikDdNjGOVYBpuraK3Q&s",
    },
  ];

  // Style cho tiêu đề giống với PopularProducts
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

  return (
    <div className="award-recognition-container my-8">
      {/* Tiêu đề căn giữa */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}>
        <div style={titleSectionStyle}>
          <h2 style={titleStyle}>Award And Recognition</h2>
        </div>
      </div>

      {/* Phần giới thiệu - căn giữa */}
      <div
        style={{
          backgroundColor: bgColor,
          transition: "background-color 1s ease",
          marginBottom: "2rem",
        }}>
        <div className="container mx-auto">
          <div className="flex items-center justify-center">
            <div className="w-1/2 p-4">
              <img
                src="https://cdn.tgdd.vn/Files/2021/03/03/1332159/cham-soc-da-tai-nha-voi-6-thiet-bi-lam-dep-danh-cho-cac-co-nang-me-cong-nghe-202103031338571627.jpg"
                alt="Beauty devices"
                className="w-full mx-auto"
              />
            </div>
            <div className="w-1/2 p-4 text-center">
              <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-2">
                WORLD'S #1 COMPANY FOR
              </h2>
              <h1 className="text-2xl md:text-4xl font-bold text-gray-700 mb-2">
                Beauty & Wellness Device Systems
              </h1>
              <p className="text-gray-500 text-sm">Source: Euromonitor</p>
            </div>
          </div>
        </div>
      </div>

      {/* Danh sách giải thưởng - căn giữa, thụt vào 50px */}
      <div
        className="award-list container mx-auto"
        style={{ paddingLeft: "50px", paddingRight: "50px" }}>
        <Row gutter={[24, 40]} justify="center">
          {awards.map((award) => (
            <Col xs={12} sm={8} md={4} key={award.id}>
              <div className="award-item text-center">
                {/* Badge hình tròn ở trên */}
                <div
                  className="badge-container flex justify-center mb-4"
                  style={{ background: "transparent" }}>
                  <div className="w-[120px] h-[120px] relative mb-2">
                    <img
                      src={award.badgeImage}
                      alt={`${award.name} badge`}
                      className="w-full h-full object-contain"
                      style={{ background: "transparent" }}
                    />
                  </div>
                </div>

                {/* Thông tin giải thưởng */}
                <div className="award-info">
                  <h3 className="text-lg font-bold mb-1">{award.name}</h3>
                  <p className="text-gray-500 mb-1">{award.year}</p>
                  <p className="text-gray-700 mb-1">{award.description}</p>
                  <p className="text-gray-600">{award.organization}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* Indicator cho phần carousel - căn giữa */}
      <div className="carousel-indicators flex justify-center mt-10">
        {awards.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 mx-1 rounded-full ${
              i === 0 ? "bg-blue-500" : "bg-gray-300"
            }`}></div>
        ))}
      </div>
    </div>
  );
};

export default AwardRecognition;
