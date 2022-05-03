import { Link } from "react-router-dom";

function About() {

  return (
    <div>
      <section className="breadcrumbs">
        <div className="container">

          <div className="d-flex justify-content-between align-items-center">
            <h2>About Us</h2>
            <ol>
              <li>
                <Link to="/Home">Home </Link></li>
              <li>About Us</li>
            </ol>
          </div>
        </div>
      </section>
      <section className="inner-page pt-4">
        <div className="container">
          <p>Transfer Pricing Benchmarking services are provided by <b>Transfer Pricing Solutions</b> based in Australia.</p>
          <div className="row">
            <div className="col-md-6">
              <p>Transfer pricing continues to be a hot topic with Global tax authorities and the OECD. The <b> <a href="https://www.oecd.org/tax/beps/" target="_blank">BEPS project, Country by Country reporting</a></b> and the focus on comparability means taxpayers must ensure their international related party transactions can be defended. Gone are the days were a generic “benchmarking study” is sufficient to defend pricing.</p>
              <p>Our transfer pricing benchmarking is high quality defendable bench-marking. We do not have a “standard set” or “re-use” our searches. Each search is tailored to the client needs based on the search request received. Our search request provides taxpayers and advisors with the opportunity to be involved in the search process, not just receiving a completed search at the end. All of our benchmarking team are based in Australia and have Big 4 expertise. We can be contacted via email, or telephone and can accommodate different time zones by appointment.</p>
              <p>Transfer Pricing Solutions is an award winning transfer pricing practice with extensive experience throughout the world. As an independent transfer pricing specialist the Transfer Pricing Solutions team work directly with taxpayers, their accountants or lawyers to ensure taxpayers can satisfy their transfer pricing requirements in a cost effective and high quality manner. Please refer to our website for further information on <b><a href="https://www.transferpricingsolutions.com.au/">Transfer Pricing Solutions</a></b></p>
            </div>
            <div className="col-md-6">
              <img src="./aboutus.jpg" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;