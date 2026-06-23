import { Image, Space, Typography, Badge } from "antd";
import { MailOutlined, BellFilled } from "@ant-design/icons";

export default function Header() {
  return (
    <div className="Header">
      <Image
        width={50}
        src="https://avatars.githubusercontent.com/u/6500430?v=4"
      />
      <Typography.Title>Daily Expense & Income Diary</Typography.Title>
      <Space>
        <Badge count={15} dot>
          <MailOutlined style={{ fontSize: 24 }} />
        </Badge>
        <Badge count={5}>
          <BellFilled style={{ fontSize: 24 }} />
        </Badge>
      </Space>
    </div>
  );
}
