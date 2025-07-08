import { Trans, useTranslation } from "react-i18next";
import pic from "../../assets/img/hero-bg.jpg";
import styled from "./Home.module.css";
// import { Link } from 'react-router-dom';
import icon from "../../assets/img/i-locker-cursor.svg";
// import { Trans, useTranslation } from "react-i18next";
import sizeIcon from "../../assets/img/i-unit-size.svg";
import typeIcon from "../../assets/img/i-unit-type.svg";
import stuffJunk from "../../assets/img/i-stuff-junk.svg";
import happyFace from "../../assets/img/i-locker-happyface.svg";
import locker from "../../assets/img/i-locker-shield.svg";
import resize from "../../assets/img/i-locker-resize.svg";
import promo from "../../assets/img/i-locker-promo.svg";
import triangle from "../../assets/img/cbl-triangle.svg";
import location from "../../assets/img/Location-Icon-orange.png";

function Home() {
  const { t } = useTranslation();

  return (
    <>
      {/* cover */}

      <div className={`container-fluid ps-0 ${styled.imageContainer}`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5 className="text-white">
                <Trans i18nKey="storageSolution1">
                  <span className="main-color">THE MOST</span> AFFORDABLE
                </Trans>
              </h5>
              <h1 className={`text-white ${styled.homePageFont}`}>
                <Trans i18nKey="storageSolution2">STORAGE UNIT SOLUTIONS</Trans>
              </h1>
            </div>
          </div>
          <div className="row justify-content-center text-center py-5 ps-3">
            <div className="col-12 col-lg-5 bg-white z-3 p-4">
              <div className=" p-5 text-center">
                <img src={icon} alt="" className="ps-3" />
                <h4 className="pt-3 blue-color arimo-bold">{t("reserve")}</h4>
                <p className="blue-color">
                  <Trans i18nKey="features_line">
                    <span className="main-color">■</span>
                    <span className="main-color">■</span>
                  </Trans>
                </p>
                <div className="pt-3">
                  <button
                    type="button"
                    class="btn main-button btn-md border rounded-0 py-2 arimo-regular"
                  >
                    {t("reserve")}
                  </button>
                </div>
              </div>
            </div>
            <div className={`col-12 col-lg-7 text-white ps-5 ${styled.bgBlue}`}>
              <div className="row py-3">
                <h4 className="text-white my-4 text-center text-uppercase arimo-bold text-sm-start">
                  <Trans i18nKey="GettingStarted ">GETTING STARTED</Trans>
                </h4>

                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <div className="d-flex flex-column flex-sm-row align-items-center">
                      <img src={sizeIcon} alt="" />
                      <h5 className=" ps-5 fw-normal text-uppercase arimo-regular text-white text-center">
                        <Trans i18nKey="Size_needed">
                          <b>Size</b>
                          <br />
                          <span className="main-color">?</span>
                        </Trans>
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="justify-content-sm-start justify-content-xl-end mt-4 mt-xl-0">
                      <button
                        type="button"
                        class="btn main-button2 btn-md py-2 arimo-regular text-uppercase"
                      >
                        {t("size-guide")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row py-4">
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <div className="d-flex flex-column flex-sm-row align-items-center">
                      <img src={typeIcon} alt="" />
                      <h5 className="color-white fw-normal arimo-regular text-uppercase ms-sm-4 mt-3 mtsm-0 text-center text-sm-start">
                        <Trans i18nKey="Type_needed">
                          <b> TYPE</b>
                          <br />
                          <span className="main-color ">?</span>
                        </Trans>
                      </h5>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="justify-content-sm-start justify-content-xl-end mt-4 mt-xl-0">
                      <button
                        type="button"
                        class="btn main-button2 btn-md py-2 arimo-regular text-uppercase"
                      >
                        {t("size-guide")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* cover */}
      <div className={styled.padding}></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <h3 className="main-color arimo-bold">
              <Trans i18nKey="OVERLOADED">OVERLOADED</Trans>
            </h3>
            <h2 className="blue-color arimo-regular">
              <Trans i18nKey="STUFF">
                <span className="main-color">?</span>
              </Trans>
            </h2>

            <h5 className="arimo-regular">{t("gain_peace")}</h5>
          </div>
          <div className="col-12 col-lg-6">
            <img src={stuffJunk} alt="stuffJunk" className="img-fluid" />
          </div>
        </div>
        <div className={styled.padding}></div>
        <div className="row justify-content-between">
          <div className={`col-md-7 p-5 text-center ${styled.bgBlueGradient}`}>
            <h4 className="text-xl text-white text-uppercase pb-4 arimo-regular">
              <Trans i18nKey="choose_options">
                Choose from multiple <b>sizes, features</b> and <b>prices.</b>
              </Trans>
            </h4>
            <div className={`px-4 text-center ${styled.ribbon}`}>
              <span className="d-block text-uppercase text-sm blue-color arimo-regular">
                <Trans i18nKey="from_price">
                  <b>$50/month</b>
                </Trans>
              </span>
            </div>
          </div>
          <div
            className={`col-md-5 d-flex flex-column align-items-center justify-content-center ${styled.borderBlue}`}
          >
            <div className="text-center p-5 text-uppercase">
              <h4 className="blue-color arimo-regular">
                <Trans i18nKey="book_today">book yours today!</Trans>
              </h4>
              <button
                type="button"
                className="btn main-button btn-md border rounded-0 py-2 arimo-regular"
              >
                {t("reserve")}
              </button>
            </div>
          </div>
        </div>

        <div className={styled.padding}></div>
        <div>
          <hr className={styled.pattern} />
        </div>
        <div className={styled.padding}></div>
        <div className="text-center">
          <h2 className="text-uppercase blue-color arimo-bold">
            <Trans i18nKey="pack_title">
              Pack It up,<span className="main-color"> Pack It In! </span>
            </Trans>
          </h2>

          <h6 className="blue-color text-uppercase arimo-regular">
            <Trans i18nKey="why_store">
              <span className="main-color">■ </span>
              Why Store Your Stuff With Us?
              <span className="main-color"> ■</span>
            </Trans>
          </h6>

          <p className="my-4 arimo-regular">
            <Trans i18nKey="pack_description">
              <b>Reliable, comfortable, versatile and affordable.</b> Our
              storage units are the perfect way to gain peace of mind and clear
              the way for new beginnings in your life.
            </Trans>
          </p>
        </div>
      </div>
      <div className={`${styled["containerWide"]} ${styled["bgBlueLight"]}`}>
        <div className="container px-5">
          <div className="row pt-5">
            <div className="col-12 col-md-6 mb-5">
              <div className="d-flex align-items-start">
                <img src={happyFace} alt="happyFace" />
                <div className="ps-5">
                  <h4 className="blue-color text-uppercase arimo-bold">
                    <Trans i18nKey="hassle_free_title">Hassle-free</Trans>
                  </h4>

                  <p className="arimo-regular">
                    <Trans i18nKey="hassle_free_description">
                      Our process is smooth, simple and easy, resulting in a
                      streamlined way to reserve, access and manage your storage
                      unit at all times.
                    </Trans>
                  </p>

                  <a href="#" className="btn-link main-color">
                    <Trans i18nKey="learn_more">
                      <b>LEARN MORE</b>
                    </Trans>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 mb-5">
              <div className="d-flex align-items-start">
                <img src={locker} alt="locker" />
                <div className="ps-5">
                  <h4 className="blue-color text-uppercase arimo-bold">
                    <Trans i18nKey="safe_secure_title">Safe & Secure</Trans>
                  </h4>

                  <p className="arimo-regular">
                    <Trans i18nKey="safe_secure_description">
                      We have put various safety measures in place to make sure
                      that your belongings remain secure throughout your storage
                      with us.
                    </Trans>
                  </p>

                  <a href="#" className="btn-link main-color">
                    <Trans i18nKey="learn_more">
                      <b>LEARN MORE</b>
                    </Trans>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-5">
              <div className="d-flex align-items-start">
                <img src={resize} alt="resize" />
                <div className="ps-5">
                  <h4 className="blue-color text-uppercase arimo-bold">
                    <Trans i18nKey="flexible_units_title">
                      Flexible Storage Units
                    </Trans>
                  </h4>

                  <p className="arimo-regular">
                    <Trans i18nKey="flexible_units_description">
                      From interior and warehouse storage to office spaces, our
                      professional staff will help you choose the best storage
                      unit for your needs.
                    </Trans>
                  </p>

                  <a href="#" className="btn-link main-color">
                    <Trans i18nKey="view_size_guide">
                      <b>VIEW SIZE GUIDE</b>
                    </Trans>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-5">
              <div className="d-flex align-items-start">
                <img src={promo} alt="" />
                <div className="ps-5">
                  <h4 className="blue-color text-uppercase arimo-bold">
                    <Trans i18nKey="amazing_offers_title">Amazing offers</Trans>
                  </h4>
                  <p className="arimo-regular">
                    <Trans i18nKey="amazing_offers_description">
                      Receive special offers on select storage units, free
                      months and more when you store your belongings with us!
                      <br />
                      <b>15% Off</b> Select Sizes
                    </Trans>
                  </p>
                  <a href="#" className="btn-link main-color">
                    <Trans i18nKey="view_offers">
                      <b>VIEW OFFERS</b>
                    </Trans>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`px-0 py-0 bg-Blue ${styled.containerWide}`}>
        <div className="row g-0 justify-content-between">
          <div className={`col-md-4 ps-0 ${styled.imgHowItWorks}`}>
            {/* <img src={triangle} alt="triangle" className={styled.triangleImg} /> */}
          </div>

          <div className="col-md-7 ps-5 py-5 pe-md-5">
            <h2 className="text-white mb-5 arimo-bold">{t("how_it_works")}</h2>
            <ul className="pe-5 list-unstyled">
              <li className="d-flex pb-4">
                <div className="text-white">
                  <span className={styled.countBorder}>1</span>
                </div>
                <div className="ps-4 text-white">
                  <h5 className="text-uppercase arimo-bold">
                    {t("how_billing_title")}
                  </h5>
                  <p className="arimo-regular">{t("how_billing_text")}</p>
                </div>
              </li>

              <li className="d-flex pb-4">
                <div className="text-white">
                  <span className={styled.countBorder}>2</span>
                </div>
                <div className="ps-4 text-white">
                  <h5 className="text-uppercase arimo-bold">
                    {t("how_lease_title")}
                  </h5>
                  <p className="arimo-regular">{t("how_lease_text")}</p>
                </div>
              </li>

              <li className="d-flex pb-4">
                <div className="text-white">
                  <span className={styled.countBorder}>3</span>
                </div>
                <div className="ps-4 text-white">
                  <h5 className="text-uppercase arimo-bold">
                    {t("how_moving_title")}
                  </h5>
                  <p className="arimo-regular">{t("how_moving_text")}</p>
                </div>
              </li>

              <li className="d-flex pb-4">
                <div className="text-white">
                  <span className={styled.countBorder}>4</span>
                </div>
                <div className="ps-4 text-white">
                  <h5 className="text-uppercase arimo-bold">
                    {t("how_access_title")}
                  </h5>
                  <p className="arimo-regular">{t("how_access_text")}</p>
                </div>
              </li>

              <li className="d-flex">
                <div className="text-white">
                  <span className={styled.countBorder}>5</span>
                </div>
                <div className="ps-4 text-white">
                  <h5 className="text-uppercase arimo-bold">
                    {t("how_restrictions_title")}
                  </h5>
                  <p className="arimo-regular">{t("how_restrictions_text")}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className={styled.pattern} />
      <div className={styled.padding}></div>
      {/* locations */}
      <div className="container">
        <div className="text-center w100 d-flex flex-wrap align-items-center justify-content-center mb-5">
          <img
            src={location}
            alt="locationIcon"
            className={styled.locationIcon}
          />
          <h2 className="blue-color text-uppercase arimo-bold">
            <Trans i18nKey="our_locations">
              Our <span className="main-color">Locations</span>
            </Trans>
          </h2>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 pb-5">
            <h4 className="blue-color text-center pb-2">
              <a
                href="https://maps.app.goo.gl/VcsjXrE39MJYN1t8A"
                target="_blank"
                rel="noopener noreferrer"
                className={styled.locationLink}
              >
                LONGUEUIL
              </a>
            </h4>
            <div className="ratio ratio-16x9 border border-3 border-primary">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.349677693836!2d-73.4764553!3d45.5634063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91cc62bc87b5b%3A0x2ebe0d7ab14c5204!2sMini-Entrep%C3%B4t%20-%20Sauvegarde!5e0!3m2!1sen!2sca!4v1751927293208!5m2!1sen!2sca"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
            </div>
          </div>
          <div className="col-12 col-md-4 pb-5">
            <h4 className="blue-color text-center pb-2 ">
              <a
                href="https://maps.app.goo.gl/A9nM48k18S1kzNGY9"
                target="_blank"
                rel="noopener noreferrer"
                className={styled.locationLink}
              >
                SAINT-LAURENT
              </a>
            </h4>
            <div className="ratio ratio-16x9 border border-3 border-primary">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.2390507895348!2d-73.6971879!3d45.4851307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc917ed4855e667%3A0x773e8629b5a98261!2s3700%20Griffith%20St%2C%20Saint-Laurent%2C%20QC%20H4T%202B3!5e0!3m2!1sen!2sca!4v1751986870845!5m2!1sen!2sca"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <h4 className="blue-color text-center pb-2">
              <a
                href="https://maps.app.goo.gl/UpihKbhbyMUw8Lnj6"
                target="_blank"
                rel="noopener noreferrer"
                className={styled.locationLink}
              >
                LACHINE
              </a>
            </h4>
            <div className="ratio ratio-16x9 border border-3 border-primary">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.2908821321425!2d-73.7197015!3d45.463944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc917cdb829d129%3A0x10ccda37c164cf8e!2s10500%20De%20la%20C%C3%B4te-de-Liesse%20Rd%2C%20Lachine%2C%20QC%20H8T%201A4!5e0!3m2!1sen!2sca!4v1751987002201!5m2!1sen!2sca"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <hr className={styled.pattern} />
        <div className={styled.padding}></div>
      </div>
      <div
        className={`${styled["containerWide"]} ${styled["bgBlueLight"]}`}
      ></div>
    </>
  );
}

export default Home;
