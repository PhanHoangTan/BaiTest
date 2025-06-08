import React from "react";
import { Layout, Typography, Button } from "antd";
import {
  UserOutlined,
  ShoppingCartOutlined,
  BellOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;
const { Title } = Typography;

const AppFooter: React.FC = () => {
  const footerStyle: React.CSSProperties = {
    textAlign: "center",
    background: "#001529",
    color: "#fff",
    padding: "15px",
  };

  return (
    <Footer style={footerStyle}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "0 auto",
        }}>
        <div>
          <Title level={5} style={{ color: "#fff" }}>
            Thông tin liên hệ
          </Title>
          <p>Email: info@mvcshop.com</p>
          <p>Điện thoại: 0123456789</p>
          <p>Địa chỉ: 123 Đường ABC, Quận XYZ, TP. HCM</p>
        </div>
        <div>
          <Title level={5} style={{ color: "#fff" }}>
            Chính sách
          </Title>
          <p>
            <a href="#" style={{ color: "#fff" }}>
              Chính sách bảo mật
            </a>
          </p>
          <p>
            <a href="#" style={{ color: "#fff" }}>
              Điều khoản sử dụng
            </a>
          </p>
          <p>
            <a href="#" style={{ color: "#fff" }}>
              Chính sách đổi trả
            </a>
          </p>
        </div>
        <div>
          <Title level={5} style={{ color: "#fff" }}>
            Theo dõi chúng tôi
          </Title>
          <div style={{ display: "flex", gap: "10px" }}>
            <Button type="primary" shape="circle" icon={<UserOutlined />} />
            <Button
              type="primary"
              shape="circle"
              icon={<ShoppingCartOutlined />}
            />
            <Button type="primary" shape="circle" icon={<BellOutlined />} />
          </div>
        </div>
      </div>
      <p style={{ marginTop: "20px" }}>
        © 2023 MVC Shop. Tất cả quyền được bảo lưu.
      </p>
    </Footer>
  );
};

export default AppFooter;
