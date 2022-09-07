import React, { Fragment } from "react";

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
      <link href={"https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"} rel="stylesheet" />
      {/* Vendor CSS Files */}
      <link href={"vendor/aos/aos.css"} rel="stylesheet" />
      <link href={"vendor/bootstrap/css/bootstrap.min.css"} rel="stylesheet" />
      <link href={"vendor/bootstrap-icons/bootstrap-icons.css"} rel="stylesheet" />
      <link href={"vendor/boxicons/css/boxicons.min.css"} rel="stylesheet" />
      <link href={"vendor/glightbox/css/glightbox.min.css"} rel="stylesheet" />
      <link href={"vendor/remixicon/remixicon.css"} rel="stylesheet" />
      <link href={"vendor/swiper/swiper-bundle.min.css"} rel="stylesheet" />

      {/* Template Main CSS File */}
      <link href={"css/style.css"} rel="stylesheet" />

      {/* ======= Header ======= */}
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            <h1><a href="#hero">RE<span className="text-primary">&</span>RAM</a></h1>
          </div>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">INICIO</a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">NOSOTROS</a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#services">SERVICIOS</a>
              </li>
              <li>
                <a target={"blank"} className="nav-link scrollto" href="https://www.aduanas.gob.do/de-interes/consultas/registro-courier">REGISTRO RUA</a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#pricing">AVISO DGA</a>
              </li>
              <li>
                <a target={"target"} className="nav-link scrollto text-success" href="https://forms.gle/PaTBiSDsqhQdUNqh9">HAZTE SOCIO</a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">CONTACTO</a>
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
              <h1 data-aos="fade-up">Sus paquetes llegan a todo el <span className="text-primary">país</span><i className="bi bi-geo-alt" /></h1>
              <h2 data-aos="fade-up" data-aos-delay={400}>
                Ofrecemos un plan logístico para satisfacer las necesidades de nuestros clientes
              </h2>
              <div data-aos="fade-up" data-aos-delay={800}>
                <button className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <i className="bi bi-search" /> Rastrea tu paquete
                </button>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay={200} >
              <img src={"img/hero-img.png"} className="img-fluid animated" alt="..." />
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
                <a target="_blank" href="https://www.amazon.com/">
                  <img src="img/clients/client-1.png" className="img-fluid" alt="" data-aos="zoom-in" />
                </a>
              </div>
              <div className="col-lg-2 col-md-4 col-6">
                <a href="https://www.ebay.com/" target="_blank">
                  <img src="img/clients/client-2.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay={100} />
                </a>
              </div>
              <div className="col-lg-2 col-md-4 col-6">
                <a href="https://www.westernunion.com/us/en/home.html" target="_blank">
                  <img src="img/clients/client-3.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay={200} />
                </a>
              </div>
              <div className="col-lg-2 col-md-4 col-6">
                <a href="https://best.aliexpress.com/" target="_blank">
                  <img src="img/clients/client-4.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay={300} />
                </a>
              </div>
              <div className="col-lg-2 col-md-4 col-6">
                <a href="https://offer.alibaba.com/" target="_blank">
                  <img src="img/clients/client-5.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay={400} />
                </a>
              </div>
              <div className="col-lg-2 col-md-4 col-6">
                <a href="https://www.gearbest.com/" target="_blank">
                  <img src="img/clients/client-6.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay={500} />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* End Clients Section */}
        {/* ======= About Us Section ======= */}
        <section id="about" className="about">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2><span className="text-primary">¿Quiénes</span> Somos?</h2>
            </div>
            <div className="row content">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={150}>
                <p>
                  Somos un OPERADOR LOGÍSTICO atentos a satisfacer las necesidades de la comunidad local, nacional e internacional
                  en los servicios de:
                </p>
                <ul>
                  <li>
                    <i className="ri-check-double-line" /> Transporte de Carga.
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> Mudanza.
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> Courier y Almacenaje.
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay={300} >
                <p>
                  Nos caracterizamos por brindar servicios de courier con tiempo de entrega más rápido, por tanto, muchas empresas confían en nosotros.
                </p>
                <div className="row">
                  <div className="col"><a href="#contact" className="btn-learn-more"><i className="bi bi-hand-index" /> Haz una Sugerencia </a></div>
                  <div className="col"><a target={"blank"} href="https://forms.gle/PaTBiSDsqhQdUNqh9" className="btn-learn-more"><i className="bi bi-person" /> Hazte Socio </a></div>
                </div>
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
                <img src="img/counts-img.jpg" alt="..." className="img-thumbnail shadow" />
              </div>
              <div className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay={300} >
                <div className="content d-flex flex-column justify-content-center">
                  <div className="row">
                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="bi bi-globe" />
                        <span data-purecounter-start={0} data-purecounter-end={65} data-purecounter-duration={1} className="purecounter" />
                        <p>
                          <strong>MISIÓN <br /></strong> Ofrecer servicios aduanales con calidad, seguridad y profesionalismo a importadores y exportadores.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="bi bi-eye" />
                        <span data-purecounter-start={0} data-purecounter-end={85} data-purecounter-duration={1} className="purecounter" />
                        <p>
                          <strong>VISIÓN <br /></strong> Constituirnos en socios de nuestros clientes, entender sus necesidades
                          y satisfacer cada una de ellas mediante una respuesta rápida en el trámite de sus mercancías.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="bi bi-heart" />
                        <span data-purecounter-start={0} data-purecounter-end={18} data-purecounter-duration={1} className="purecounter" />
                        <p>
                          <strong>VALORES <br /></strong>
                          <ul>
                            <li>Voluntad Empresarial</li>
                            <li>Respeto</li>
                            <li>Ética Profesional</li>
                          </ul>
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
              <h2><span className="text-primary">NUESTROS</span> SERVICIOS</h2>
              <p>Ofrecemos un plan logístico, para satisfacer los requerimientos de nuestros clientes en todo lo
                relacionado con el comercio internacional, brindando el mejor servicio al más bajo costo.</p>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
                  <div className="icon">
                    <i className="bi bi-airplane" />
                  </div>
                  <h4 className="title">
                    <a href="">Importación / Exportación</a>
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
                    <i className="bi bi-truck" />
                  </div>
                  <h4 className="title">
                    <a href="">Transporte y Transporte de Carga</a>
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
        {/* ======= Blog Section ======= */}
        <section id="testimonials" className="testimonials section-bg">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>RE<span className="text-primary">&</span>RAM | Blog</h2>
              <p>Mantente actualizado con las noticias más recientes sobre Courier</p>
            </div>
            {/* ======= More Services Section ======= */}
            <section id="more-services" className="more-services">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 d-flex align-items-stretch">
                    <div className="card" style={{ backgroundImage: 'url("img/more-services-1.jpg")' }} data-aos="fade-up" data-aos-delay={100}>
                      <div className="card-body">
                        <h5 className="card-title">
                          <a href="">Noticia 1</a>
                        </h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                          tempor ut labore et dolore magna aliqua.
                        </p>
                        <div className="read-more">
                          <a target={"blank"} href="https://reyram2022.blogspot.com/"><i className="bi bi-arrow-right" /> Leer mas</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                    <div className="card" style={{ backgroundImage: 'url("img/more-services-2.jpg")' }} data-aos="fade-up" data-aos-delay={200}>
                      <div className="card-body">
                        <h5 className="card-title">
                          <a href="">Noticia 2</a>
                        </h5>
                        <p className="card-text">
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                          doloremque laudantium, totam rem.
                        </p>
                        <div className="read-more">
                          <a target={"blank"} href="https://reyram2022.blogspot.com/"><i className="bi bi-arrow-right" /> Leer mas</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-stretch mt-4">
                    <div className="card" style={{ backgroundImage: 'url("img/more-services-3.jpg")' }} data-aos="fade-up" data-aos-delay={100}>
                      <div className="card-body">
                        <h5 className="card-title">
                          <a href="">Noticia 3</a>
                        </h5>
                        <p className="card-text">
                          Te llevamos tus paquetes hasta la puerta de tu hogar, sin costo adicional.
                        </p>
                        <div className="read-more">
                          <a target={"blank"} href="https://reyram2022.blogspot.com/"><i className="bi bi-arrow-right" /> Leer mas</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-stretch mt-4">
                    <div className="card" style={{ backgroundImage: 'url("img/more-services-4.jpg")' }} data-aos="fade-up" data-aos-delay={200} >
                      <div className="card-body">
                        <h5 className="card-title">
                          <a href="">Noticia 4</a>
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
          </div>
        </section>
        {/* End Blog Section */}
        {/* ======= sucursales Section ======= */}
        <section id="team" className="team section-bg">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2><span className="text-primary">NUESTRAS</span> SUCURSALES</h2>
              <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
            </div>
            <div className="container text-center">
              <div className="row">
                <div className="col">
                  <div className="card shadow">
                    <img src="img/sucursal2.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Sucursal 1</h5>
                      <p className="card-text"><i className="bi bi-geo-alt" /> Dirección:</p>
                      <p>C/ 3ra #35 A, Ensanche Isabelita, Santo Domingo Este, Rep. Dom.</p>
                      <p className="card-text"><i className="bi bi-telephone" /> Teléfono:</p>
                      <p>(809) 868-3129 / +1 (929) 375-2165</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow">
                    <img src="img/sucursal1.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Oficina Principal</h5>
                      <p className="card-text"><i className="bi bi-geo-alt" /> Dirección:</p>
                      <p>C/ 3ra #35 A, Ensanche Isabelita, Santo Domingo Este, Rep. Dom.</p>
                      <p className="card-text"><i className="bi bi-telephone" /> Teléfono:</p>
                      <p>(809) 868-3129 / +1 (929) 375-2165</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow">
                    <img src="img/sucursal3.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Sucursal 3</h5>
                      <p className="card-text"><i className="bi bi-geo-alt" /> Dirección:</p>
                      <p>C/ 3ra #35 A, Ensanche Isabelita, Santo Domingo Este, Rep. Dom.</p>
                      <p className="card-text"><i className="bi bi-telephone" /> Teléfono:</p>
                      <p>(809) 868-3129 / +1 (929) 375-2165</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End sucursales Section */}
        {/* ======= RUA Section ======= */}
        <section id="pricing" className="pricing">
          <div className="container">
            <div className="section-title">
              <h2><span className="text-primary">AVISO</span> DGA</h2>
              <p><strong>Socializado con los Courier, lo establece la Norma 01-2018</strong></p>
            </div>
            <div className="container">
              <div className="card shadow bg-white rounded">
                <div className="card-body text-center">
                  <p><i className="bi bi-info-circle-fill" /> La Dirección General de Aduanas (DGA) inició el proceso del Registro Único Aduanero (RÚA) para todos los usuarios de
                    servicios Courier, una herramienta que tiene el propósito de salvaguardar los derechos del usuario y agilizar el
                    despacho de sus compras por internet.</p>
                  <p>Con el RÚA se busca diferenciar a quienes utilizan este canal con fines comerciales de aquellos que lo hacen para
                    sus compras personales, únicas beneficiadas del tope “de minimis” libres de impuestos de hasta US$200 (Doscientos Dólares Norteamericanos),
                    contemplada en el Decreto 402-05, que aprueba el Reglamento para el Despacho Expreso de Envíos.</p>
                  <p>El Registro Único Aduanero fue establecido en la Norma 01-2018, que regula el fraccionamiento de mercancías para fines comerciales a
                    través de empresas Courier, puesta en vigor en febrero de 2018. La DGA sometió la Norma 01-2018 a un proceso abierto de consultas
                    públicas por varios meses, durante el que se recibieron y consideraron las opiniones de los usuarios y de las mismas empresas que
                    ofrecen el servicio, hasta emitir el documento final.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End RUA Section */}
        {/* ======= F.A.Q Section ======= */}
        <section id="faq" className="faq">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2><span className="text-primary">Preguntas</span> Frecuentes</h2>
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
                  <h3>RE<span className="text-primary">&</span>RAM</h3>
                  <p>
                    Es una empresa de servicios aduanales aéreos , marítimos y terrestres internacionales de carga, exportación e importación de mercancía.
                  </p>
                  <h6>Síguenos en:</h6>
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
                      C/ 3ra #35 A, Ensanche Isabelita,
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
                © 2022 <strong>RE<span className="text-primary">&</span>RAM</strong>. Todos los derechos reservados
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

      <Fragment>
        <div className="modal text-center" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="card" >
                  <img src={"img/rastrear.png"} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Rastrea tu paquete:</h5>
                    <input type="text" className="form-control mb-3" placeholder="Numero de tracking" />
                    <a href="#" className="btn btn-outline-primary"><i className="bi bi-search" /> Rastrear</a>
                  </div>
                </div>
              </div>
              <div className="modal-footer text-center">
                <p>Presentar el rastrear aqui</p>
              </div>
            </div>
          </div>
        </div>
      </Fragment>

      {/* <!-- Vendor JS Files --> */}
      <script src={"vendor/purecounter/purecounter_vanilla.js"} />
      <script src={"vendor/aos/aos.js"} />
      <script src={"vendor/bootstrap/js/bootstrap.bundle.min.js"} />
      <script src={"vendor/glightbox/js/glightbox.min.js"} />
      <script src={"vendor/isotope-layout/isotope.pkgd.min.js"} />
      <script src={"vendor/swiper/swiper-bundle.min.js"} />
      <script src={"vendor/php-email-form/validate.js"} />

      {/* <!-- Template Main JS File --> */}
      <script src={"js/main.js"} />
    </>
  )
} 
