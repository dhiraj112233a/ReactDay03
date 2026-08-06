import React from 'react'

const Nav = (props) => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid text-center">
    <a class="navbar-brand col-5 link-light fw-bold fs-1" href="#">Atelier</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="link-light fw-bold nav-link active" href="#">{props.nav1}</a>
        </li>
        <li class="nav-item">
          <a class="link-light fw-bold nav-link active" href="#">{props.nav2}</a>
        </li>
        <li class="nav-item">
          <a class="link-light fw-bold nav-link active" href="#">{props.nav3}</a>
        </li>
        <li class="nav-item">
          <a class="link-light fw-bold nav-link active" href="#">{props.nav4}</a>
        </li>
        <li class="nav-item">
          <a class="link-light fw-bold nav-link active" href="#">{props.nav5}</a>
        </li>
       
      </ul>
       <div className='col-lg-2 mx-5'>
            <button className='btn btn-warning border rounded-pill p-2 col-12'>Book Consultation</button>
        </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav
