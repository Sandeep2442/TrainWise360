import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
  <div class="bhalu">
       
  {/* <!-- ======= Hero Section ======= --> */}
  <section id="hero">
    <div class="hero-container" data-aos="fade-up" data-aos-delay="150">
      <h1>Plan. Launch. Grow.</h1>
      <h2>Making online fitness traning truly personal</h2>
      <div class="d-flex">
        <a href="track" class="btn-get-started scrollto">Get Started</a>
        
      </div>
    </div>
  </section>
  {/* <!-- End Hero --> */}

  <main id="main">

    {/* <!-- ======= About Boxes Section ======= --> */}
    <section id="about-boxes" class="about-boxes">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div class="card">
              <img src="assets/img/fitness/images5.png" class="card-img-top" alt="..."/>
              <div class="card-icon">
                <i class="ri-brush-4-line"></i>
              </div>
              <div class="card-body">
                <h5 class="card-title"><a href="">Our Mission</a></h5>
                <p class="card-text">The primary goal of the TrainWise360 project is to develop a comprehensive fitness application that empowers users to take control of their health and fitness journey by providing them with the necessary tools and resources to plan, track, and achieve their fitness goals effectively. This application aims to cater to users of all fitness levels and preferences, offering a range of features and functionalities to support their individual needs and preferences. </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <div class="card">
              <img src="assets/img/fitness/image(6).jpg" class="card-img-top" alt="..."/>
              <div class="card-icon">
                <i class="ri-calendar-check-line"></i>
              </div>
              <div class="card-body">
                <h5 class="card-title"><a href="">Our Plan</a></h5>
                <p class="card-text">Certainly! Crafting an effective fitness plan involves a combination of various elements, including cardiovascular exercise, strength training, flexibility work, and proper nutrition. Here's a general outline for a well-rounded fitness plan. Keep in mind that individual needs and goals may vary, so it's essential to tailor the plan to your specific circumstances. </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
            <div class="card">
              <img src="assets/img/fitness/image7.png" class="card-img-top" alt="..."/>
              <div class="card-icon">
                <i class="ri-movie-2-line"></i>
              </div>
              <div class="card-body">
                <h5 class="card-title"><a href="">Our Vision</a></h5>
                <p class="card-text">Our vision at TrainWise360 is to empower individuals on their fitness journey by providing a comprehensive and personalized solution that goes beyond just tracking activities. We believe in fostering a holistic approach to fitness, encompassing physical exercise, nutrition, and overall well-being. Our goal is to inspire and guide users to lead healthier and more active lifestyles, making fitness accessible and enjoyable for everyone. </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End About Boxes Section --> */}

    {/* <!-- ======= Features Section ======= --> */}
    <section id="features" class="features">
      <div class="container" data-aos="fade-up">

        <ul class="nav nav-tabs row d-flex">
          <li class="nav-item col-3">
            <a class="nav-link active show" data-bs-toggle="tab" href="#tab-1">
              <i class="ri-gps-line"></i>
              <h4 class="d-none d-lg-block">One on One personal training</h4>
            </a>
          </li>
          <li class="nav-item col-3">
            <a class="nav-link" data-bs-toggle="tab" href="#tab-2">
              <i class="ri-body-scan-line"></i>
              <h4 class="d-none d-lg-block">Comptition prep</h4>
            </a>
          </li>
          <li class="nav-item col-3">
            <a class="nav-link" data-bs-toggle="tab" href="#tab-3">
              <i class="ri-sun-line"></i>
              <h4 class="d-none d-lg-block">Fitness and Health</h4>
            </a>
          </li>
          <li class="nav-item col-3">
            <a class="nav-link" data-bs-toggle="tab" href="#tab-4">
              <i class="ri-store-line"></i>
              <h4 class="d-none d-lg-block">Foods to Eat to Gain Muscle</h4>
            </a>
          </li>
        </ul>

        <div class="tab-content">
          <div class="tab-pane active show" id="tab-1">
            <div class="row">
              <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>One of the biggest advantages of one-on-one personal training is the uninterrupted attention you receive from your trainer. </h3>
                <p class="fst-italic">
                Personal training offers a personalized approach to fitness that
               can help you achieve your goals more efficiently and effectively. 
               In this article, we'll elaborate on the top five advantages of
                one-on-one training and why it may be the right choice for you.
                </p>
                <ul>
                  <li><i class="ri-check-double-line"></i> One of the biggest advantages of one-on-one personal training is the uninterrupted attention you receive from your trainer.</li>
                  <li><i class="ri-check-double-line"></i> Showcase a designated area within the gym where one-on-one personal training sessions take place.</li>
                  <li><i class="ri-check-double-line"></i> By committing to personal training, you are more likely to see your desired results faster than if you were going to a gym and working out by yourself.</li>
                </ul>
                <p>
                  When selecting or creating images, ensure they reflect the values,
                  atmosphere, and quality of service offered by your gym's personal
                  training program. High-quality, authentic images can help attract 
                  clients and showcase the benefits of investing in one-on-one personal 
                  training sessions at your facility.
                </p>
              </div>
              <div class="col-lg-6 order-1 order-lg-2 text-center">
                <img src="assets/img/fitness/man.jpg" alt="" class="img-fluid"/>
              </div>
            </div>
          </div>
          <div class="tab-pane" id="tab-2">
            <div class="row">
              <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Neque exercitationem debitis soluta quos debitis quo mollitia officia est</h3>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
                <p class="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><i class="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><i class="ri-check-double-line"></i> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</li>
                  <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                </ul>
              </div>
              <div class="col-lg-6 order-1 order-lg-2 text-center">
                <img src="assets/img/fitness/we.jpg" alt="" class="img-fluid"/>
              </div>
            </div>
          </div>
          <div class="tab-pane" id="tab-3">
            <div class="row">
              <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Health is a broader concept that encompasses physical, mental, and social well-being.</h3>
                <p>
                Fitness refers to the ability to perform physical activities effectively and 
                efficiently. It involves various components, including cardiovascular endurance,
                 muscular strength, muscular endurance, flexibility, and body composition.
                </p>
                <ul>
                  <li><i class="ri-check-double-line"></i> Consuming a balanced diet rich in nutrients to support overall health and energy levels.</li>
                  <li><i class="ri-check-double-line"></i> Consuming a balanced diet rich in nutrients to support overall health and energy levels.</li>
                  <li><i class="ri-check-double-line"></i>  Employing techniques such as meditation, mindfulness, or relaxation exercises to manage stress and promote mental health.</li>
                </ul>
                <p class="fst-italic">
                By prioritizing both fitness and health, individuals can improve their overall quality of life and reduce
                 the risk of chronic diseases and health complications.
                </p>
              </div>
              <div class="col-lg-6 order-1 order-lg-2 text-center">
                <img src="assets/img/fitness/php.jpg" alt="" class="img-fluid"/>
              </div>
            </div>
          </div>
          <div class="tab-pane" id="tab-4">
            <div class="row">
              <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>The best foods to build muscle include items high in protein and low in
                   saturated fat. That said, exercise and a well-balanced diet that also 
                  includes carbs and fats are the best for optimal results.</h3>
                <p>
                Nutrition and regular exercise are both very important for muscle building.
                Foods that are high in protein play a key roleTrusted Source in retaining and building muscle mass.
                Alongside resistance training, research suggests consuming 1.4–2 grams (g)Trusted Source of protein for each kilogram of body weight per day to maximize muscle building.
                </p>
                
                <ul>
                  <li><i class="ri-check-double-line"></i> 1. Eggs</li>
                  <li><i class="ri-check-double-line"></i> 2. Salmon</li>
                  <li><i class="ri-check-double-line"></i>3. Chicken breast</li>
                </ul>
              </div>
              <div class="col-lg-6 order-1 order-lg-2 text-center">
                <img src="assets/img/fitness/app.jpg" alt="" class="img-fluid"/>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End Features Section --> */}

    {/* <!-- ======= Services Section ======= --> */}
    <section id="services" class="services section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Services</h2>
          <p>Check our Services</p>
        </div>

        <div class="row" data-aos="fade-up" data-aos-delay="200">
          <div class="col-md-6">
            <div class="icon-box">
              <i class="bi bi-laptop"></i>
              <h4><a href="#">Lorem Ipsum</a></h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>
          <div class="col-md-6 mt-4 mt-md-0">
            <div class="icon-box">
              <i class="bi bi-bar-chart"></i>
              <h4><a href="#">Fitness Assessments and Consultations</a></h4>
              <p>Conduct fitness assessments and consultations to
                 evaluate clients' current fitness levels, identify 
                 areas for improvement, and develop personalized fitness
                plans based on their goals and preferences.
              </p>
            </div>
          </div>
          <div class="col-md-6 mt-4 mt-md-0">
            <div class="icon-box">
              <i class="bi bi-brightness-high"></i>
              <h4><a href="#">Data Analysis and Insights</a></h4>
              <p>Utilize data analytics and machine learning algorithms to
                 analyze user data, identify trends, and provide actionable 
                 insights into health, fitness, and performance optimization.
              </p>
            </div>
          </div>
          <div class="col-md-6 mt-4 mt-md-0">
            <div class="icon-box">
              <i class="bi bi-briefcase"></i>
              <h4><a href="#">Customer Support and Education</a></h4>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>
          <div class="col-md-6 mt-4 mt-md-0">
            <div class="icon-box">
              <i class="bi bi-card-checklist"></i>
              <h4><a href="#">Magni Dolore</a></h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>
          <div class="col-md-6 mt-4 mt-md-0">
            <div class="icon-box">
              <i class="bi bi-clock"></i>
              <h4><a href="#">Eiusmod Tempor</a></h4>
              <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
            </div>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End Services Section --> */}
    
    {/* <!-- ======= Portfolio Section ======= --> */}
    <section id="portfolio" class="portfolio">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Portfolio</h2>
          <p>Check our Portfolio</p>
        </div>
        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/gallery-1.jpg" class="img-fluid" alt=""/>
            <div class="portfolio-info">
              <a href="assets/img/gallery-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 1"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="assets/img/gallery-2.jpg" class="img-fluid" alt=""/>
            <div class="portfolio-info">
              <a href="assets/img/gallery-2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 3"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/gallery-3.jpg" class="img-fluid" alt=""/>
            <div class="portfolio-info">
              <a href="assets/img/gallery-3.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 2"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="assets/img/gallery-4.jpg" class="img-fluid" alt=""/>
            <div class="portfolio-info">
              <a href="assets/img/gallery-4.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 2"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="assets/img/gallery-5.jpg"class="img-fluid" alt=""/>
            <div class="portfolio-info">
              <a href="assets/img/gallery-5.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 2"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src="assets/img/gallery-6.jpg" class="img-fluid" alt=""/>
            <div class="portfolio-info">
              <a href="assets/img/gallery-6.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 3"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="assets/img/gallery-7.jpg" class="img-fluid" alt=""/>
            <div class="portfolio-info">
              <a href="assets/img/gallery-7.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 1"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src="assets/img/gallery-8.jpg" class="img-fluid" alt=""/>
            <div class="portfolio-info">
              <a href="assets/img/gallery-8.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 3"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src="assets/img/gallery-9.jpg" class="img-fluid" alt=""/>
            <div class="portfolio-info">
              <a href="assets/img/gallery-9.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 3"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Portfolio Section --> */}
   </main>
  {/* <!-- End #main --> */}

  {/* <!-- ======= Footer ======= --> */}
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6">
            <div class="footer-info">
              <h3>TrainWise360</h3>
              <p>
                A108 Adam Street <br/>
                NY 535022, USA<br/><br/>
                <strong>Phone:</strong> +1 5589 55488 55<br/>
                <strong>Email:</strong> info@example.com<br/>
              </p>
              <div class="social-links mt-3">
                <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="http://localhost:3000/">Home</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="about">About us</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="tutorials">Guide</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="fit">Exerices</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="contact">Contact</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form action="" method="post">
              <input type="email" name="email"/>
              <input type="submit" value="Subscribe"/>
            </form>

          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>TrainWise360</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        
        Designed by <a href="#">Balaji Infotech</a>
      </div>
    </div>
  </footer>
  {/*  <!-- End Footer --> */}

  {/* <div id="preloader"></div> */}
  {/* <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a> */}




    </div>
  )
}

export default Home;
