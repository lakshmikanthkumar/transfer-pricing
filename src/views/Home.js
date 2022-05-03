import { Carousel } from 'antd';
import { Link } from 'react-router-dom';


function Home() {

  return (
    <div>
      <section id="hero">
        <div className="hero-content container" data-aos="fade-up">
          <h2>Do you need your International Related Party Transactions benchmarked?</h2>
          <h3>Transfer Pricing Benchmarking can provide cost effective benchmarking tailored to your specific facts &amp;
            circumstances in a branded or white label report.</h3>
          <div>
            <a href="/BenchmarkingServices" className="btn-projects scrollto">Read More</a>
          </div>
        </div>
        <Carousel autoplay>
          <div>
            <img src="./hero-carousel/4.jpg" alt="" />
          </div>
          <div>
            <img src="./hero-carousel/3.jpg" alt="" />
          </div>
          <div>
            <img src="./hero-carousel/2.jpg" alt="" />
          </div>
          <div>
            <img src="./hero-carousel/1.jpg" alt="" />
          </div>
        </Carousel>
      </section>

      <section id="about" className="my-5">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>The Difference</h2>
            <p>Transfer Pricing Solutions is an award winning transfer pricing practice with extensive experience throughout the world</p>
          </div>
          <div className="row">
            <div className="col-lg-6 about-img">
              <img src="./about-img.jpg" alt="" className="img-fluid" />
            </div>
            <div className="col-lg-6 content">
              <p>Transfer pricing continues to be a hot topic with Global tax authorities and the OECD. The BEPS project,
                Country by Country reporting and the focus on comparability means taxpayers must ensure their
                international related party transactions can be defended. Gone are the days where a generic
                <b>“Benchmarking Study”</b> is sufficient to defend pricing.</p>
              <p>Transfer Pricing Benchmarking services are provided by Transfer Pricing Solutions based in Australia. Our
                transfer pricing benchmarking is high quality defendable bench-marking.
                <a href="#" className="">Click here to read more about our difference</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="process" className="mb-5">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Our Process</h2>
            <p>The benchmarking process starts after the analysis of identifying and characterising the international
              related party transaction has already be performed. Please contact us if you require assistance with this
              area and we can quote separately. If you have already performed this analysis, you are ready for
              benchmarking. Our benchmarking process can be summarised as follows:</p>
          </div>
          <div className="row gy-4">
            <div className="col-2">
              <img src="./steps.jpg" alt="" />
            </div>
            <div className="col-10" data-aos="fade-up" data-aos-delay="100">
              <div className="box">
                <div className="icon"><i className="bi bi-file-earmark-spreadsheet"></i></div>
                <h4 className="title"><a href="">DATA GATHERING</a></h4>
                <p className="description">Complete the online questionnaire regarding the company, industry and transaction
                  information. We are willing to sign confidentiality agreements if required.</p>
              </div>
              <div className="box">
                <div className="icon"><i className="bi bi-binoculars"></i></div>
                <h4 className="title"><a href="">BENCHMARKING ANALYSIS</a></h4>
                <p className="description">Transfer Pricing Benchmarking performs the benchmarking analysis. The analysis
                  itself has many steps in the process before a final comparable set is identified.</p>
              </div>
              <div className="box">
                <div className="icon"><i className="bi bi-bar-chart"></i></div>
                <h4 className="title"><a href="">DRAFT REPORT</a></h4>
                <p className="description">Transfer Pricing Solutions finalises the benchmarking analysis and provides a draft
                  report for discussion.</p>
              </div>
              <div className="box">
                <div className="icon"><i className="bi bi-card-checklist"></i></div>
                <h4 className="title"><a href="">FINAL REPORT</a></h4>
                <p className="description">The final report includes the full search write up, the benchmarking analysis, the
                  elimination chart and financials of the final comparable companies.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <a href="benchmarkingServices.html" className="btn-projects scrollto">Read More</a>
            <a href="/GetStarted" className="btn-get-started scrollto">Get Started</a>
          </div>
        </div>
      </section>
      <section id="blogs" className="my-3">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Latest Blog Posts</h2>
          </div>
          <div className="row contact-info">
            <div className="col-md-4">
              <div className="card">
                <img src="./blog1.jpg" alt="" />
                <div className="blogContent">
                  <h4>All you need to know about the OECD Transfer Pricing Guidelines 2022 Update</h4>
                  <small><i className="bi bi-calendar-check"></i> 9 Mar'20</small>
                  <p>If you are reading this article the chances are that you enjoy discussing about technical aspects of
                    transfer pricing as much as we do. Any transfer pricing aficionado knows that changes to the OECD
                    Transfer Pricing Guidelines are a reason for excitement in the tax and transfer
                    pricing world.</p>
                  <a href="#"><i className="bi bi-chevron-double-right"></i> READ MORE</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="./blog2.jpg" alt="" />
                <div className="blogContent">
                  <h4>Malaysia Transfer Pricing Update</h4>
                  <small><i className="bi bi-calendar-check"></i> 11 Feb'21</small>
                  <p>The Malaysian Finance Bill 2020 incorporates transfer pricing-related changes to the current Income
                    Tax Act, 1967 (“ITA”). The changes permit significantly greater authority to the Malaysia Inland
                    Revenue Board (“MIRB”) and re-emphasises the importance of transfer pricing compliance, with effect
                    from 1 January 2021.</p>
                  <a href="#"><i className="bi bi-chevron-double-right"></i> READ MORE</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="./blog3.jpg" alt="" />
                <div className="blogContent">
                  <h4>ATO issues COVID-19 guidance on AU Transfer Pricing</h4>
                  <small><i className="bi bi-calendar-check"></i> 12 Aug'21</small>
                  <p>Thec Covid-19 pandemic has triggered the most severe recession and is causing enormous damage to the
                    world economy. The economic downturn will impact a group’s transfer prices, analysis and
                    documentation, more so with the BEPS Action Plans in place and the high level of transfer pricing
                    scrutiny across the globe.</p>
                  <a href="#"><i className="bi bi-chevron-double-right"></i> READ MORE</a>
                </div>
              </div>
            </div>
          </div>
          <div className="pagination"><span aria-current="page" className="page-numbers current">1</span>
            <a className="page-numbers" href="#">2</a>
            <a className="next page-numbers" href="#">Next ›</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;