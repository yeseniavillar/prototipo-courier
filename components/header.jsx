import React, { Fragment } from "react";

export default function Header() {
  return (
    <Fragment>
      {/* ======= Header ======= */}
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            <h1><a href="#hero">RE<span className="text-primary">&</span>RAM</a></h1>
          </div>
          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto active" href="#hero">INICIO</a></li>
              <li><a className="nav-link scrollto" href="#about">NOSOTROS</a></li>
              <li><a className="nav-link scrollto" href="#services">SERVICIOS</a></li>
              <li><a target={"blank"} className="nav-link scrollto" href="https://www.aduanas.gob.do/de-interes/consultas/registro-courier">REGISTRO RUA</a></li>
              <li><a className="nav-link scrollto" href="#pricing">AVISO DGA</a></li>
              <li><a target={"target"} className="nav-link scrollto text-success" href="https://forms.gle/PaTBiSDsqhQdUNqh9">HAZTE SOCIO</a></li>
              <li><a className="nav-link scrollto" href="#contact">CONTACTO</a></li>
              <li><a className="getstarted scrollto" href="#about"><i className="bi bi-person m-1" /> Mi Cuenta</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          {/* .navbar */}
        </div>
      </header>
      {/* End Header */}
    </Fragment>
  );
}