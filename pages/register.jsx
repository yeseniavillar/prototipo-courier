import React, { Fragment } from "react";
import Link from "next/link";
// styles
import styles from "../styles/register.module.css";

export default function Register() {
  return (
    <Fragment>
      <main id="registerForm">
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div className="d-flex justify-content-center py-4">
                    <Link href="/">
                      <a  className="logo d-flex align-items-center w-auto" >
                        <img src={"assets/img/logo.png"} alt="..." />
                        <span className="d-none d-lg-block">RE<span className="text-primary">&</span> RAM Courier</span>
                      </a>
                    </Link>
                  </div>
                  {/* End Logo */}
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">
                          Crea una cuenta
                        </h5>
                        <p className="text-center small">
                          Escriba sus datos para crear una cuenta
                        </p>
                      </div>
                      <form className="row g-3 needs-validation" noValidate="">
                        <div className="col-12">
                          <label htmlFor="yourName" className="form-label">
                            Su nombre
                          </label>
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="yourName"
                            required=""
                          />
                          <div className="invalid-feedback">
                            Por favor, ingrese su nombre correctamente
                          </div>
                        </div>
                        <div className="col-12">
                          <label htmlFor="yourEmail" className="form-label">
                            Su correo
                          </label>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="yourEmail"
                            required=""
                          />
                          <div className="invalid-feedback">
                            Por favor ingrese un correo válido
                          </div>
                        </div>
                        <div className="col-12">
                          <label htmlFor="yourUsername" className="form-label">
                            Usuario
                          </label>
                          <div className="input-group has-validation">
                            <span className="input-group-text" id="inputGroupPrepend" >
                              @
                            </span>
                            <input type="text" name="username" className="form-control" id="yourUsername" required />
                            <div className="invalid-feedback">
                              Por favor, elija un nombre de usuario.
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <label htmlFor="yourPassword" className="form-label">
                            Contraseña
                          </label>
                          <input type="password" name="password" className="form-control" id="yourPassword" required />
                          <div className="invalid-feedback">
                            Por favor ingrese su contraseña
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-check">
                            <input className="form-check-input" name="terms" type="checkbox" defaultValue="" id="acceptTerms" required />
                            <label className="form-check-label" htmlFor="acceptTerms" >
                              Estoy de acuerdo con los{" "}
                              <a href="#">términos y condiciones</a>
                            </label>
                            <div className="invalid-feedback">
                              You must agree before submitting.
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <button className="btn btn-primary w-100" type="submit">
                            Crear cuenta
                          </button>
                        </div>
                        <div className="col-12">
                          <p className="small mb-0">
                            Ya tienes una cuenta?{" "}
                            <a href="pages-login.html">Iniciar sesión</a>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      {/* End #main */}
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center" >
        <i className="bi bi-arrow-up-short" />
      </a>
      {/* Vendor JS Files */}
      {/* Template Main JS File */}
    </Fragment>
  );
}