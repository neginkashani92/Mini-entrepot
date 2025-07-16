import styled from "../Contact/Contact.module.css";
import location from "../../assets/img/Location-Icon-orange.png";
import { Trans, useTranslation } from "react-i18next";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Contact() {
const { t } = useTranslation();

  const validation_rules = yup.object().shape({
    interest: yup.string().required(t("interestRequired")),
    firstName: yup
      .string()
      .required(t("firstNameRequired"))
      .min(5, t("firstNameMin"))
      .max(7, t("firstNameMax")),
    email: yup
      .string()
      .required(t("emailRequired"))
      .email(t("emailInvalid")),
    message: yup
      .string()
      .required(t("messageRequired"))
      .min(10, t("messageMin")),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validation_rules) });

  const submitForm = (data) => {
    console.log("Form submitted:", data);
    // Send data to your API here
  };

  return (
    <>
      <div className={`container-fluid ps-0 ${styled.imageContainer}`}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div
                className={`bg-white d-flex flex-wrap mb-5 ${styled.borderBlue}`}
              >
                <div className="col-md-12 d-flex flex-column px-5 py-4 w-100">
                  <div className="d-flex justify-content-between align-items-center flex-wrap w-100 mb-5">
                    <div className="d-flex align-items-center mb-3 mb-md-0">
                      <img
                        src={location}
                        alt=""
                        className={styled.locationIcon}
                      />
                      <h4 className="mb-0 blue-color arimo-bold ms-2">
                        {t("longueuil")}
                      </h4>
                    </div>
                    <div>
                      <button
                        type="button"
                        className={`btn main-button btn-md border rounded-0 py-2 arimo-regular ${styled.textXs}`}
                      >
                        {t("pickLocation")}
                      </button>
                    </div>
                  </div>

                  <div className="d-flex flex-wrap">
                    <div className="col-12 col-md-6 d-flex flex-column mr-4">
                      <span className="main-color arimo-regular mb-1">
                        {t("address")}
                      </span>
                      <p className="mb-0 arimo-regular">
                        655 Boulevard Jean-Paul Vincent <br />
                        Longueuil, Quebec, J4G 1R3
                      </p>
                      <div>
                        {t("tel")}: <b>(450) 651-8755</b>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 mt-3 mt-md-0">
                      <span className="main-color arimo-regular mb-1">
                        {t("services")}
                      </span>
                      <ul>
                        <li>{t("carStorage")}</li>
                        <li>{t("driveUpStorage")}</li>
                        <li>{t("interiorExterior")}</li>
                        <li>{t("officeRentals")}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`bg-white d-flex flex-wrap mb-5 ${styled.borderBlue}`}
              >
                <div className="col-md-12 d-flex flex-column px-5 py-4 w-100">
                  <div className="d-flex justify-content-between align-items-center flex-wrap w-100 mb-5">
                    <div className="d-flex align-items-center mb-3 mb-md-0">
                      <img
                        src={location}
                        alt=""
                        className={styled.locationIcon}
                      />
                      <h4 className="mb-0 blue-color arimo-bold ms-2">
                        {t("lachine")}
                      </h4>
                    </div>
                    <div>
                      <button
                        type="button"
                        className={`btn main-button btn-md border rounded-0 py-2 arimo-regular ${styled.textXs}`}
                      >
                        {t("pickLocation")}
                      </button>
                    </div>
                  </div>

                  <div className="d-flex flex-wrap">
                    <div className="col-12 col-md-6 d-flex flex-column mr-4">
                      <span className="main-color arimo-regular mb-1">
                        {t("address")}
                      </span>
                      <p className="mb-0 arimo-regular">
                        10500 De la Côte-de-Liesse (Road) <br />
                        Lachine, Quebec, H8T 1A4
                      </p>
                      <div>
                        {t("tel")}: <b>(514) 532-1625</b>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 mt-3 mt-md-0">
                      <span className="main-color arimo-regular mb-1">
                        {t("services")}
                      </span>
                      <ul>
                        <li>{t("interiorUnits")}</li>
                        <li>{t("surveillanceCameras")}</li>
                        <li>{t("centralMonitoring")}</li>
                        <li>{t("metalUnits")}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`bg-white d-flex flex-wrap mb-5 ${styled.borderBlue}`}
              >
                <div className="col-md-12 d-flex flex-column px-5 py-4 w-100">
                  <div className="d-flex justify-content-between align-items-center flex-wrap w-100 mb-5">
                    <div className="d-flex align-items-center mb-3 mb-md-0">
                      <img
                        src={location}
                        alt=""
                        className={styled.locationIcon}
                      />
                      <h4 className="mb-0 blue-color arimo-bold ms-2">
                        {t("saintLaurent")}
                      </h4>
                    </div>
                    <div>
                      <button
                        type="button"
                        className={`btn main-button btn-md border rounded-0 py-2 arimo-regular ${styled.textXs}`}
                      >
                        {t("pickLocation")}
                      </button>
                    </div>
                  </div>

                  <div className="d-flex flex-wrap">
                    <div className="col-12 col-md-6 d-flex flex-column mr-4">
                      <span className="main-color arimo-regular mb-1">
                        {t("address")}
                      </span>
                      <p className="mb-0 arimo-regular">
                        3700 Griffith Street <br />
                        Saint-Laurent, Quebec, H4T 2B3
                      </p>
                      <div>
                        {t("tel")}: <b>(514) 947-5117</b>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 mt-3 mt-md-0">
                      <span className="main-color arimo-regular mb-1">
                        {t("services")}
                      </span>
                      <ul>
                        <li>{t("interiorUnits")}</li>
                        <li>{t("surveillanceCameras")}</li>
                        <li>{t("centralMonitoring")}</li>
                        <li>{t("metalUnits")}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* form */}
            <div className="col-12 col-md-6">
              <div className={`bg-white p-5 mb-5 ${styled.borderBlue}`}>
                <h2 className="blue-color mb-4 arimo-bold text-center">
                  {t("title")} <span className="main-color">{t("us")}</span>
                </h2>
                <form onSubmit={handleSubmit(submitForm)}>
                  <div className="mb-3">
                    <label htmlFor="interest" className="form-label">
                      {t("interest")}
                    </label>
                    <select
                      class="form-select"
                      name="interest"
                      {...register("interest")}
                    >
                      <option value="">select your interest</option>
                      <option value="Interior Storage">Interior Storage</option>
                      <option value="Interior Storage">Exterior Storage</option>
                    </select>
                    <p className="text-danger mt-2">
                      {errors.interest?.message}
                    </p>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">
                      {t("firstName")}
                    </label>
                    <input
                      {...register("firstName")}
                      type="text"
                      className="form-control"
                      id="firstName"
                    />
                    <p className="text-danger mt-2">
                      {errors.firstName?.message}
                    </p>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      {t("email")}
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className="form-control"
                      id="email"
                    />
                    <p className="text-danger mt-2">{errors.email?.message}</p>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      {t("message")}
                    </label>
                    <textarea
                      {...register("message")}
                      className="form-control"
                      id="message"
                      rows="4"
                    ></textarea>
                    <p className="text-danger mt-2">
                      {errors.message?.message}
                    </p>
                  </div>
                  <button type="submit" className="btn main-button mt-2">
                    {t("submit")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
