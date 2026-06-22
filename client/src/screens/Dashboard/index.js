import { Typography, Space, Card, Statistic } from "antd";
import {
  DollarOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";

export default function Dashboard() {
  function DashboardCard({ title, value, icon }) {
    return (
      <Card>
        <Space direction="horizontal">
          {icon}
          <Statistic title={title} value={value} />
        </Space>
      </Card>
    );
  }

  return (
    <div>
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction="horizontal">
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: "red",
                fontSize: 32,
                backgroundColor: "rgba(255, 0, 0, 0.25)",
                borderRadius: 32,
                padding: 8,
              }}
            />
          }
          title="Expense"
          value={3780}
        />
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: "green",
                fontSize: 32,
                backgroundColor: "rgba(0, 255, 0, 0.25)",
                borderRadius: 32,
                padding: 8,
              }}
            />
          }
          title="Income"
          value={6560}
        />
        <DashboardCard
          icon={
            <DollarOutlined
              style={{
                color: "blue",
                fontSize: 32,
                backgroundColor: "rgba(0, 0, 255, 0.25)",
                borderRadius: 32,
                padding: 8,
              }}
            />
          }
          title="Extra expenses: Shows"
          value={578}
        />
        <DashboardCard
          icon={
            <DollarOutlined
              style={{
                color: "blue",
                fontSize: 32,
                backgroundColor: "rgba(0, 0, 255, 0.25)",
                borderRadius: 32,
                padding: 8,
              }}
            />
          }
          title="Extra incomes: Freelance"
          value={1078}
        />
        <DashboardCard
          icon={
            <ShoppingOutlined
              style={{
                color: "orange",
                fontSize: 32,
                backgroundColor: "rgba(143, 215, 10, 0.25)",
                borderRadius: 32,
                padding: 8,
              }}
            />
          }
          title="Total expenses for last month"
          value={4350}
        />
        <DashboardCard
          icon={
            <ShoppingOutlined
              style={{
                color: "orange",
                fontSize: 32,
                backgroundColor: "rgba(143, 215, 10, 0.25)",
                borderRadius: 32,
                padding: 8,
              }}
            />
          }
          title="Total income for last month"
          value={7520}
        />
      </Space>
    </div>
  );
}
