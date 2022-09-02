import React from "react";

export default function Home() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>RE&RAM</title>
      <meta content="" name="description" />
      <meta content="" name="keywords" />
      {/* Favicons */}
      <link href="img/favicon.png" rel="icon" />
      <link href="img/apple-touch-icon.png" rel="apple-touch-icon" />
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet"
      />
      {/* Vendor CSS Files */}
      <link href="vendor/aos/aos.css" rel="stylesheet" />
      <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
      <link
        href="vendor/bootstrap-icons/bootstrap-icons.css"
        rel="stylesheet"
      />
      <link href="vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
      <link href="vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
      <link href="vendor/remixicon/remixicon.css" rel="stylesheet" />
      <link href="vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />

      {/* Template Main CSS File */}
      <link href="css/style.css" rel="stylesheet" />

      {/* ======= Header ======= */}
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            <h1><a href="#hero">RE&RAM</a></h1>
          </div>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Inicio
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  Nosotros
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#services">
                  Servicios
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#team">
                  Equipo
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#pricing">
                  Precios
                </a>
              </li>
              <li>
                <a className="nav-link scrollto text-success" href="#">
                  Hazte Socio
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contacto
                </a>
              </li>
              <li>
                <a className="getstarted scrollto" href="#about">
                  <i className="bi bi-person m-1" /> Mi Cuenta
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          {/* .navbar */}
        </div>
      </header>
      {/* End Header */}
      {/* ======= Hero Section ======= */}
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">Tus paquetes llegan a todo el <span className="text-primary">país</span><i className="bi bi-geo-alt" /></h1>
              <h2 data-aos="fade-up" data-aos-delay={400}>
                Ofrecemos un plan logístico, para satisfacer los requerimientos de nuestros clientes.
              </h2>
              <div data-aos="fade-up" data-aos-delay={800}>
                <a href="#about" className="btn-get-started scrollto">
                  <i className="bi bi-search" /> Rastrea tu paquete
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay={200} >
              <img src="img/hero-img.png" className="img-fluid animated" alt="..." />
            </div>
          </div>
        </div>
      </section>
      {/* End Hero */}
      <main id="main">
        {/* ======= Clients Section ======= */}
        <section id="clients" className="clients clients">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-4 col-6">
                <img src="img/clients/client-1.png" className="img-fluid" alt="" data-aos="zoom-in" />
              </div>
              <div className="col-lg-2 col-md-4 col-6">
                <img src="img/clients/client-2.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay={100} />
              </div>
              <div className="col-lg-2 col-md-4 col-6">
                <img src="img/clients/client-3.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay={200} />
              </div>
              <div className="col-lg-2 col-md-4 col-6">
                <img src="img/clients/client-4.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay={300} />
              </div>
              <div className="col-lg-2 col-md-4 col-6">
                <img src="img/clients/client-5.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay={400} />
              </div>
              <div className="col-lg-2 col-md-4 col-6">
                <img src="img/clients/client-6.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay={500} />
              </div>
            </div>
          </div>
        </section>
        {/* End Clients Section */}
        {/* ======= About Us Section ======= */}
        <section id="about" className="about">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Sobre Nosotros</h2>
            </div>
            <div className="row content">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={150}>
                <p>
                  Es una empresa de servicios aduanales  aéreos , marítimos & terrestres internacional de carga,
                  exportación e importación de mercancía.
                </p>
                <ul>
                  <li>
                    <i className="ri-check-double-line" /> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> Duis aute irure dolor in
                    reprehenderit in voluptate velit
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay={300} >
                <p>
                  Nace con el objetivo principal de satisfacer las necesidades existentes en el área, tales como:
                  <strong> Declaración de mercancías; Inspección; Verificación; Liquidación y Pago de impuestos aduanales.</strong>
                </p>
                <a href="#contact" className="btn-learn-more"><i className="bi bi-hand-index"/> Haz una Sugerencia </a>
              </div>
            </div>
          </div>
        </section>
        {/* End About Us Section */}
        {/* ======= Counts Section ======= */}
        <section id="counts" className="counts">
          <div className="container">
            <div className="row">
              <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay={150} >
                <img src="img/counts-img.jpg" alt="..." className="img-thumbnail rounded" />
              </div>
              <div
                className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0"
                data-aos="fade-left"
                data-aos-delay={300}
              >
                <div className="content d-flex flex-column justify-content-center">
                  <div className="row">
                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="bi bi-globe" />
                        <span data-purecounter-start={0} data-purecounter-end={65} data-purecounter-duration={1} className="purecounter" />
                        <p>
                          <strong>Misión <br/></strong> Ofrecer servicios aduanales con calidad, seguridad y profesionalismo a importadores y exportadores.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="bi bi-journal-richtext" />
                        <span data-purecounter-start={0} data-purecounter-end={85} data-purecounter-duration={1} className="purecounter" />
                        <p>
                          <strong>Visión <br/></strong> Constituirnos en socios de nuestros clientes, entender sus necesidades
                          y satisfacer cada una de ellas mediante una respuesta rápida en el trámite de sus mercancías.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="bi bi-heart" />
                        <span data-purecounter-start={0} data-purecounter-end={18} data-purecounter-duration={1} className="purecounter" />
                        <p>
                          <strong>Valores <br/></strong> VOLUNTAD EMPRESARIAL, RESPETO, ETICA PROFESIONAL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End .content*/}
              </div>
            </div>
          </div>
        </section>
        {/* End Counts Section */}
        {/* ======= Services Section ======= */}
        <section id="services" className="services">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Servicios</h2>
              <p>Ofrecemos un plan logístico, para satisfacer los requerimientos de nuestros clientes en todo lo
                relacionado con el comercio internacional, brindando el mejor servicio al más bajo costo.</p>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
                  <div className="icon">
                    <i className="bi bi-card-checklist" />
                  </div>
                  <h4 className="title">
                    <a href="">Registro único aduanero (RUA)</a>
                  </h4>
                  <p className="description">
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box" data-aos="fade-up" data-aos-delay={200}>
                  <div className="icon">
                    <i className="bi bi-search" />
                  </div>
                  <h4 className="title">
                    <a href="">Inspección</a>
                  </h4>
                  <p className="description">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box" data-aos="fade-up" data-aos-delay={300}>
                  <div className="icon">
                    <i className="bi bi-file-check" />
                  </div>
                  <h4 className="title">
                    <a target="_blank" rel="noreferrer" href="https://www.aduanas.gob.do/de-interes/consultas/registro-courier">Verificación</a>
                  </h4>
                  <p className="description">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa
                    qui officia
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box" data-aos="fade-up" data-aos-delay={400}>
                  <div className="icon">
                    <i className="bi bi-credit-card" />
                  </div>
                  <h4 className="title">
                    <a href="">Liquidación y pago de impuestos aduanales</a>
                  </h4>
                  <p className="description">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui
                    blanditiis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Services Section */}
        {/* ======= More Services Section ======= */}
        <section id="more-services" className="more-services">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex align-items-stretch">
                <div className="card" style={{ backgroundImage: 'url("img/more-services-1.jpg")' }} data-aos="fade-up" data-aos-delay={100}>
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href="">Logística</a>
                    </h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                      tempor ut labore et dolore magna aliqua.
                    </p>
                    <div className="read-more">
                      <a href="#">
                        <i className="bi bi-arrow-right" /> Leer mas
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div className="card" style={{ backgroundImage: 'url("img/more-services-2.jpg")' }} data-aos="fade-up" data-aos-delay={200}>
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href="">Empaquetado</a>
                    </h5>
                    <p className="card-text">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                      doloremque laudantium, totam rem.
                    </p>
                    <div className="read-more">
                      <a href="#">
                        <i className="bi bi-arrow-right" /> Leer mas
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-stretch mt-4">
                <div className="card" style={{ backgroundImage: 'url("img/more-services-3.jpg")' }} data-aos="fade-up" data-aos-delay={100}>
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href="">Delivery</a>
                    </h5>
                    <p className="card-text">
                      Nemo enim ipsam voluptatem quia voluptas sit aut odit aut
                      fugit, sed quia magni dolores.
                    </p>
                    <div className="read-more">
                      <a href="#"><i className="bi bi-arrow-right" /> Leer mas </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-stretch mt-4">
                <div className="card" style={{ backgroundImage: 'url("img/more-services-4.jpg")' }} data-aos="fade-up" data-aos-delay={200} >
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href="">Soporte 24/7</a>
                    </h5>
                    <p className="card-text">
                      Nostrum eum sed et autem dolorum perspiciatis. Magni porro
                      quisquam laudantium voluptatem.
                    </p>
                    <div className="read-more">
                      <a href="#"><i className="bi bi-arrow-right" /> Leer mas </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End More Services Section */}
        {/* ======= Features Section ======= */}
        <section id="features" className="features">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Beneficios</h2>
              <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
            </div>
            <div className="row" data-aos="fade-up" data-aos-delay={300}>
              <div className="col-lg-3 col-md-4">
                <div className="icon-box">
                  <i className="bi bi-bookmark-check" style={{ color: "#ffbb2c" }} />
                  <h3>
                    <a href="">Acumula puntos</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div className="icon-box">
                  <i className="ri-bar-chart-box-line" style={{ color: "#5578ff" }} />
                  <h3>
                    <a href="">De 0 a 10 libras 2 libras gratis</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div className="icon-box">
                  <i className="bi bi-box" style={{ color: "#e80368" }} />
                  <h3>
                    <a href="">Cada 3 pedidos 2 libras gratis</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                <div className="icon-box">
                  <i className="bi bi-cash-coin" style={{ color: "#e361ff" }} />
                  <h3>
                    <a href="">Devolución Gratis</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="bi bi-car-front" style={{ color: "#47aeff" }} />
                  <h3>
                    <a href="">Delivery hasta donde estés</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-gradienter-line" style={{ color: "#ffa76e" }} />
                  <h3>
                    <a href="">Drive-thru para tu comodidad</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Features Section */}
        {/* ======= Testimonials Section ======= */}
        <section id="testimonials" className="testimonials section-bg">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Testimonios</h2>
              <p>Magnam dolores commodi suscipit eum quidem consectetur velit</p>
            </div>
            <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay={100}>
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img src="img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        Proin iaculis purus consequat sem cure digni ssim donec
                        porttitora entum suscipit rhoncus. Accusantium quam,
                        ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                        risus at semper.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                      </p>
                    </div>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img src="img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                      <h3>Sara Wilsson</h3>
                      <h4>Designer</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        Export tempor illum tamen malis malis eram quae irure esse
                        labore quem cillum quid cillum eram malis quorum velit fore
                        eram velit sunt aliqua noster fugiat irure amet legam anim
                        culpa.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                      </p>
                    </div>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img src="img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                      <h3>Jena Karlis</h3>
                      <h4>Store Owner</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        Enim nisi quem export duis labore cillum quae magna enim
                        sint quorum nulla quem veniam duis minim tempor labore quem
                        eram duis noster aute amet eram fore quis sint minim.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                      </p>
                    </div>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img src="img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="..." />
                      <h3>Matt Brandon</h3>
                      <h4>Freelancer</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                        multos export minim fugiat minim velit minim dolor enim duis
                        veniam ipsum anim magna sunt elit fore quem dolore labore
                        illum veniam.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                      </p>
                    </div>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img src="img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="..." />
                      <h3>John Larson</h3>
                      <h4>Entrepreneur</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        Quis quorum aliqua sint quem legam fore sunt eram irure
                        aliqua veniam tempor noster veniam enim culpa labore duis
                        sunt culpa nulla illum cillum fugiat legam esse veniam culpa
                        fore nisi cillum quid.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                      </p>
                    </div>
                  </div>
                </div>
                {/* End testimonial item */}
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
        </section>
        {/* End Testimonials Section */}
        {/* ======= Team Section ======= */}
        <section id="team" className="team section-bg">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Equipo</h2>
              <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay={100}>
                  <div className="member-img">
                    <img src="img/team/team-1.jpg" className="img-fluid rounded" alt="...." />
                    <div className="social">
                      <a href="#"><i className="bi bi-twitter" /></a>
                      <a href="#"><i className="bi bi-facebook" /></a>
                      <a href="#"><i className="bi bi-instagram" /></a>
                      <a href="#"><i className="bi bi-linkedin" /></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Francisco Ramirez</h4>
                    <span>Chief Executive Officer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay={200}>
                  <div className="member-img">
                    <img src="img/team/team-2.jpg" className="img-fluid rounded" alt="..." />
                    <div className="social">
                      <a href="#"><i className="bi bi-twitter" /></a>
                      <a href="#"><i className="bi bi-facebook" /></a>
                      <a href="#"><i className="bi bi-instagram" /></a>
                      <a href="#"><i className="bi bi-linkedin" /></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Sarah Jhonson</h4>
                    <span>Product Manager</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay={300}>
                  <div className="member-img">
                    <img src="img/team/team-3.jpg" className="img-fluid rounded" alt="..." />
                    <div className="social">
                      <a href="#"><i className="bi bi-twitter" /></a>
                      <a href="#"><i className="bi bi-facebook" /></a>
                      <a href="#"><i className="bi bi-instagram" /></a>
                      <a href="#"><i className="bi bi-linkedin" /></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay={400}>
                  <div className="member-img">
                    <img src="img/team/team-4.jpg" className="img-fluid rounded" alt="..." />
                    <div className="social">
                      <a href="#"><i className="bi bi-twitter" /></a>
                      <a href="#"><i className="bi bi-facebook" /></a>
                      <a href="#"><i className="bi bi-instagram" /></a>
                      <a href="#"><i className="bi bi-linkedin" /></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Amanda Jepson</h4>
                    <span>Accountant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Team Section */}
        {/* ======= Pricing Section ======= */}
        <section id="pricing" className="pricing">
          <div className="container">
            <div className="section-title">
              <h2>Precios</h2>
              <p>Con los mejores precios disponibles actualmente en todo el pais</p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="box" data-aos="zoom-in-right" data-aos-delay={200}>
                  <h3>Gratis</h3>
                  <h4>
                    <sup>$</sup>0<span> / mes</span>
                  </h4>
                  <ul>
                    <li>Aida dere</li>
                    <li>Nec feugiat nisl</li>
                    <li>Nulla at volutpat dola</li>
                    <li className="na">Pharetra massa</li>
                    <li className="na">Massa ultricies mi</li>
                  </ul>
                  <div className="btn-wrap">
                    <a href="#" className="btn-buy">Comprar</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
                <div className="box recommended" data-aos="zoom-in" data-aos-delay={100} >
                  <h3>Corporativo</h3>
                  <h4>
                    <sup>$</sup>19<span> / mes</span>
                  </h4>
                  <ul>
                    <li>Aida dere</li>
                    <li>Nec feugiat nisl</li>
                    <li>Nulla at volutpat dola</li>
                    <li>Pharetra massa</li>
                    <li className="na">Massa ultricies mi</li>
                  </ul>
                  <div className="btn-wrap">
                    <a href="#" className="btn-buy">Comprar</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                <div className="box" data-aos="zoom-in-left" data-aos-delay={200}>
                  <h3>Premium</h3>
                  <h4>
                    <sup>$</sup>29<span> / mes</span>
                  </h4>
                  <ul>
                    <li>Aida dere</li>
                    <li>Nec feugiat nisl</li>
                    <li>Nulla at volutpat dola</li>
                    <li>Pharetra massa</li>
                    <li>Massa ultricies mi</li>
                  </ul>
                  <div className="btn-wrap">
                    <a href="#" className="btn-buy">Comprar ahora</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Pricing Section */}
        {/* ======= F.A.Q Section ======= */}
        <section id="faq" className="faq">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Preguntas Frecuentes</h2>
            </div>
            <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100} >
              <div className="col-lg-5">
                <i className="ri-question-line" />
                <h4>¿Cómo puedo pagar los impuestos aduanales?</h4>
              </div>
              <div className="col-lg-7">
                <p>
                  El pago de los impuestos se realiza a la DGA (Dirección General de Aduanas),
                  se puede realizar de forma física en ventanilla en el Banco de Reservas o con
                  el Internet Banking de tu preferencia.
                </p>
              </div>
            </div>
            {/* End F.A.Q Item*/}
            <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={200} >
              <div className="col-lg-5">
                <i className="ri-question-line" />
                <h4>
                  Vine a retirar un paquete, pero no soy el titular de la cuenta, ¿qué debo hacer?
                </h4>
              </div>
              <div className="col-lg-7">
                <p>
                  El titular de la cuenta debe enviar una autorización vía E-mail al dpto. de servicio
                  al cliente con los datos de la persona que retirara el paquete. Esta persona estará
                  autorizada permanentemente en la cuenta del cliente para realizar retiros.
                </p>
              </div>
            </div>
            {/* End F.A.Q Item*/}
            <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={300} >
              <div className="col-lg-5">
                <i className="ri-question-line" />
                <h4>
                  Tengo una cuenta personal y quiero cambiarla a corporativa, ¿cual es el proceso y si tiene
                  algún beneficio adicional o tarifa especial por ser una compañía?
                </h4>
              </div>
              <div className="col-lg-7">
                <p>
                  Para proceder al cambio, debe llenar el formulario de cuenta corporativa, el cual debe estar
                  firmado y sellado, tener anexo copia de la cédula, del carnet de RNC y copia del registro mercantil.
                  Asimismo es necesario completar el formulario de autorización de enlace al SIGA. Las cuentas corporativas
                  poseen beneficios adicionales tales como la asignación de un ejecutivo para darle estrecho seguimiento a
                  sus importaciones y se le asigna tarifa especial según el movimiento que tenga la cuenta.
                </p>
              </div>
            </div>
            {/* End F.A.Q Item*/}
            <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={400} >
              <div className="col-lg-5">
                <i className="ri-question-line" />
                <h4>Quiero comprar una mercancía por internet y no tengo forma de pagar al suplidor, ¿puedo hacerlo con RE & RAM?</h4>
              </div>
              <div className="col-lg-7">
                <p>
                  Realizamos el servicio de compra por internet en nuestra tienda virtual, solo debe pasar por
                  nuestra oficina con la información del artículo que desea comprar.
                </p>
              </div>
            </div>
            {/* End F.A.Q Item*/}
            <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={500} >
              <div className="col-lg-5">
                <i className="ri-question-line" />
                <h4>
                  Deseo enviar un paquete desde Santo Domingo a USA o a cualquier parte del mundo, ¿puedo hacerlo en RE & RAM?
                </h4>
              </div>
              <div className="col-lg-7">
                <p>
                  Este es un servicio que brinda RE & RAM con el cual puede realizar envíos de documentos y paquetes a
                  cualquier parte del mundo sin importar el peso del mismo.
                </p>
              </div>
            </div>
            {/* End F.A.Q Item*/}
          </div>
        </section>
        {/* End F.A.Q Section */}
        {/* ======= Contact Section ======= */}
        <section id="contact" className="contact">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Contáctanos</h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100} >
                <div className="contact-about">
                  <h3>RE&RAM</h3>
                  <p>
                    Es una empresa de servicios aduanales aéreos , marítimos y terrestres internacionales de carga, exportación e importación de mercancía.
                  </p>
                  <div className="social-links">
                    <a href="#" className="twitter">
                      <i className="bi bi-twitter" />
                    </a>
                    <a href="#" className="facebook">
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="#" className="instagram">
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="#" className="linkedin">
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay={200} >
                <div className="info">
                  <div>
                    <i className="ri-map-pin-line" />
                    <p>
                      C/ 3ra #35-A, Ensanche Isabelita,
                      <br />
                      Santo Domingo Este, Rep. Dom.
                    </p>
                  </div>
                  <div>
                    <i className="ri-mail-send-line" />
                    <p>reyramasuntos@gmail.com</p>
                  </div>
                  <div>
                    <i className="ri-phone-line" />
                    <p>
                      +1 809-868-3129 <br />
                      EE.UU. 929-375-2165
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12" data-aos="fade-up" data-aos-delay={300} >
                <form className="php-email-form" >
                  <div className="form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Nombre completo" required="true" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Tu correo" required="true" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Asunto" required="true" />
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" name="message" rows={5} placeholder="Mensaje" required="true" defaultValue={""} />
                  </div>
                  <div className="my-3">
                    <div className="loading">Cargando</div>
                    <div className="error-message" />
                    <div className="sent-message">
                      Su mensaje ha sido enviado. Gracias!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit"><i className="bi bi-send" /> Enviar Sugerencia</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* End Contact Section */}
      </main>
      {/* End #main */}
      {/* ======= Footer ======= */}
      <footer id="footer">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 text-lg-left text-center">
              <div className="copyright">
                © 2022 <strong>RE&RAM</strong>. Todos los derechos reservados
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="footer-links text-lg-right text-center pt-2 pt-lg-0">
                <a href="#intro" className="scrollto">Inicio</a>
                <a href="#about" className="scrollto">Nosotros</a>
                <a href="#">Politica de Privacidad</a>
                <a href="#">Terminos de Uso</a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
      {/* End Footer */}

      {/* <!-- Vendor JS Files --> */}
      <script src="vendor/purecounter/purecounter_vanilla.js" />
      <script src="vendor/aos/aos.js" />
      <script src="vendor/bootstrap/js/bootstrap.bundle.min.js" />
      <script src="vendor/glightbox/js/glightbox.min.js" />
      <script src="vendor/isotope-layout/isotope.pkgd.min.js" />
      <script src="vendor/swiper/swiper-bundle.min.js" />
      <script src="vendor/php-email-form/validate.js" />

      {/* <!-- Template Main JS File --> */}
      <script src="js/main.js" />
    </>
  )
} 
