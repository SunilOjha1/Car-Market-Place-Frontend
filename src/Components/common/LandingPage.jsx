import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/landingPage.css";
import "../../assets/landing/css/style.css";
import "../../assets/landing/css/responsive.css";
import about2image from "../../assets/landing/images/about-img2.png";
import sliderImage from "../../assets/landing/images/slider-img.png";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";

const carList = [

  { id: 1, name: "Mercedes-Benz S-Class", price: 7000000, description: "Mercedes-Benz S-Class is a luxury sedan known for its premium features and smooth ride." },
  { id: 2, name: "BMW X5", price: 6500000, description: "BMW X5 is a midsize luxury SUV offering powerful performance and advanced technology." },
  { id: 3, name: "Audi Q7", price: 6200000, description: "Audi Q7 is a spacious luxury SUV with a stylish design and cutting-edge features." },
  { id: 4, name: "Tesla Model S", price: 7500000, description: "Tesla Model S is a high-performance electric sedan with exceptional range and autopilot capabilities." },
  { id: 5, name: "Toyota Land Cruiser", price: 8500000, description: "Toyota Land Cruiser is a robust SUV known for its off-road capabilities and durability." },

]

const LandingPage = () => {
  return (
    <div className="hero_area">
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="index.html">
              <span>
                E-Advertisement
              </span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="s-1"> </span>
              <span className="s-2"> </span>
              <span className="s-3"> </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav  ">
                  {/* <li className="nav-item active">
              <a className="nav-link" href="index.html">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about.html">
                {" "}
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="service.html">
                {" "}
                Services{" "}
              </a>
            </li> */}
                  {/* <li className="nav-item">
              <a className="nav-link" href="#contactLink">
                Contact Us
              </a>
            </li> */}
                </ul>
              </div>
              <div className="quote_btn-container ">
                <div>
                  <Link to="/carlist"><Button color="info" variant="contained">Car List</Button></Link>
                </div>
                <div className="btn-box">
                  <Link to="/login" className="btn-1">
                    <Button color="primary" variant="contained">Admin Login</Button>
                  </Link>
                  <Link to="/login" className="btn-2">
                    <Button color="primary" variant="contained">User Login</Button>
                  </Link>
                </div>
                <div>
                  <Logout />
                </div>
                <form className="form-inline">
                  <button
                    className="btn  my-2 my-sm-0 nav_search-btn"
                    type="submit"
                  />
                </form>
              </div>
            </div>

          </nav>
        </div>
      </header>

      <section className=" slider_section ">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active carousel-item-left">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 ">
                    <div className="detail_box">
                      <h1>E-ADVERTISEMENT</h1>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn-1">
                          Contact Us
                        </a>
                        <a href="" className="btn-2">
                          Get A Quote
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item carousel-item-next carousel-item-left">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 ">
                    <div className="detail_box">
                      <h1>The best marketing</h1>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn-1">
                          Contact Us
                        </a>
                        <a href="" className="btn-2">
                          Get A Quote
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 ">
                    <div className="detail_box">
                      <h1>The best marketing</h1>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking
                      </p>
                      <div className="btn-box">
                        <a href="" className="btn-1">
                          Contact Us
                        </a>
                        <a href="" className="btn-2">
                          Get A Quote
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel_btn-container">
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
      <section className="about_section ">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src={about2image} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About Us</h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <h1>Featured Cars</h1>
        <div style={{ display: "flex", gap: 5, padding: 50}}>
        {
          carList.map((car) => (
            <Card sx={{ maxWidth: 345 }} key={car.id}>
                <CardContent>

                  <>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", }} >
                      <Typography gutterBottom variant="h5" component="div">
                        {car.name}
                      </Typography>
                      <Typography>
                        &#8377;{car.price}
                      </Typography>
                    </div>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {car.description}
                    </Typography>
                  </>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
          ))
        }
        </div>
      </section>
    </div>
  );
};

export default LandingPage;