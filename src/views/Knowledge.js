import { Link } from 'react-router-dom';

function Knowledge() {

    return (
        <div>
            <section class="breadcrumbs">
                <div class="container">
                    <div class="d-flex justify-content-between align-items-center">
                        <h2>Knowledge</h2>
                        <ol>
                            <li><Link to="/Home">Home </Link></li>
                            <li>Knowledge</li>
                        </ol>
                    </div>
                </div>
            </section>
            <section class="inner-page pt-4">
                <div class="container">
                    <div class="section-header">
                        <h3>Learn more from our</h3>
                        <h2>Latest Blog Posts, E-books &amp; Videos</h2>
                    </div>
                    <div class="row" data-aos="fade-up" data-aos-delay="100">
                        <div class="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                                <li data-filter=".filter-Blog" class="filter-active">Blog</li>
                                <li data-filter=".filter-EBooks">EBooks</li>
                                <li data-filter=".filter-Videos">Videos</li>
                            </ul>
                        </div>
                    </div>
                    <div class="row portfolio-container">
                        <div class="filter-Blog">
                            <div class="row contact-info">
                                <div class="col-md-4">
                                    <div class="card">
                                        <img src="./blog1.jpg" alt="" />
                                        <div class="blogContent">
                                            <h4>All you need to know about the OECD Transfer Pricing Guidelines 2022 Update</h4>
                                            <small><i class="bi bi-calendar-check"></i> 9 Mar'20</small>
                                            <p>If you are reading this article the chances are that you enjoy discussing about technical aspects of
                                                transfer pricing as much as we do. Any transfer pricing aficionado knows that changes to the OECD
                                                Transfer Pricing Guidelines are a reason for excitement in the tax and transfer
                                                pricing world.</p>
                                            <a href="#"><i class="bi bi-chevron-double-right"></i> READ MORE</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card">
                                        <img src="./blog2.jpg" alt="" />
                                        <div class="blogContent">
                                            <h4>Malaysia Transfer Pricing Update</h4>
                                            <small><i class="bi bi-calendar-check"></i> 11 Feb'21</small>
                                            <p>The Malaysian Finance Bill 2020 incorporates transfer pricing-related changes to the current Income
                                                Tax Act, 1967 (“ITA”). The changes permit significantly greater authority to the Malaysia Inland
                                                Revenue Board (“MIRB”) and re-emphasises the importance of transfer pricing compliance, with effect
                                                from 1 January 2021.</p>
                                            <a href="#"><i class="bi bi-chevron-double-right"></i> READ MORE</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card">
                                        <img src="./blog3.jpg" alt="" />
                                        <div class="blogContent">
                                            <h4>ATO issues COVID-19 guidance on AU Transfer Pricing</h4>
                                            <small><i class="bi bi-calendar-check"></i> 12 Aug'21</small>
                                            <p>Thec Covid-19 pandemic has triggered the most severe recession and is causing enormous damage to the
                                                world economy. The economic downturn will impact a group’s transfer prices, analysis and
                                                documentation, more so with the BEPS Action Plans in place and the high level of transfer pricing
                                                scrutiny across the globe.</p>
                                            <a href="#"><i class="bi bi-chevron-double-right"></i> READ MORE</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pagination"><span aria-current="page" class="page-numbers current">1</span>
                                <a class="page-numbers" href="#">2</a>
                                <a class="next page-numbers" href="#">Next ›</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Knowledge;