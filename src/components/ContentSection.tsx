import React from "react";
import {
  Layout,
  Typography,
  Card,
  List,
  Avatar,
  Divider,
  Button,
  Input,
  Badge,
} from "antd";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  HeartOutlined,
} from "@ant-design/icons";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

// Theme color
const themeColor = "#5b1d5b";

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
}

const ContentSection: React.FC<ContentProps> = ({
  isMobile,
  featuredItems,
  searchTerm,
  setSearchTerm,
}) => {
  const contentStyle: React.CSSProperties = {
    padding: "20px",
    minHeight: "calc(100vh - 134px)",
    background: "#fff",
  };

  // Styles for search section
  const searchSectionStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 0",
    marginBottom: "20px",
    borderBottom: "1px solid #eee",
  };

  const searchBoxStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "600px",
  };

  const searchInputStyle: React.CSSProperties = {
    borderRadius: "4px",
    borderColor: themeColor,
  };

  const iconStyle: React.CSSProperties = {
    color: themeColor,
    fontSize: "18px",
  };

  const actionIconStyle: React.CSSProperties = {
    fontSize: "24px",
    color: themeColor,
  };

  return (
    <Content style={contentStyle}>
      {/* Search section */}
      <div style={searchSectionStyle}>
        {/* Search bar */}
        <div style={searchBoxStyle}>
          <Input
            placeholder="Search for products"
            style={searchInputStyle}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            size="large"
            suffix={
              <Button
                type="text"
                icon={<SearchOutlined style={iconStyle} />}
                style={{ border: "none" }}
              />
            }
          />
        </div>

        {/* Cart and Wishlist */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            flex: 0,
          }}>
          <Badge count={0} showZero color={themeColor}>
            <HeartOutlined style={actionIconStyle} />
          </Badge>
          <Badge count={0} showZero color={themeColor}>
            <ShoppingCartOutlined style={actionIconStyle} />
          </Badge>
        </div>
      </div>

      <Title level={2}>Sản phẩm nổi bật</Title>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
          gap: "20px",
        }}>
        {featuredItems.map((item) => (
          <Card
            key={item.id}
            hoverable
            cover={<img alt={item.title} src={item.image} />}>
            <Card.Meta title={item.title} description={item.description} />
            <Button type="primary" style={{ marginTop: "15px" }}>
              Xem chi tiết
            </Button>
          </Card>
        ))}
      </div>

      <Divider />

      <Title level={2}>Chào mừng đến với MVC Shop</Title>
      <Paragraph>
        Chúng tôi là nơi cung cấp các sản phẩm chất lượng cao với dịch vụ khách
        hàng xuất sắc. Với nhiều năm kinh nghiệm trong ngành, chúng tôi cam kết
        mang đến cho khách hàng những trải nghiệm mua sắm tốt nhất.
      </Paragraph>

      <div style={{ marginTop: "30px" }}>
        <Title level={3}>Tại sao chọn chúng tôi?</Title>
        <List
          itemLayout="horizontal"
          dataSource={[
            {
              title: "Sản phẩm chất lượng cao",
              description: "Chúng tôi chỉ cung cấp những sản phẩm tốt nhất",
            },
            {
              title: "Giá cả cạnh tranh",
              description:
                "Giá tốt nhất trên thị trường cho các sản phẩm chất lượng",
            },
            {
              title: "Giao hàng nhanh chóng",
              description: "Đảm bảo giao hàng đúng hẹn và an toàn",
            },
          ]}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    style={{ backgroundColor: "#1890ff" }}
                    icon={<ShoppingCartOutlined />}
                  />
                }
                title={item.title}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </div>
    </Content>
  );
};

export default ContentSection;
