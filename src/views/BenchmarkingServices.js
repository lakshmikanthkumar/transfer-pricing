import { Link } from "react-router-dom";


function BenchmarkingServices() {


  return (
    <div>
      <section className="breadcrumbs">
        <div className="container">

          <div className="d-flex justify-content-between align-items-center">
            <h2>Benchmarking Services</h2>
            <ol>
              <li>
                <Link to="/Home">Home </Link>
              </li>
              <li>Benchmarking Services</li>
            </ol>
          </div>

        </div>
      </section>

      <section className="inner-page pt-4">
        <div className="container">
          <p>New to transfer pricing? <b><a href="#">Check out </a></b>our frequently asked questions.</p>
          <p>Benchmarking analysis requires access to third party databases to perform the searches. For most taxpayers and accounting firms licensing of these databases is cost prohibitive as they don’t have the volume of benchmarking searches and transfer pricing is a complex tax area. So even if you licensed the software, do you know how to drive it? Just think when you license tax return software, it doesn’t make you a tax expert. This is where Transfer Pricing Benchmarking can assist! Our reports can also be delivered <b>white label.</b></p>
          <div className="row card-section">
            <div className="col-md-5">
              <div className="card p-4 pb-0 mb-4">
                <h4>Type of transactions</h4>
                <p>We can perform benchmarking analysis for distributors, manufacturers, services, debt pricing, credit ratings, royalties and more, just ask!</p>
              </div>
              <div className="card p-4 pb-0">
                <h4>Fees</h4>
                <p>Our benchmarking reports start at AUD$5,500 (plus 10% GST for Australian services) inclusive of the database fee, which covers most transactions. Orders covering debt pricing, credit ratings and more complicated transactions will be discussed with you, and a quote provided.</p>
              </div>
            </div>

            <div className="col-md-7">
              <div className="card p-4 pb-0">
                <h4>How to Order</h4>
                <p>We encourage you to be as involved in the benchmarking study as you feel comfortable with. The more information you provide, the more comparable the outcome will be to your company or client and hence more defendable in front of tax authorities.</p>
                <ul style={{paddingLeft: "20px"}}>
                  <li>Complete the order form by clicking the <b>‘Let’s get started’</b></li>
                  <li>Within one business day Transfer Pricing Benchmarking will email a confirmation of receipt of your order, an estimate delivery date of the report and an invoice for services. Payment can be made via direct deposit to the bank account, or instant online payment. Payment is required in full prior to commencement of any work.</li>
                  <li>Transfer Pricing Benchmarking commence the benchmarking analysis (Step 2 below) within two business days of receipt of payment. Final delivery of the report will be dependent on your involvement and timely response to our queries. Please communicate any preferred deadlines and we will accommodate where possible.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </section>
<div id="process">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Our Process</h2>
          <p>The benchmarking process starts after the analysis of identifying and characterising the international
            related party transaction has already be performed. Please contact us if you require assistance with this
            area and we can quote separately. If you have already performed this analysis, you are ready for
            benchmarking. Our benchmarking process can be summarised as follows:</p>
        </div>
        <div className="row gy-4">
          <div className="col-2 d-flex">
            <img src="./steps.jpg" alt="" />
          </div>
          <div className="col-10" data-aos="fade-up" data-aos-delay="100">
            <div className="box">
              <div className="icon"><i className="bi bi-file-earmark-spreadsheet"></i></div>
              <h4 className="title"><a href="">DATA GATHERING</a></h4>
              <p className="description">Please complete the online questionnaire regarding the company, industry and transaction information.
                It is not essential for you to provide the company name however further details will assist in comparability. Our firm are Chartered Accountants and abide by the ethics and confidentiality provisions of our profession. We are willing to sign confidentiality agreements if required.
                Within the questionnaire you may indicate whether you want to be involved in certain stages of the process.</p>
              <b><a href="/GetStarted">Click here to get started Now</a></b>
            </div>
            <div className="box">
              <div className="icon"><i className="bi bi-binoculars"></i></div>
              <h4 className="title"><a href="">BENCHMARKING ANALYSIS</a></h4>
              <p className="description">Transfer Pricing Benchmarking performs the benchmarking analysis. The analysis itself has many steps in the process before a final comparable set is identified.</p>
              <b>Discussions of Results (Optional)</b>
              <p>Familiar with transfer pricing comparability? During this step Transfer Pricing Benchmarking can provide a summary of the interim search results after the first and second cut of the search rejections and analysis. The summary would include the company names, descriptions and financial data for your review. This provides you with an opportunity to ensure comparability of the transactions and entities.</p>
              <p>Not sure on this stage, we are happy to explain this part of the process so you can be involved.</p>
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
              <p className="description">The final report includes the full search write up, the benchmarking analysis, the elimination chart and financials of the final comparable companies.</p>
              <p>The report will be delivered in pdf with Transfer Pricing Benchmarking branding however upon request the report can be provided as a <b>“white label”</b> word document if you wish to apply your own branding. Please indicate your preference in Step One.</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <a href="/GetStarted" className="btn-get-started scrollto">Get Started</a>
        </div>
      </div>
</div>
    </div>
  );
}

export default BenchmarkingServices;