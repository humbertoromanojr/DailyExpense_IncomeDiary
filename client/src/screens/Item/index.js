import React from "react";
import { Flex, Space, Table, Tag } from "antd";
import { Link } from "react-router-dom";

export default function Item({ item }) {
  const data = [
    {
      key: item._id,
      name: item.name,
      description: item.description,
      value: item.value,
    },
  ];

  return (
    <div>
      <ul>
        <lo>
          {item.name}&nbsp;-&nbsp;{item.description}&nbsp;-&nbsp;{item.value}
          &nbsp;|&nbsp;<Link to={`/edititem/${item._id}`}>Edit</Link>
          &nbsp;|&nbsp;<Link to={`/delete/${item._id}`}>Delete</Link>
        </lo>
      </ul>
    </div>
  );
}
