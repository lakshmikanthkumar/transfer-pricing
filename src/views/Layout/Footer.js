import { Input } from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons';


function Footer() {
  return (
    <div>
      <section id="subscribe" className="my-3 pt-5 pb-0">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <img src="./subscribe.png" alt=""
              style={{ width: "150px", margin: "0 auto", display: "block", marginBottom: "20px" }} />
            <h2>Subscribe</h2>
            <p><b>Stay up-to-date with Transfer Pricing Solutions News</b> by subscribing to our eNewsletter</p>
          </div>
        </div>
        <div className="container-form">
          <div className="container" data-aos="fade-up">
            <div className="form">
              <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="row">
                  <div className="form-group col-md-4">
                    <label htmlFor="fname">First Name</label>
                    <Input placeholder="First Name" size='large' prefix={<UserOutlined />} required />
                  </div>
                  <div className="form-group col-md-4">
                    <label htmlFor="lname">Last Name</label>
                    <Input placeholder="Last Name" size='large' prefix={<UserOutlined />} required />

                  </div>
                  <div className="form-group col-md-4 mt-3 mt-md-0">
                    <label htmlFor="lname">Email Address</label>
                    <Input placeholder="E-mail Address" size='large' prefix={<MailOutlined />} required />
                  </div>
                </div>
                <div className="text-center mt-4">
                  <button type="submit" className="btn-custom">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="container my-5" data-aos="fade-up">
        <img src="./scribeImg.png" className="d-block mx-auto" alt="" />
      </div>
      <footer id="footer">
        <div className="container">
          <div className="copyright">
            &copy; Copyright © 2022 <strong> Transfer Pricing Benchmarking</strong>. All Rights Reserved
          </div>
          <ul className="declinelist">
            <li>Disclaimer</li>
            <li>Privacy Policy</li>
          </ul>
          <div className="credits">
            Website and Marketing Powered by Oncord
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;