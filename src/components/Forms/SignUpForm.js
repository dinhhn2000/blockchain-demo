import React from "react";
import { Form, Input, Button } from "antd";

export default function SignUpForm() {
  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 17,
    },
  };
  const btnLayout = {
    wrapperCol: {
      offset: 10,
    },
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    localStorage.setItem("token", "abcxyz");
    window.location.replace("/");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      style={{ width: 450, padding: 20, background: "white", borderRadius: 20 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <h1 style={{ textAlign: "center" }}>Create wallet</h1>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Re-Password"
        name="re-password"
        dependencies={["password"]}
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject("The two passwords that you entered do not match!");
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...btnLayout}>
        <Button type="primary" htmlType="submit">
          CREATE
        </Button>
      </Form.Item>
    </Form>
  );
}
