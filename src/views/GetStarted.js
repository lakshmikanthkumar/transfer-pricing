import { Link } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Select, DatePicker, Radio, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { Option } = Select;

function GetStarted() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <section class="breadcrumbs">
                <div class="container">

                    <div class="d-flex justify-content-between align-items-center">
                        <h2>Get Started</h2>
                        <ol>
                            <li><Link to="/Home">Home </Link></li>
                            <li>Get Started</li>
                        </ol>
                    </div>

                </div>
            </section>

            <section class="inner-page pt-4">
                <div class="container">
                    <h4>Welcome to Transfer Pricing Benchmarking Search Request</h4>
                    <div>
                        <Form
                            name="basic"
                            labelCol={{ span: 6 }}
                            wrapperCol={{ span: 7 }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="First Name"
                                name="fname"
                                rules={[{ required: true, message: 'Please Enter your First Name' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Last Name"
                                name="lName"
                                rules={[{ required: true, message: 'Please Enter your Last Name' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Company Name"
                                name="CompanyName"
                                rules={[{ required: true, message: 'Please Enter your Company Name' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Address"
                                name="Address"
                                rules={[{ required: true, message: 'Please Enter your Address' }]}
                            >
                                <TextArea showCount maxLength={100} />
                            </Form.Item>

                            <Form.Item
                                label="E-mail"
                                name="E-mail"
                                rules={[{ required: true, message: 'Please Enter your E-mail' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Telephone Number"
                                name="TNumber"
                                rules={[{ required: true, message: 'Please Enter your Telephone Number' }]}
                            >
                                <Input />
                            </Form.Item>
                            <br />
                            <h4>The Following Questions are for the Company for the Benchmarking Analysis</h4>
                            <Form.Item
                                label="Company Name"
                                name="CName"
                                rules={[{ required: true, message: 'Please Enter your Company Name' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Keywords to describe your business"
                                name="KName"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item name="Industry" label="Industry" rules={[{ required: true }]}>
                                <Select
                                    placeholder="Please Select"
                                    allowClear
                                >
                                    <Option value="Agriculture, forestry and fishing">Agriculture, forestry and fishing</Option>
                                    <Option value="Mining">Mining</Option>
                                    <Option value="Manufacturing">Manufacturing</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item name="IndustryCode" label="Industry Code" rules={[{ required: true }]}>
                                <Select
                                    mode="multiple"
                                    placeholder="Please Select"
                                    defaultValue={['01 AGRICULTURAL PRODUCTION-CROPS', '-- 0111 WHEAT']}
                                    allowClear
                                >
                                    <Option value="01 AGRICULTURAL PRODUCTION-CROPS">01 AGRICULTURAL PRODUCTION-CROPS</Option>
                                    <Option value="- 011 CASH GRAINS">- 011 CASH GRAINS</Option>
                                    <Option value="-- 0111 WHEAT">-- 0111 WHEAT</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label="Top 5 Competitors"
                                name="Competitors"
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item name="transaction" label="Type of transaction" rules={[{ required: true }]}>
                                <Select
                                    placeholder="Please Select"
                                    allowClear
                                >
                                    <Option value="Agriculture, forestry and fishing">Agriculture, forestry and fishing</Option>
                                    <Option value="Mining">Mining</Option>
                                    <Option value="Manufacturing">Manufacturing</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label="Financial year ended"
                                name="Financial"
                            >
                                <DatePicker style={{ width: "100%" }} />
                            </Form.Item>

                            <Form.Item
                                label="Financial year range/Covered period"
                                name="period"
                                rules={[{ required: true, message: 'Please Enter your Financial year range/Covered period' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Revenue Level"
                                name="RevenueLevel"
                                rules={[{ required: true, message: 'Please Enter your Revenue Level' }]}
                            >
                                <div className="row">
                                    <div className="col-6">
                                        <Select
                                            placeholder="Please Select"
                                            allowClear
                                        >
                                            <Option value="Agriculture, forestry and fishing">Agriculture, forestry and fishing</Option>
                                            <Option value="Mining">Mining</Option>
                                            <Option value="Manufacturing">Manufacturing</Option>
                                        </Select>
                                    </div>
                                    <div className="col-6">
                                        <Select
                                            placeholder="Please Select"
                                            allowClear
                                        >
                                            <Option value="Agriculture, forestry and fishing">Agriculture, forestry and fishing</Option>
                                            <Option value="Mining">Mining</Option>
                                            <Option value="Manufacturing">Manufacturing</Option>
                                        </Select>
                                    </div>
                                </div>
                            </Form.Item>
                            <Form.Item
                                label="Geographic location"
                                name="location"
                                rules={[{ required: true, message: 'Please Enter your Geographic location' }]}
                            >
                                <div className="row">
                                    <div className="col-6">
                                        <Select
                                            placeholder="Please Select"
                                            allowClear
                                        >
                                            <Option value="Agriculture, forestry and fishing">Agriculture, forestry and fishing</Option>
                                            <Option value="Mining">Mining</Option>
                                            <Option value="Manufacturing">Manufacturing</Option>
                                        </Select>
                                    </div>
                                    <div className="col-6">
                                        <Select
                                            placeholder="Please Select"
                                            allowClear
                                        >
                                            <Option value="Agriculture, forestry and fishing">Agriculture, forestry and fishing</Option>
                                            <Option value="Mining">Mining</Option>
                                            <Option value="Manufacturing">Manufacturing</Option>
                                        </Select>
                                    </div>
                                </div>
                            </Form.Item>
                            <Form.Item
                                label="Preferred Profit Level Indicator"
                                name="Indicator"
                                rules={[{ required: true, message: 'Please Enter your Preferred Profit Level Indicator' }]}
                            >
                                <Select
                                    placeholder="Please Select"
                                    allowClear
                                >
                                    <Option value="Agriculture, forestry and fishing">Agriculture, forestry and fishing</Option>
                                    <Option value="Mining">Mining</Option>
                                    <Option value="Manufacturing">Manufacturing</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="Preferred screening ratios"
                                name="ratios"
                                rules={[{ required: true, message: 'Please Enter your Preferred screening ratios' }]}
                            >
                                <div className='row'>
                                    <div className="col-4">
                                        <Select
                                            placeholder="Please Select"
                                            allowClear
                                        >
                                            <Option value="Agriculture, forestry and fishing">Agriculture, forestry and fishing</Option>
                                            <Option value="Mining">Mining</Option>
                                            <Option value="Manufacturing">Manufacturing</Option>
                                        </Select>
                                    </div>
                                    <div className="col-4">
                                        <Select
                                            placeholder="Please Select"
                                            allowClear
                                        >
                                            <Option value="Agriculture, forestry and fishing">Agriculture, forestry and fishing</Option>
                                            <Option value="Mining">Mining</Option>
                                            <Option value="Manufacturing">Manufacturing</Option>
                                        </Select>
                                    </div>
                                    <div className="col-4">
                                        <Input />
                                    </div>
                                </div>
                            </Form.Item>
                            <Form.Item name="radio-group" label="Do you want the report without our transfer pricing benchmarking branding?">
                                <Radio.Group>
                                    <Radio value="Yes">Yes</Radio>
                                    <Radio value="No">No</Radio>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item label="Please provide relevant documents to perform the benchmarking analysis">
                                <Form.Item name="dragger" valuePropName="fileList" noStyle>
                                    <Upload.Dragger name="files" action="/upload.do">
                                        <p className="ant-upload-drag-icon">
                                            <InboxOutlined />
                                        </p>
                                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                        <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                                    </Upload.Dragger>
                                </Form.Item>
                            </Form.Item>
                            <Form.Item
                                label="Additional Comments"
                                name="AdditionalComments"
                                rules={[{ required: true, message: 'Please Enter your Additional Comments' }]}
                            >
                                <TextArea showCount maxLength={200} />
                            </Form.Item>
                            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 6, span: 7 }}>
                                <Checkbox>I accept the Terms and Conditions</Checkbox>
                            </Form.Item>

                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit" style={{ marginRight: 20 }}>
                                    Submit
                                </Button>
                                <Button type="default" htmlType="clear">
                                    Cancel
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default GetStarted;