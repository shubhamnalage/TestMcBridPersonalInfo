import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Row, Col, Card } from "antd";
const AddressForm = ({ onFinish, initialValues }) => {
  //   const onFinish = (values) => {
  //     console.log("Received values of form:", values);
  //   };
  return (
    <Row type="flex" justify="center" align="center">
      <Col span={4}>
        <Card
          title="Address"
          bordered={false}
          style={{
            width: 300,
          }}
        >
          <Form
            name="dynamic_form_item"
            layout="vertical"
            onFinish={onFinish}
            initialValues={initialValues}
            style={{
              maxWidth: 600,
            }} 
          >
            <Form.List name="address">
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field, index) => (
                    <Form.Item
                      label={
                        index === 0
                          ? "Previous Address 1"
                          : `Previous Address ${index + 1}`
                      }
                      required={false}
                      key={field.key}
                    >
                      <Form.Item
                        {...field}
                        label="Previous Address 1"
                        validateTrigger={["onChange", "onBlur"]}
                        rules={[
                          {
                            required: true,
                            whitespace: true,
                            message:
                              "Please input passenger's name or delete this field.",
                          },
                        ]}
                        noStyle
                      >
                        <Input
                          placeholder="Address Line 1"
                          style={{
                            width: "100%",
                            marginBottom: "1rem",
                          }}
                        />
                      </Form.Item>
                      {fields.length > 1 ? (
                        <MinusCircleOutlined
                          className="dynamic-delete-button"
                          onClick={() => remove(field.name)}
                        />
                      ) : null}
                    </Form.Item>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      style={{
                        width: "10%",
                      }}
                      icon={<PlusOutlined />}
                    >
                      Add another address
                    </Button>
                    <Form.ErrorList errors={errors} />
                  </Form.Item>
                </>
              )}
            </Form.List>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};
export default AddressForm;
