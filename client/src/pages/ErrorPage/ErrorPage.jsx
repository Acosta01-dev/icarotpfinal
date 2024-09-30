import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ErrorPage() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1 className="display-1 text-danger">Error 404</h1>
        <p className="lead">La página a la que quiere acceder no existe</p>
        <a href="/" className="btn btn-primary mt-3">Volver</a>
      </div>
    </div>
  );
}

export default ErrorPage;
