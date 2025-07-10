// import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import styled from "../../components/layout/Footer.module.css";
import { Trans, useTranslation } from "react-i18next";
import phone from "../../assets/img/phone-primary.svg";
import location from "../../assets/img/Location-Icon-orange.png";
import fb from "../../assets/img/facebook.svg";
function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <div className={styled.footer}>
        <div className="container">
          <div className="row py-4 align-items-center text-center text-md-start">
            <div className="col-12 col-md-4 mb-3 mb-md-0">
              <img className={styled.Logo} src={logo} alt="logo" />
            </div>

            <div className="col-12 col-md-4 mb-3 mb-md-0">
              <p className={`blue-color arimo-bold ${styled.textXs}`}>
                <Trans i18nKey="features_line">
                  <span className="main-color">■</span>
                  <span className="main-color">■</span>
                </Trans>
              </p>
            </div>

            <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end">
              <button
                type="button"
                className="btn main-button btn-md border rounded-0 py-2 arimo-regular"
              >
                {t("reserve")}
              </button>
            </div>
          </div>
        </div>

        <div className={styled.hrHeader}>
          <div className="container">
            <div className="row py-5">
              <div
                className="col-12 d-md-flex justify-content-between text-center"
              >
                <div className="pb-2">
                  <img src={phone} alt="phone" className={styled.phoneImg} />
                  <small className="arimo-bold ps-2">{t("call")}</small>
                  <div>
                    <a
                      href="#!"
                      className={`link fw-bold no-arrow main-color ps-4 ${styled.textXs}`}
                    >
                      (450) 651-8755
                    </a>
                  </div>
                </div>

                <div className="pb-2">
                  <img
                    src={location}
                    alt="location"
                    className={styled.locationImg}
                  />
                  <small className={`arimo-bold ps-2 ${styled.textXs}`}>
                    {t("saintLaurent")}
                  </small>
                  <address className={`arimo-regular ps-4 ${styled.textXs}`}>
                    <Trans i18nKey="footer.saintLaurentAddress">
                      3700 Griffith Street <br /> Saint-Laurent, Quebec, H4T 2B3
                    </Trans>
                  </address>
                </div>

                <div className="pb-2">
                  <img
                    src={location}
                    alt="location"
                    className={styled.locationImg}
                  />
                  <small className={`arimo-bold ps-2 ${styled.textXs}`}>
                    {t("lachine")}
                  </small>
                  <address className={`arimo-regular ps-4 ${styled.textXs}`}>
                    <Trans i18nKey="footer.lachineAddress">
                      10500 De la Côte-de-Liesse (Road) <br />
                      Lachine, Quebec, H8T 1A4
                    </Trans>
                  </address>
                </div>

                <div className="pb-2">
                  <img
                    src={location}
                    alt="location"
                    className={styled.locationImg}
                  />
                  <small className={`arimo-bold ps-2 ${styled.textXs}`}>
                    {t("longueuil")}
                  </small>
                  <address className={`arimo-regular ps-4 ${styled.textXs}`}>
                    <Trans i18nKey="footer.longueuilAddress">
                      655 Boulevard Jean-Paul Vincent <br />
                      Longueuil, Quebec, J4G 1R3
                    </Trans>
                  </address>
                </div>
              </div>

              {/* <div
                className={`d-none d-md-flex col-md-4 flex-column align-items-md-start ${styled.borderRight}`}
              >
                <ul className={styled.footerUl}>
                  <li>
                    <a
                      href="#"
                      className="text-decoration-none arimo-bold text-dark"
                    >
                      {t("home")}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-decoration-none arimo-bold text-dark"
                    >
                      {t("lockerTypes")}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-decoration-none arimo-bold text-dark"
                    >
                      {t("contact")}
                    </a>
                  </li>
                </ul>
              </div> */}

              {/* <div
                className={`col-12 col-md-4 d-flex justify-content-center justify-content-lg-start ps-lg-5 ${styled.thirdCl}`}
              >
                <img src={fb} alt="" className="pe-3" />
                <a
                  href="https://www.facebook.com/MiniEntrepots"
                  target="_blank"
                  className="text-decoration-none text-dark arimo-bold"
                >
                  {t("followUs")}
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div className={styled.hrHeader}>
          <div className="container text-center ">
            <span className={`arimo-regular text-dark ${styled.textXs}`}>
              <Trans i18nKey="copyright">
                © 2025 Mini Entrepôts Sauvegarde | All rights reserved |
                <a
                  href="https://www.kanguru.ca/en"
                  target="_blank"
                  className="text-dark"
                >
                  Kanguru Digital Agency
                </a>
              </Trans>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
