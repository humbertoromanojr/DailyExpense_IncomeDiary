import React, { useState } from "react";
import uniquid from "uniqid";
import { Typography, Button, Checkbox, Form, Input } from "antd";
import axios from "axios";

export default function AddItem() {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [value, setValue] = useState();

  async function addNewItem() {
    var addItem = {
      id: uniquid(),
      name: name,
      description: description,
      value: value,
    };
    console.log("Test Add: ", addItem);

    await axios
      .post("/api/add/additem", addItem)
      .then((res) => {
        // clean fields
        setName("");
        setDescription("");
        setValue("");

        alert(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Typography.Title level={4}>Add Expenses or Incomes</Typography.Title>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="Name"
          rules={[
            { required: true, message: "Please input your Product Name!" },
          ]}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="Description"
          rules={[
            { required: false, message: "Please input your Description!" },
          ]}
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Value"
          name="Value"
          rules={[{ required: true, message: "Please input your Value!" }]}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        >
          <Input />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit" onClick={addNewItem}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
