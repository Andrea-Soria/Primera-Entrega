import React from 'react'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="some">BRANCA DOG</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="some">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="some">Guarderia</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="some">Veterinario</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="some" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              PetShop
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="some">Perros</a></li>
              <li><a className="dropdown-item" href="some">Gato</a></li>
              <li><a className="dropdown-item" href="some">exoticos</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default NavBar