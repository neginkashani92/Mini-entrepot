import logo from '../../assets/img/logo.svg';
import { Link } from 'react-router-dom';
import i18n from '/src/utils/i18n';
import { Trans ,useTranslation } from 'react-i18next';

function Navbar() {
 const { t } = useTranslation();




  return (
    <>
   <div className="container-fluid shadow-sm">
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div>
      <Link to="/">
          <img className="img-fluid w-75" src={logo} alt="logo" />
        </Link>
    </div>


    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
            <Link className="nav-link active arimo-regular" aria-current="page" to="/">{t('home')}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link arimo-regular" to="/locker-types">{t('lockerTypes')}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link arimo-regular" to="/contact-us">{t('contact')}</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle arimo-regular" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           {t('language')}
          </a>
          <ul className="dropdown-menu">
            <li className='cursor-pointer'>
             <a className="dropdown-item"  onClick={() => i18n.changeLanguage('en')}>EN</a>
            </li>
            <li className='cursor-pointer'>
              <a className="dropdown-item"  onClick={() => i18n.changeLanguage('fr')}>FR</a>
            </li>
          </ul>
        </li>
              <div >
        <button type="button" class="btn main-button btn-md border rounded-0 py-2 arimo-regular" >{t('reserve')}</button>
              </div>
      </ul>
    </div>
  </div>
</nav>

   </div>
    </>
  )
}

export default Navbar
