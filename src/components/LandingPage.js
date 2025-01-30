import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Asegúrate de incluir estilos adicionales si es necesario.

const LandingPage = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Mini Single Page Application API
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    <i className="fas fa-sign-in-alt"></i> Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    <i className="fas fa-user-plus"></i> Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      
      <main>
        {/* Hero Section with Parallax Effect */}
        <div className="hero parallax">
          <img src="/images/hero.jpg" alt="Hero" className="img-fluid" />
          <div className="hero-text">
            <h1>Welcome to Our Application</h1>
            <p>Discover what we have for you</p>
          </div>
        </div>

        {/* Card Section */}
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src="/images/anteojos.jpg" className="card-img-top" alt="Slide 1" />
                <div className="card-body">
                  <h5 className="card-title">Articles that dress you!</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">DETAILS</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" aria-hidden="true">
                <img src="/images/audifonos.jpg" className="card-img-top" alt="Slide 2" />
                <div className="card-body">
                  <h5 className="card-title">Listen to your music</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">DETAILS</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="/images/smartphone.jpg" className="card-img-top" alt="Slide 3" />
                <div className="card-body">
                  <h5 className="card-title">Variety of smart phones</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">DETAILS</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-light text-center text-lg-start">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">Thank you for choosing us.</h5>
              <p>
              You make us great! We will always be up to date with the latest technologies to facilitate your access to it.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">

            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-0">Contact us</h5>
              <ul className="list-unstyled">
                <li><p><i className="fas fa-home me-3"></i> MetroCentro 8va Etapa, Local #123, San Salvador, El Salvador.</p></li>
                <li><p><i className="fas fa-envelope me-3"></i> info@example.com</p></li>
                <li><p><i className="fas fa-phone me-3"></i> + 503 2220-0000</p></li>
                <li><p><i className="fas fa-print me-3"></i> + 01 234 567 89</p></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: "#3b5998" }} href="#!" role="button"><i className="fab fa-facebook-f"></i></a>
          <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: "#55acee" }} href="#!" role="button"><i className="fab fa-twitter"></i></a>
          <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: "#dd4b39" }} href="#!" role="button"><i className="fab fa-google"></i></a>
          <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: "#ac2bac" }} href="#!" role="button"><i className="fab fa-instagram"></i></a>
          <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: "#0082ca" }} href="#!" role="button"><i className="fab fa-linkedin-in"></i></a>
          <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: "#333333" }} href="#!" role="button"><i className="fab fa-github"></i></a>
          <p>Developed by Luis Tobar | Kodigo FSJ24A | Coach Kenia Paíz </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;