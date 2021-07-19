import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <footer class="py-1 bg-dark fixed-bottom">
        <div class="container">
          <p class="m-0 text-center text-white">
            Copyright &copy; Relax and Revive Spa 2021
          </p>
        </div>
        <nav className="navbar">
        <div className="links">
          <a id ="hyperlink" className="hyperlink" href="/home">Home </a>
          <a className="hyperlink" href="/about"> About</a>
          <a className="hyperlink" href="/services"> Services</a>
          <a className="hyperlink" href="/items"> Products</a>
          <a className="hyperlink" href="/contact">Contact</a>
        </div>
      </nav>  
      </footer>
    </div>
  );
}

export default Footer;
