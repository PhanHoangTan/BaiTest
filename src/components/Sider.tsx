import React from "react";
import { Layout, Typography, Divider, Menu } from "antd";
import type { Category } from "../models/Category";
// import { DownOutlined } from "@ant-design/icons";

const { Sider } = Layout;
const { Title, Paragraph } = Typography;
const { SubMenu } = Menu;

interface SiderProps {
  isMobile: boolean;
  categories: Category[];
}

const AppSider: React.FC<SiderProps> = ({ isMobile, categories }) => {
  const siderStyle: React.CSSProperties = {
    background: "#f5f5f5",
    padding: "20px",
    textAlign: "left",
  };

  return (
    <Sider
      width={isMobile ? "0" : "25%"}
      style={siderStyle}
      breakpoint="md"
      collapsedWidth="0"
      zeroWidthTriggerStyle={{ display: "none" }}>
      <div style={{ textAlign: "left" }}>
        <Title
          level={4}
          style={{
            backgroundColor: "#5b1d5b",
            color: "white",
            padding: "15px",
            textAlign: "left",
            margin: 0,
          }}>
          Categories
        </Title>
        <Menu
          mode="vertical"
          style={{ border: "1px solid #f0f0f0", textAlign: "left" }}>
          {categories.map((category) => {
            if (category.children && category.children.length > 0) {
              return (
                <SubMenu
                  key={category.id}
                  title={
                    <span style={{ textAlign: "left" }}>{category.name}</span>
                  }>
                  {category.children.map((child) => (
                    <Menu.Item key={child.id} style={{ textAlign: "left" }}>
                      <a href={`#${child.slug}`}>{child.name}</a>
                    </Menu.Item>
                  ))}
                </SubMenu>
              );
            }
            return (
              <Menu.Item key={category.id} style={{ textAlign: "left" }}>
                <a href={`#${category.slug}`}>{category.name}</a>
              </Menu.Item>
            );
          })}
        </Menu>
      </div>

      <Divider />

      <div style={{ textAlign: "left" }}>
        <Title level={4}>Thông tin hữu ích</Title>
        <Paragraph style={{ textAlign: "left" }}>
          Chúng tôi cung cấp nhiều sản phẩm chất lượng cao với giá cả phải
          chăng. Hãy khám phá các danh mục để tìm kiếm những sản phẩm phù hợp
          với nhu cầu của bạn.
        </Paragraph>
      </div>
    </Sider>
  );
};

export default AppSider;
