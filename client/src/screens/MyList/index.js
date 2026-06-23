import React, { useState, useEffect } from "react";
import { Typography, Flex, Space, Table, Tag } from "antd";
import axios from "axios";

import Item from "../Item";

export default function MyList() {
  const [dataItems, setDataItems] = useState([]);

  useEffect(() => {
    axios
      .get("api/item/myList")
      .then((res) => {
        console.log(res.data.data);
        setDataItems(res.data.data || res.data || []);
      })
      .catch((err) => {
        console.log(err);
        setDataItems([]);
      });
  }, []);

  //Map the list of items to the “items” object
  const listItems = dataItems.map((item) => {
    return (
      <div>
        <Item item={item} />
      </div>
    );
  });

  return (
    <div>
      <Typography.Title level={4}>
        My list of daily expenses and incomes
      </Typography.Title>
      {listItems}
    </div>
  );
}
