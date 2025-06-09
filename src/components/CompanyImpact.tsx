import React from "react";
import { Row, Col, Typography, Card, Button } from "antd";
import { RightOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

// Theme color giống với AwardRecognition
const themeColor = "#5b1d5b";

const CompanyImpact: React.FC = () => {
  // Style cho tiêu đề giống với AwardRecognition
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
    <div style={{ margin: "40px 0" }}>
      {/* Tiêu đề căn giữa - giống AwardRecognition */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}>
        <div style={titleSectionStyle}>
          <h2 style={titleStyle}>The Nu Skin Way</h2>
        </div>
      </div>

      <Row gutter={[24, 24]}>
        <Col xs={24} md={8}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
            <Title level={4}>Nu Skin,</Title>
            <Title level={4} style={{ marginTop: 0 }}>
              Improving Lives Everyday
            </Title>
          </div>
        </Col>

        <Col xs={24} md={16}>
          <Row gutter={[24, 24]} justify="space-around">
            <Col xs={8}>
              <div style={{ textAlign: "center" , marginTop :"20px"}}>
                <Title level={2} style={{ margin: 0 }}>
                  25+
                </Title>
                <Text type="secondary">Years of Giving</Text>
              </div>
            </Col>
            <Col xs={8}>
              <div style={{ textAlign: "center", marginTop :"20px" }}>
                <Title level={2} style={{ margin: 0 }}>
                  20+
                </Title>
                <Text type="secondary">Current Social Projects</Text>
              </div>
            </Col>
            <Col xs={8}>
              <div style={{ textAlign: "center", marginTop :"20px" }}>
                <Title level={2} style={{ margin: 0 }}>
                  850M+
                </Title>
                <Text type="secondary">
                  Meals Donated through Nourish for Children
                </Text>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row gutter={[24, 24]} style={{ marginTop: "30px" }}>
        <Col xs={24} md={12}>
          <Card
            bordered={false}
            cover={
              <img
                alt="Children eating meals"
                src="https://kenh14cdn.com/2018/5/8/180403214148-school-lunch-china-exlarge-169-15233429609691981109677-15257580655231311929791.png"
                style={{ height: "300px", objectFit: "cover" }}
              />
            }
            style={{ height: "100%" }}
          />
        </Col>

        <Col xs={24} md={12}>
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}>
            <Title level={3}>Being a Force for Good</Title>
            <Paragraph>
              Some call it corporate social responsibility. We call it our
              purpose. Together we're engaged in initiatives
              worldwide—nourishing thousands of hungry children, funding
              pediatric health and wellness programs, and empowering people to
              lift themselves out of poverty. And sometimes, we're simply taking
              meaningful steps to improve our local communities. Whatever we do,
              we believe changing the world begins with a single action.
            </Paragraph>
            <Button type="link" style={{ padding: 0, fontWeight: "bold" }}>
              Explore our projects <RightOutlined />
            </Button>
          </div>
        </Col>
      </Row>

      <Row gutter={[24, 24]} style={{ marginTop: "30px" }}>
        <Col xs={24} md={12}>
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}>
            <Title level={3}>Nature + Science</Title>
            <Paragraph>
              Capturing the best in nature to bring you the best results is our
              personal mission. We combine powerful ingredients with innovative
              science and technology. The result? Multi-step products that
              deliver visible benefits. Our team of more than 75 scientists has
              spent 35 years researching aging at the genetic level. Mother
              Nature continually inspires us to push the boundaries of inquiry
              and innovation. We bottle what's best and bring it right to your
              door.
            </Paragraph>
            <Button type="link" style={{ padding: 0, fontWeight: "bold" }}>
              Discover more <RightOutlined />
            </Button>
          </div>
        </Col>

        <Col xs={24} md={12}>
          <Card
            bordered={false}
            cover={
              <img
                alt="Science and nature products"
                src="https://www.cinere.co.uk/cdn/shop/files/cinere1_cd28139a-f000-464a-9f3e-5eed17127198.jpg?v=1682349057"
                style={{ height: "300px", objectFit: "cover" }}
              />
            }
            style={{ height: "100%" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default CompanyImpact;
