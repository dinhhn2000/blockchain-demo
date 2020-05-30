import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { NavLink } from "react-router-dom";

export default function SignInForm(props) {
  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 17,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 6,
    },
  };

  const btnLayout = {
    wrapperCol: {
      offset: 10,
    },
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    localStorage.setItem("username", values.username);
    props.submit(values);
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
      <h1 style={{ textAlign: "center" }}>Sign in</h1>
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
        {...tailLayout}
        style={{ marginBottom: 0 }}
        name="remember"
        valuePropName="checked"
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <NavLink to="/signUp" exact>
          Don't have account?
        </NavLink>
      </Form.Item>

      <Form.Item {...btnLayout}>
        <Button type="primary" htmlType="submit">
          SIGN IN
        </Button>
      </Form.Item>
    </Form>
  );
}
