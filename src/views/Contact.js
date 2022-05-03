import { Link } from 'react-router-dom';
import { Input } from 'antd';
import { UserOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
const { TextArea } = Input;

function Contact() {

   function iframe(){
        return {__html: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25074.518024048393!2d145.043159!3d-38.225803!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad5d9515ad6ab63%3A0xe48a339483144f6d!2s1%2F328%20Main%20St%2C%20Mornington%20VIC%203931%2C%20Australia!5e0!3m2!1sen!2sus!4v1648991203578!5m2!1sen!2sus" width="100%" height="380" frameborder="0" style="border:0" allowfullscreen></iframe>'};
    }

    return (
        <div>
            <section class="breadcrumbs">
                <div class="container">
                    <div class="d-flex justify-content-between align-items-center">
                        <h2>Contact</h2>
                        <ol>
                        <li>
                            <Link to="/Home">Home </Link>
                        </li>
                            <li>Contact</li>
                        </ol>
                    </div>

                </div>
            </section>
            <section id="contact">
                <div class="container" data-aos="fade-up">
                    <div class="section-header">
                        <h2>Contact Us Now</h2>
                        <p>Our offices are open between 9am and 5.00pm Monday – Friday</p>
                    </div>
                    <div class="row contact-info">
                        <div class="col-md-8">
                            <div class="contact-address">
                                <i class="bi bi-geo-alt"></i>
                                <h3>Head Office <address>Level 1, 328 Main Street, Mornington VIC 3931</address></h3>
                                <h3>Melbourne CBD Office  <address>Exchange Tower Level 1, 530 Little Collins Street Melbourne VIC 3000</address></h3>
                                <h3>Sydney CBD Office <address>Australia Square Level 33, 264 George Street, Sydney NSW 2000</address></h3>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="contact-email">
                                <i class="bi bi-envelope"></i>
                                <h3>Contact Details</h3>
                                <p><b>Phone:</b>+61 (3) 5911 7001</p>
                                <p><b>Fax:</b>+61 (3) 9018 4382</p>
                                <p><b>Email:</b>benchmarking@transferpricingsolutions.com.au</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mb-4">
                <div dangerouslySetInnerHTML={iframe()} />;
                    {/* <iframe src="" width="100%" height="380" frameborder="0" style="border:0" allowfullscreen></iframe> */}
                </div>

                <div class="container">
                    <div class="form">
                        <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <Input placeholder="First Name" prefix={<UserOutlined />} required />
                                </div>
                                <div class="form-group col-md-6">
                                    <Input placeholder="Last Name" prefix={<UserOutlined />} required />
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="form-group col-md-6 mt-3 mt-md-0">
                                    <Input placeholder="E-mail Address" prefix={<MailOutlined />} required />
                                </div>
                                <div class="form-group col-md-6 mt-3 mt-md-0">
                                    <Input placeholder="Phone Number" prefix={<PhoneOutlined />} required />
                                </div>
                            </div>
                            <div class="form-group mt-3">
                                <TextArea showCount maxLength={100} placeholder="Message" />
                            </div>
                            <div class="text-center mt-4"><button type="submit">Send Message</button></div>
                        </form>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Contact;