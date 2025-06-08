import React from "react";
import { Layout, Typography, Row, Col } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCcVisa as faCcVisaBrand,
  faCcMastercard as faCcMastercardBrand,
  faCcPaypal as faCcPaypalBrand,
  faCcAmex as faCcAmexBrand,
} from "@fortawesome/free-brands-svg-icons";

const { Footer } = Layout;
const { Title, Paragraph } = Typography;

const AppFooter: React.FC = () => {
  return (
    <Footer className="bg-[#5b1d5b] text-white p-6" style={{ color: "white" }}>
      <div className="max-w-7xl mx-auto">
        <Row gutter={[48, 24]} className="items-start pb-6">
          {/* Thông tin liên hệ */}
          <Col xs={24} sm={24} md={8} className="pl-8 ">
            <Paragraph style={{ color: "white" }} className="mb-6">
              Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum
              no sit erat lorem et magna ipsum dolore amet erat.
            </Paragraph>
            <div
              className="space-y-2.5"
              style={{ gap: "10px", display: "flex", flexDirection: "column" }}>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  style={{
                    marginRight: "6px",
                    color: "white",
                    lineHeight: "1",
                    fontSize: "16px",
                  }}
                />
                <Paragraph
                  style={{ color: "white", margin: 0, lineHeight: "1" }}
                  className="leading-none">
                  123 Street, New York, USA
                </Paragraph>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{
                    marginRight: "6px",
                    color: "white",
                    lineHeight: "1",
                    fontSize: "16px",
                  }}
                />
                <Paragraph
                  style={{ color: "white", margin: 0, lineHeight: "1" }}
                  className="leading-none">
                  info@example.com
                </Paragraph>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{
                    marginRight: "6px",
                    color: "white",
                    lineHeight: "1",
                    fontSize: "16px",
                  }}
                />
                <Paragraph
                  style={{ color: "white", margin: 0, lineHeight: "1" }}
                  className="leading-none">
                  +012 345 67890
                </Paragraph>
              </div>
            </div>
          </Col>

          {/* Quick Links - Column 1 */}
          <Col xs={24} sm={12} md={8} className="pl-8">
            <Title
              level={5}
              style={{ color: "white", textAlign: "left" }}
              className="mb-4">
              Quick Links
            </Title>
            <div
              className="space-y-2.5"
              style={{ gap: "10px", display: "flex", flexDirection: "column" }}>
              <div className="flex items-center">
                <RightOutlined style={{ color: "white" }} className="mr-4" />
                <a
                  href="/"
                  style={{ color: "white" }}
                  className="hover:text-gray-300">
                  Home
                </a>
              </div>
              <div className="flex items-center">
                <RightOutlined style={{ color: "white" }} className="mr-4" />
                <a
                  href="/shop"
                  style={{ color: "white" }}
                  className="hover:text-gray-300">
                  Our Shop
                </a>
              </div>
              <div className="flex items-center">
                <RightOutlined style={{ color: "white" }} className="mr-4" />
                <a
                  href="/detail"
                  style={{ color: "white" }}
                  className="hover:text-gray-300">
                  Shop Detail
                </a>
              </div>
              <div className="flex items-center">
                <RightOutlined style={{ color: "white" }} className="mr-4" />
                <a
                  href="/cart"
                  style={{ color: "white" }}
                  className="hover:text-gray-300">
                  Shopping Cart
                </a>
              </div>
              <div className="flex items-center">
                <RightOutlined style={{ color: "white" }} className="mr-4" />
                <a
                  href="/checkout"
                  style={{ color: "white" }}
                  className="hover:text-gray-300">
                  Checkout
                </a>
              </div>
              <div className="flex items-center">
                <RightOutlined style={{ color: "white" }} className="mr-4" />
                <a
                  href="/contact"
                  style={{ color: "white" }}
                  className="hover:text-gray-300">
                  Contact Us
                </a>
              </div>
            </div>
          </Col>

          {/* Quick Links - Column 2 */}
          <Col xs={24} sm={12} md={8} className="pl-8">
            <Title
              level={5}
              style={{ color: "white", textAlign: "left" }}
              className="mb-4">
              Quick Links
            </Title>
            <div
              className="space-y-2.5"
              style={{ gap: "10px", display: "flex", flexDirection: "column" }}>
              <div className="flex items-center">
                <RightOutlined style={{ color: "white" }} className="mr-4" />
                <a
                  href="/"
                  style={{ color: "white" }}
                  className="hover:text-gray-300">
                  Home
                </a>
              </div>
              <div className="flex items-center">
                <RightOutlined style={{ color: "white" }} className="mr-4" />
                <a
                  href="/shop"
                  style={{ color: "white" }}
                  className="hover:text-gray-300">
                  Our Shop
                </a>
              </div>
              <div className="flex items-center">
                <RightOutlined style={{ color: "white" }} className="mr-4" />
                <a
                  href="/detail"
                  style={{ color: "white" }}
                  className="hover:text-gray-300">
                  Shop Detail
                </a>
              </div>
              <div className="flex items-center">
                <RightOutlined style={{ color: "white" }} className="mr-4" />
                <a
                  href="/cart"
                  style={{ color: "white" }}
                  className="hover:text-gray-300">
                  Shopping Cart
                </a>
              </div>
              <div className="flex items-center">
                <RightOutlined style={{ color: "white" }} className="mr-4" />
                <a
                  href="/checkout"
                  style={{ color: "white" }}
                  className="hover:text-gray-300">
                  Checkout
                </a>
              </div>
              <div className="flex items-center">
                <RightOutlined style={{ color: "white" }} className="mr-4" />
                <a
                  href="/contact"
                  style={{ color: "white" }}
                  className="hover:text-gray-300">
                  Contact Us
                </a>
              </div>
            </div>
          </Col>
        </Row>

        {/* Copyright và Payment icons */}
        <div className="border-t border-gray-600 pt-4 flex justify-between items-center flex-wrap mt-0">
          <div>
            <Paragraph style={{ color: "white" }} className="m-0">
              © Your Site Name. All Rights Reserved. Designed by HTML Codex
            </Paragraph>
            <Paragraph style={{ color: "white" }} className="m-0">
              Distributed By ThemeWagon
            </Paragraph>
          </div>
          <div className="flex" style={{ gap: "6px" }}>
            <FontAwesomeIcon
              icon={faCcVisaBrand}
              size="2x"
              style={{ color: "white" }}
            />
            <FontAwesomeIcon
              icon={faCcMastercardBrand}
              size="2x"
              style={{ color: "white" }}
            />
            <FontAwesomeIcon
              icon={faCcPaypalBrand}
              size="2x"
              style={{ color: "white" }}
            />
            <FontAwesomeIcon
              icon={faCcAmexBrand}
              size="2x"
              style={{ color: "white" }}
            />
            <FontAwesomeIcon
              icon={faCcVisaBrand}
              size="2x"
              style={{ color: "white" }}
            />
            <FontAwesomeIcon
              icon={faCcMastercardBrand}
              size="2x"
              style={{ color: "white" }}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default AppFooter;
