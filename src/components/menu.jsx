import { Menu, Layout } from "antd";

import { UserOutlined } from "@ant-design/icons";
import KeyIcon from "../assets/key-square@2x.svg";
import WalletIcon from "../assets/wallet-money 2.svg";
import DiscountIcon from "../assets/discount-shape 1.svg";
import HelpIcon from "../assets/message-question 1.svg";
import SquareIcon from "../assets/3d-square 1.svg";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(
    "Dashboard",
    "sub1",
    <img src={KeyIcon} style={{ verticalAlign: "-0.5em" }} />,
    [
      getItem(
        "Show me dashboard",
        null,
        null,
        [getItem("View dashboard", "1")],
        "group"
      ),
      getItem(
        "Change dashboard",
        null,
        null,
        [getItem("Build dashboard", "3"), getItem("Delete dashboard", "4")],
        "group"
      ),
    ]
  ),
  getItem(
    "Product",
    "sub2",
    <img src={SquareIcon} style={{ verticalAlign: "-0.5em" }} />,
    [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
      getItem("Submenu", "sub3", null, [
        getItem("Option 7", "7"),
        getItem("Option 8", "8"),
      ]),
    ]
  ),
  getItem(
    "Customers",
    "sub5",
    <UserOutlined
      style={{
        color: "#9197B3",
        border: "2px solid #9197B3",
        width: 20,
        height: 20,
        justifyContent: "center",
        borderRadius: "5px",
      }}
    />,
    [
      getItem("Option 9", "9"),
      getItem("Option 10", "10"),
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]
  ),
  getItem(
    "Income",
    "sub6",
    <img src={WalletIcon} style={{ verticalAlign: "-0.5em" }} />,
    [
      getItem("Option 9", "13"),
      getItem("Option 10", "14"),
      getItem("Option 11", "15"),
      getItem("Option 12", "16"),
    ]
  ),
  getItem(
    "Promoute",
    "sub7",
    <img src={DiscountIcon} style={{ verticalAlign: "-0.5em" }} />,
    [
      getItem("Option 9", "17"),
      getItem("Option 10", "18"),
      getItem("Option 11", "19"),
      getItem("Option 12", "20"),
    ]
  ),
  getItem(
    "Help",
    "sub8",
    <img src={HelpIcon} style={{ verticalAlign: "-0.5em" }} />,
    [
      getItem("Option 9", "21"),
      getItem("Option 10", "22"),
      getItem("Option 11", "23"),
      getItem("Option 12", "24"),
    ]
  ),
];

const MenuWrap = () => {
  const { Sider } = Layout;

  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="50">
        <div
          style={{
            border: 0,
          }}
        >
          <Menu
            style={{
              border: 0,
              color: "#9197B3",
              marginLeft: -10,
            }}
            mode="vertical"
            items={items}
          />
        </div>
      </Sider>
    </Layout>
  );
};
export default MenuWrap;
