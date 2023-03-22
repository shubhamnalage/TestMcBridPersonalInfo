import { Button, DatePicker, Form, Input, Row, Col, Card } from "antd";
import React from "react";

const PersonalDetailsForm = ({ onFinish, initialValues }) => {
  const dateFormat = "YYYY/MM/DD";
  return (
    <>
      <Row type="flex" justify="center" align="center">
        <Col span={4}>
          <Card
            title="Personal Details"
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
                label="First Name"
                name={"firstName"}
                rules={[
                  {
                    required: true,
                    message: "Please Enter First Name",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Last Name"
                name={"lastName"}
                rules={[
                  {
                    required: true,
                    message: "Please Enter Last Name",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Date of Birth"
                name={"dob"}
                rules={[
                  {
                    required: true,
                    message: "Please Enter Date of Birth",
                  },
                ]}
              >
                <DatePicker
                  style={{
                    width: "100%",
                  }}
                  format={dateFormat}
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Next
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PersonalDetailsForm;
