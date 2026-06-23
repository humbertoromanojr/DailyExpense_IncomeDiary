import React, { useState, useEffect } from "react";
import { Typography, Button, Checkbox, Form, Input } from "antd";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function EditItem() {
  const params = useParams();

  const [form] = Form.useForm();

  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [value, setValue] = useState();

  useEffect(() => {
    axios
      .post("/api/item/edititem", { iditem: params.iditem })
      .then((res) => {
        console.log(res.data.data[0]);
        const dataItem = res.data.data[0];

        setName(dataItem.name);
        setDescription(dataItem.description);
        setValue(dataItem.value);

        form.setFieldsValue({
          Name: dataItem.name,
          Description: dataItem.description,
          Value: dataItem.value,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // edit item
  async function editCurrentItem() {
    const formValues = form.getFieldsValue();

    const editItem = {
      id: params.iditem,
      name: formValues.Name,
      description: formValues.Description,
      value: formValues.Value,
    };

    console.log("Test Edit: ", editItem);

    try {
      const res = await axios.post("/api/item/updateitem", editItem);
      console.log("Resposta:", res.data);
      console.log("Item atualizado com sucesso!");
    } catch (err) {
      console.error("Erro ao atualizar:", err);
    }
  }

  return (
    <div>
      <Typography.Title level={4}>Edit items</Typography.Title>

      <Form
        form={form}
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
          <Button type="primary" htmlType="submit" onClick={editCurrentItem}>
            Edit item
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
