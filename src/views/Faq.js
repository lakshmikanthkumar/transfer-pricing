import { Link } from 'react-router-dom';

function Faq() {

    return (
        <div>
            <section class="breadcrumbs">
                <div class="container">

                    <div class="d-flex justify-content-between align-items-center">
                        <h2>FAQ's</h2>
                        <ol>
                            <li><Link to="/Home">Home </Link></li>
                            <li>FAQ's</li>
                        </ol>
                    </div>

                </div>
            </section>

            <section class="inner-page pt-4">
                <div class="container">
                    <div class="row">
                        <div class="col-md-9">
                            <p>New to transfer pricing? Our frequently asked questions may help!</p>
                            <b>What is transfer pricing?</b>
                            <p>‘Transfer pricing’ broadly refers to the price at which transactions between entities of multinational companies take place. The decision about what to charge for finished goods, raw materials, managerial, administrative and technical services, financial instruments and the use of intangible property will be impacted by the transfer pricing policy of a multinational enterprise (MNE). It is important to consider the Internal pricing mechanism versus independent testing of transfer prices:</p>
                            <ul>
                                <li>Management/Operational Transfer Pricing: the internal pricing mechanism used by an Australian company to internally price its property or services; and</li>
                                <li>‘Tax’ Transfer Pricing: the transfer pricing method used to test the company’s transfer prices and/or net profit earned on its property or services.</li>
                            </ul>
                            <p>Transfer pricing is an important and often complicated issue faced by MNEs and this is because a transfer pricing policy can have a significant effect on business profitability, taxes paid, shareholder value and a company’s overall risk management framework. MNEs are required to manage transfer pricing in a world characterised by different taxation rates, different foreign exchange rates, varying governmental regulations and in the context of increasing competition amongst revenue authorities for the lucrative tax revenue.</p>
                            <b>What is the purpose of a benchmarking study?</b>
                            <p>A Transfer Pricing benchmarking study is performed to identify comparable transactions to test the arm’s length nature of the international related party transactions under review.</p>
                            <b>What are Comparables and where do we find them?</b>
                            <p>A comparable analysis involves searching for “comparable companies” and benchmarking a controlled transaction with an uncontrolled transaction(s) using appropriate financial information (profit level indicator). A “comparable company” is not necessarily a competitor, supplier or customer. The following factors assist in determining comparability.</p>
                            <ul>
                                <li>Characteristics of property and services</li>
                                <li>Functional analysis</li>
                                <li>Contractual terms</li>
                                <li>Economic circumstances</li>
                                <li>Business strategies</li>
                            </ul>
                            <p>To identify these comparable companies a search, using an external database, is performed based on the appropriate SIC (and other industry) codes to your company. The initial list of potential comparable companies is short listed through a series of criteria to achieve the “comparable set”. In some instances comparables can be performed on a regional basis such as Pan-European or Asia Pacific, depending on the country requirements. For example, in Asia the use of Asia Pacific comparables is common practice as local country databases are not readily available whereas in Australia there are many databases available therefore the local tax authority expects an Australian comparable search.</p>
                            <b>What are transfer pricing methods?</b>
                            <p>Transfer pricing methods are ways of calculating the profit margin of transactions or an entire enterprise or of calculating a transfer price that qualifies as being at arm’s length. The application of transfer pricing methods is required to assure that transactions between associated enterprises conform to the arm’s length standard.</p>
                            <p>There are five main arm’s length pricing methods that are recognised by the OECD Guidelines. These methods are</p>
                            <p>The “traditional transaction based” methods:</p>
                            <ul>
                                <li>Comparable Uncontrolled Price;</li>
                                <li>Resale Price; and</li>
                                <li>Cost Plus.</li>
                            </ul>
                            <p>The “transactional profit” methods:</p>
                            <ul>
                                <li>Profit Split Method;</li>
                                <li>Transactional Net Margin Method.</li>
                            </ul>
                            <b>Comparable Uncontrolled Price (CUP) Method</b>
                            <p>The CUP Method compares the price charged for property or services in a controlled transaction to the price charged for property or services in a comparable uncontrolled transaction. Comparability requires that there are no differences that would materially affect the open market price, or that reasonably accurate adjustments can be made to reflect any differences between the controlled and uncontrolled transactions. The extent and reliability of the necessary quantitative adjustments will affect the relative reliability of the CUP analysis.</p>
                            <b>Resale Price (RP) Method</b>
                            <p>Under the RP method, an arm’s-length price is determined by subtracting the resale price margin from the third party resale price. In essence, the resale price margin compensates a reseller of goods for costs incurred and provides an appropriate profit for functions performed, tangible and intangible assets employed, and risks borne. The resale price margin is derived from the resale price margin of the same reseller on items purchased and sold in comparable uncontrolled transactions, or from the resale price margin of an unrelated party engaged in similar activities. The RP method generally is applicable to marketing operations.</p>
                            <p>Comparability under the RP method requires that there are no differences that would materially affect the resale price margin in the open market or that reasonably accurate adjustments can be made to account for such differences. The extent and reliability of adjustments will affect the relative reliability of the RP method analysis. Fewer adjustments are needed to account for product differences than under the CUP method, but other comparability attributes (e.g., functions) generally are given more weight. The RP method is not considered to be as accurate if the reseller adds substantially to the value of the product (through functions or intangibles) or incorporates the product into another product.</p>
                            <b>Cost Plus (CP) Method</b>
                            <p>Under the CP method, an arm’s-length price is determined by applying an appropriate mark-up on costs incurred. The underlying rationale is that cost plus a mark-up provides an appropriate profit for the functions performed, assets employed, and risks borne by the taxpayer. This method is most appropriate for the valuation of semi-finished goods, long-term “buy-and-supply” arrangements, and services. The cost plus mark-up is derived from the mark-up on costs of the same supplier in comparable uncontrolled transactions or from the mark-up on costs of an unrelated party in comparable uncontrolled transactions.</p>
                            <p>Comparability under the CP method requires that no difference exists that would materially affect the cost plus mark-up in the open market or that reasonably accurate adjustments can be made to reflect any differences. The extent and reliability of adjustments will affect the relative reliability of the cost plus analysis. Like the RP method, fewer adjustments are needed under the cost plus method to account for product differences than is the case for the CUP method, but other comparability attributes (e.g., functions) generally are given more weight. Thus, it is important to focus on differences in the level and types of expenses associated with the functions performed and risks assumed.</p>
                            <b>Transactional Net Margin Method (“TNMM”)</b>
                            <p>The TNMM examines the net profit from controlled transactions as a percentage of a base (e.g., costs, sales, assets). Ideally, the net margin should be established by reference to net margins earned by the same taxpayer in comparable uncontrolled transactions. If that is not possible, the TNMM refers to comparable transactions between independent entities. Comparability between controlled and uncontrolled transactions is established through a functional analysis. Quantitative adjustments must be made to account for material differences between the controlled and uncontrolled transactions. The use of an arm’s-length range, rather than a point, can further reduce the effect of differences between the controlled and uncontrolled transactions.</p>
                            <p>The TNMM should consider only the profits of the controlled entity that are attributable to the transactions under review. The application of the TNMM on a company-wide basis is inappropriate if the company engages in a variety of different controlled transactions that cannot be compared on an aggregate basis with those of an uncontrolled comparable company.</p>
                            <b>Profit Split (PS) Method</b>
                            <p>The Profit Split Method identifies the profit to be split for the associated enterprises from the controlled transaction and then splits those profits between the associated enterprises on an economically valid basis that approximates the division of profits that would have been anticipated and reflected in an agreement made at arm’s length. The contribution of each entity is determined by performing a functional analysis and valued, if by reference to reliable external market data.</p>
                            <p>In performing a profit split analysis on a residual basis, combined profits are divided in two stages. In stage one, profit is allocated to each participant to provide a basic return for functions performed (ordinarily a market return based on the returns of independent entities). In stage two, the residual profit or loss is allocated based on facts and circumstances that indicate how the residual would be divided between independent enterprises. Stage two focuses on intangible property contributed, relative bargaining positions, and reference to external market data.</p>
                            <b>What are profit level indicators?</b>
                            <p>Profit Level Indicators (PLIs) are financial ratios that measure the relationship between profits and costs incurred or resources employed. The selection of the appropriate PLI depends upon a number of factors, including the nature of the activities of the tested party, the reliability of the available data with respect to comparable uncontrolled taxpayers and the extent to which a particular PLI is likely to produce a reasonable determination of the income that the tested party would have earned in an arm’s length transaction, taking into account all of the facts and circumstances of the particular transactions under review.</p>
                            <p>The following PLIs are most commonly used in benchmarking :</p>
                            <ul>
                                <li>Operating margin (Operating Income/ net sales)</li>
                                <li>Net Cost Plus (Operating Income/ Total Costs. Total costs = Cost of Goods Sold + Operating Expenses)</li>
                                <li>Gross Margin (Gross Profit /Net Sales)</li>
                                <li>Cost Plus (Gross Profit/Cost of Goods Sold)</li>
                                <li>Berry Ratio(Gross Profit/Operating Expenses)</li>
                                <li>Return on Operating Assets (Operating Income/Average Operating Assets)</li>
                            </ul>
                            <b>How often do I need to perform a benchmarking study?</b>
                            <p>Taxpayers are required to prepare contemporaneous Transfer Pricing documentation. This means that each financial year taxpayers should prepare their transfer pricing documentation to support their transfer pricing position or update their existing transfer pricing documentation to reflect any changes in the business affecting their international related party dealings.</p>
                            <p>To be contemporaneous, it is recommended to prepare a new benchmarking analysis at least every three years. Each year the benchmarking analysis should be updated and it will involve reviewing the comparable companies in order to assess whether they are still comparable and updating their financial information.</p>
                        </div>
                        <div class="col-md-3">
                            <div class="portfolio-info">
                                <h3>FAQ's</h3>
                                <ul>
                                    <li><a href="#"><i class="bi bi-chevron-double-right"></i> What is transfer pricing?</a></li>
                                    <li><a href="#"><i class="bi bi-chevron-double-right"></i> What is the purpose of a benchmarking study?</a></li>
                                    <li><a href="#"><i class="bi bi-chevron-double-right"></i> What are Comparables and where do we find them?</a></li>
                                    <li><a href="#"><i class="bi bi-chevron-double-right"></i> What are transfer pricing methods?</a></li>
                                    <li><a href="#"><i class="bi bi-chevron-double-right"></i> Comparable Uncontrolled Price (CUP) Method</a></li>
                                    <li><a href="#"><i class="bi bi-chevron-double-right"></i> Resale Price (RP) Method</a></li>
                                    <li><a href="#"><i class="bi bi-chevron-double-right"></i> Cost Plus (CP) Method</a></li>
                                    <li><a href="#"><i class="bi bi-chevron-double-right"></i> Transactional Net Margin Method (“TNMM”)</a></li>
                                    <li><a href="#"><i class="bi bi-chevron-double-right"></i> Profit Split (PS) Method</a></li>
                                    <li><a href="#"><i class="bi bi-chevron-double-right"></i> What are profit level indicators?</a></li>
                                    <li><a href="#"><i class="bi bi-chevron-double-right"></i> How often do I need to perform a benchmarking study?</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Faq;