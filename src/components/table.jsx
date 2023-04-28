import { useEffect, useState } from "react";
import { Table, Tag } from "antd";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

import SearchWrap from "./search";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const statuses = ["Active", "Inactive"];

const columnStyles = {
  color: "#B5B7C0",
  fontWeight: 500,
  fontSize: 14,
};

const columns = [
  {
    dataIndex: "customerName",
    key: "customerName",
    title: <span style={columnStyles}>Customer name</span>,
  },
  {
    dataIndex: "company",
    key: "company",
    title: <span style={columnStyles}>Company</span>,
    className: "hide-on-xs",
  },
  {
    dataIndex: "phoneNumber",
    key: "phoneNumber",
    title: <span style={columnStyles}>Phone number</span>,
    className: "hide-on-lg",
  },
  {
    dataIndex: "email",
    key: "email",
    title: <span style={columnStyles}>Email</span>,
    className: "hide-on-xl",
  },
  {
    dataIndex: "country",
    key: "country",
    title: <span style={columnStyles}>Country</span>,
    className: "hide-on-sm",
  },
  {
    title: <span style={columnStyles}>Status</span>,
    key: "status",
    dataIndex: "status",
    className: "hide-on-xs",
    render: (_, { status }) => {
      let color = "";
      let background = "";
      if (status === "Inactive") {
        color = "#DF0404";
        background = "#FFC5C5";
      } else {
        color = "#00B087";
        background = "rgba(22, 192, 152, 0.38)";
      }
      return (
        <Tag
          key={status}
          style={{
            borderColor: color,
            background: background,
            color: color,
            fontFamily: "Poppins",
            fontSize: 14,
            padding: "4px 12px",
            width: 80,
            textAlign: "center",
          }}
        >
          {status}
        </Tag>
      );
    },
  },
];

const country = [
  "United States",
  "Kiribati",
  "Israel",
  "Iran",
  "Brasil",
  "Aland Islands",
  "Reunion",
  "Curacao",
];

const TableWrap = () => {
  const [users, setUsers] = useState([]);
  const [dataArr, setDataArr] = useState([]);
  const [clonDataArr, setClonDataArr] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getUsers = () => {
    axios("https://jsonplaceholder.typicode.com/users").then((resp) => {
      for (let i = 0; i < 16; i++) {
        setUsers((prevUsers) => [...prevUsers, ...resp.data]);
      }
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (users) {
      setDataArr(
        users.map((el) => {
          return {
            key: uuidv4(),
            customerName: el.name,
            company: el.company.name,
            phoneNumber: el.phone,
            email: el.email,
            country: country[Math.floor(Math.random() * 7)],
            status: statuses[Math.floor(Math.random() * 2)],
          };
        })
      );
    }
  }, [users]);

  useEffect(() => {
    if (dataArr) {
      setClonDataArr(dataArr.concat());
    }
  }, [dataArr]);

  const totalRecords = dataArr.length;

  return (
    <Table
      columns={columns}
      dataSource={clonDataArr}
      style={{
        backgroundColor: "#ffffff",
        margin: "50px 95px 260px 0",
        borderRadius: "20px",
        padding: "30px 38px 40px 38px",
      }}
      pagination={{
        pageSize: 8,
        current: currentPage,
        onChange: setCurrentPage,
        showSizeChanger: false,
        showQuickJumper: false,
        hideOnSinglePage: true,
        itemRender: (current, type, originalElement) => {
          if (type === "prev") {
            return <LeftOutlined />;
          }
          if (type === "next") {
            return <RightOutlined />;
          }
          return originalElement;
        },
        showTotal: () => {
          return (
            <span
              className="pagination_wrap"
              style={{
                color: "#B5B7C0",
                marginRight: `${
                  currentPage > 4
                    ? "200px"
                    : currentPage == 4
                    ? "240px"
                    : "280px"
                }`,
              }}
            >{`Showing data 1 to 8 of ${totalRecords} entries`}</span>
          );
        },
      }}
      title={() => (
        <div>
          <h1
            style={{ fontSize: "22px", fontWeight: 600, fontFamily: "Poppins" }}
          >
            All customers
          </h1>
          <div className="table_rowTitle">
            <p
              style={{
                fontSize: "14px",
                fontWeight: 400,
                fontFamily: "Poppins",
                color: "#16C098",
              }}
            >
              Active Members
            </p>
            <SearchWrap
              data={dataArr}
              statuses={statuses}
              country={country}
              clonDataArr={clonDataArr}
              setClonDataArr={setClonDataArr}
              dataArr={dataArr}
            />
          </div>
        </div>
      )}
    />
  );
};
export default TableWrap;
