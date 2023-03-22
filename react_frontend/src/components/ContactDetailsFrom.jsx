import { Button, DatePicker, Form, Input, Row, Col, Card } from "antd";
import React from "react";

const ContactDetailsForm = ({ onFinish, initialValues }) => {
  const validateTenDigits = (_, value) => {
    const regex = /^\d{10}$/; // regex to match 10 digits
    if (!value || regex.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject("Please enter a 10-digit number.");
  };
  return (
    <>
      <Row type="flex" justify="center" align="center">
        <Col span={4}>
          <Card
            title="Contact Details"
            bordered={false}
            style={{
              width: 300,
            }}
          >
            <Form
              onFinish={onFinish}
              initialValues={initialValues}
              layout="vertical"
            >
              <Form.Item
                label="Email Address"
                name={"email"}
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please Enter Email Address",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Phone Number"
                name={"phone"}
                rules={[
                  {
                    required: true,
                    message: "Please input your ten-digit number!",
                  },
                  { validator: validateTenDigits },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ContactDetailsForm;
