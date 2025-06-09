import React from "react";
import { Layout, Button, Carousel, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import SearchSection from "./SearchSection";

const { Content } = Layout;

interface ContentProps {
  isMobile: boolean;
  featuredItems: {
    id: number;
    title: string;
    description: string;
    image: string;
  }[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  cartCount: number;
}

const ContentSection: React.FC<ContentProps> = ({
  searchTerm,
  setSearchTerm,
  cartCount,
}) => {
  const navigate = useNavigate();

  const contentStyle: React.CSSProperties = {
    minHeight: "calc(100vh - 134px)",
    background: "#fff",
  };

  // Banner styles
  const bannerStyle: React.CSSProperties = {
    position: "relative",
    height: "300px",
    overflow: "hidden",
  };

  const bannerContentStyle: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "#fff",
    zIndex: 2,
  };

  const bannerTitleStyle: React.CSSProperties = {
    fontSize: "42px",
    fontWeight: "bold",
    margin: "10px 0",
  };

  const bannerSubtitleStyle: React.CSSProperties = {
    fontSize: "18px",
    marginBottom: "20px",
  };

  const shopButtonStyle: React.CSSProperties = {
    backgroundColor: "transparent",
    color: "#000",
    borderRadius: "4px",
    padding: "8px 24px",
    fontWeight: "bold",
    border: "1px solid #ff7200",
  };

  // Collection styles
  const collectionStyle: React.CSSProperties = {
    padding: "20px",
    margin: "20px 0",
  };

  const collectionOverlayStyle: React.CSSProperties = {
    position: "relative",
    height: "200px",
    borderRadius: "4px",
    overflow: "hidden",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const collectionContentStyle: React.CSSProperties = {
    position: "absolute",
    bottom: "20px",
    left: "20px",
  };

  const collectionTextStyle: React.CSSProperties = {
    color: "#333",
    fontSize: "13px",
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const collectionTitleStyle: React.CSSProperties = {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#333",
  };

  // Handle search button click
  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/detail?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <Content style={contentStyle}>
      {/* Search section */}
      <SearchSection
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        cartCount={cartCount}
        handleSearch={handleSearch}
      />
      <Nav />

      {/* Banner Section */}
      <Carousel autoplay autoplaySpeed={3000} effect="fade">
        <div>
          <div
            style={{
              ...bannerStyle,
              backgroundImage:
                'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
            <div style={bannerContentStyle}>
              <div style={bannerSubtitleStyle}>10% OFF YOUR FIRST ORDER</div>
              <h2 style={bannerTitleStyle}>Reasonable Price</h2>
              <Button
                type="default"
                style={{
                  ...shopButtonStyle,
                  background: "#ffffff",
                  color: "#000000",
                }}>
                Shop Now
              </Button>
            </div>
          </div>
        </div>

        <div>
          <div
            style={{
              ...bannerStyle,
              backgroundImage:
                'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
            <div style={bannerContentStyle}>
              <div style={bannerSubtitleStyle}>NEW SEASON ARRIVALS</div>
              <h2 style={bannerTitleStyle}>Summer Collection</h2>
              <Button
                type="default"
                style={{
                  ...shopButtonStyle,
                  background: "#ffffff",
                  color: "#000000",
                }}>
                Shop Now
              </Button>
            </div>
          </div>
        </div>

        <div>
          <div
            style={{
              ...bannerStyle,
              backgroundImage:
                'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
            <div style={bannerContentStyle}>
              <div style={bannerSubtitleStyle}>SPECIAL OFFER</div>
              <h2 style={bannerTitleStyle}>Elegant Style</h2>
              <Button
                type="default"
                style={{
                  ...shopButtonStyle,
                  background: "#ffffff",
                  color: "#000000",
                }}>
                Shop Now
              </Button>
            </div>
          </div>
        </div>

        <div>
          <div
            style={{
              ...bannerStyle,
              backgroundImage:
                'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
            <div style={bannerContentStyle}>
              <div style={bannerSubtitleStyle}>PREMIUM QUALITY</div>
              <h2 style={bannerTitleStyle}>Designer Collection</h2>
              <Button
                type="default"
                style={{
                  ...shopButtonStyle,
                  background: "#ffffff",
                  color: "#000000",
                }}>
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </Carousel>

      {/* Collections Section */}
      <Row gutter={20} style={collectionStyle}>
        <Col xs={24} md={12}>
          <div
            style={{
              ...collectionOverlayStyle,
              backgroundImage:
                'url("https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=720")',
            }}>
            <div style={collectionContentStyle}>
              <div style={collectionTextStyle}>PREFER CUSTOMER 2025</div>
              <h3 style={collectionTitleStyle}>Winter Collection</h3>
              <Button
                type="default"
                style={{
                  ...shopButtonStyle,
                  background: "transparent !important",
                }}>
                Shop Now
              </Button>
            </div>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div
            style={{
              ...collectionOverlayStyle,
              backgroundImage:
                'url("https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=720")',
            }}>
            <div style={collectionContentStyle}>
              <div style={collectionTextStyle}>PREFER CUSTOMER 2025</div>
              <h3 style={collectionTitleStyle}>Winter Collection</h3>
              <Button
                type="default"
                style={{
                  ...shopButtonStyle,
                  background: "transparent !important",
                }}>
                Shop Now
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Content>
  );
};

export default ContentSection;
