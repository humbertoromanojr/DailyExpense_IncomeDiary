import { Typography, Button, Checkbox, Form, Input } from "antd";

export default function Edit() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Typography.Title level={4}>Edit Expense</Typography.Title>
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
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="Description"
          rules={[
            { required: false, message: "Please input your Description!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Value"
          name="Value"
          rules={[{ required: true, message: "Please input your Value!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
