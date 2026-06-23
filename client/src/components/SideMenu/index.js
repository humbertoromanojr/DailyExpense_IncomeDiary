import { Menu } from "antd";
import {
  AppstoreOutlined,
  AppstoreAddOutlined,
  EditOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function SideMenu() {
  const navigate = useNavigate();

  return (
    <div className="SideMenu">
      <Menu
        onClick={(item) => {
          navigate(item.key);
        }}
        items={[
          {
            label: "Dashboard",
            icon: <AppstoreOutlined />,
            key: "/",
          },
          {
            label: "Add Items",
            icon: <AppstoreAddOutlined />,
            key: "/additem",
          },
          {
            label: "List Items",
            icon: <OrderedListOutlined />,
            key: "/mylist",
          },
        ]}
      ></Menu>
    </div>
  );
}
