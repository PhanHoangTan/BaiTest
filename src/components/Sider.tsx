import React from "react";
import { Layout, Typography, List, Divider } from "antd";

const { Sider } = Layout;
const { Title, Paragraph } = Typography;

interface SiderProps {
  isMobile: boolean;
  categories: string[];
}

const AppSider: React.FC<SiderProps> = ({ isMobile, categories }) => {
  const siderStyle: React.CSSProperties = {
    background: "#f5f5f5",
    padding: "20px",
  };

  return (
    <Sider
      width={isMobile ? "0" : "25%"}
      style={siderStyle}
      breakpoint="md"
      collapsedWidth="0"
      zeroWidthTriggerStyle={{ display: "none" }}>
      <div>
        <Title level={4}>Danh mục sản phẩm</Title>
        <List
          bordered
          dataSource={categories}
          renderItem={(item) => (
            <List.Item>
              <a href="#">{item}</a>
            </List.Item>
          )}
        />
      </div>

      <Divider />

      <div>
        <Title level={4}>Thông tin hữu ích</Title>
        <Paragraph>
          Chúng tôi cung cấp nhiều sản phẩm chất lượng cao với giá cả phải
          chăng. Hãy khám phá các danh mục để tìm kiếm những sản phẩm phù hợp
          với nhu cầu của bạn.
        </Paragraph>
      </div>
    </Sider>
  );
};

export default AppSider;
