import logo from '../../assets/img/logo.svg';
// import { Link } from 'react-router-dom';
// import i18n from './utils/i18n';

function Navbar() {
 




  return (
    <>
   <div className="container-fluid">
   <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Navbar</a> */}
     <a href="">
              <img class="img-fluid" src={logo} alt="logo" />
            </a>


    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" to="">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Locker Types</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Language
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

   </div>
    </>
  )
}

export default Navbar
