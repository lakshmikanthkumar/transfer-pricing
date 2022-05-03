
function Header() {
  
  return (
    <div>
      <section id="topbar" className="d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-phone-vibrate d-flex align-items-center ms-4"><span> +61 (3) 5911 7001</span></i>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
            <a href="#" className="googleplus"><i className="bi bi-google"></i></a>
            <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
          </div>
        </div>
      </section>
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex justify-content-between">
          <div id="logo">
            <a href='/Home'>
              <img src="./brandLogo.jpg" alt="brandlogo" />
            </a>
          </div>
          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto active"><a href="/Home">Home</a></a></li>
              <li><a className="nav-link scrollto"><a href="/About">About Us</a></a></li>
              <li><a className="nav-link scrollto"><a href="/BenchmarkingServices">Benchmarking Services</a></a></li>
              <li><a className="nav-link scrollto"><a href="/Faq">FAQ’s</a></a></li>
              <li><a className="nav-link scrollto"><a href="/Knowledge">Knowledge</a></a></li>
              <li><a className="nav-link scrollto"><a href="/Contact">Contact</a></a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;