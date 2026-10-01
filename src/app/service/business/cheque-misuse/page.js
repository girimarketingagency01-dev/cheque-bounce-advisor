"use client";

import { useEffect, useMemo, useState } from "react";
import "./page.css";



/* =========================================================
   BUSINESS CHEQUE MISUSE PAGE
========================================================= */

export default function BusinessChequeMisusePage() {

  /* =======================================================
     BASIC FORM STATES
  ======================================================= */

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [submitted, setSubmitted] = useState(false);

  /* =======================================================
     LOCATION DATA
  ======================================================= */

  const [locationData, setLocationData] = useState({});
  const [locationLoading, setLocationLoading] = useState(true);
  const [locationError, setLocationError] = useState(false);


  /* =======================================================
     DOCUMENT STATES
  ======================================================= */

  const [documents, setDocuments] = useState([]);

  const [isDragging, setIsDragging] = useState(false);

  const ACCEPTED_FILE_TYPES =
  ".pdf,.jpg,.jpeg,.png,.doc,.docx,.xls,.xlsx";

const MAX_FILE_SIZE = 10 * 1024 * 1024;


  /* =======================================================
     LOAD INDIA STATE + DISTRICT DATA
  ======================================================= */

  useEffect(() => {

    let mounted = true;

    const loadLocations = async () => {

      try {

        setLocationLoading(true);
        setLocationError(false);

        const response = await fetch(
          "https://raw.githubusercontent.com/CodingMation/indian-states-districts/main/data/india_states_districts.json",
          {
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error("Unable to load location data");
        }

        const data = await response.json();


        /*
          Convert dataset into:

          {
            "Haryana": ["Faridabad", "Gurugram", ...],
            "Delhi": ["Central Delhi", ...]
          }
        */

        const formattedData = {};

        if (Array.isArray(data)) {

          data.forEach((item) => {

            const stateName =
              item?.state ||
              item?.name ||
              item?.stateName;

            const districts =
              item?.districts ||
              item?.cities ||
              [];

            if (
              stateName &&
              Array.isArray(districts)
            ) {

              formattedData[stateName] =
                districts
                  .map((district) => {

                    if (typeof district === "string") {
                      return district;
                    }

                    return (
                      district?.name ||
                      district?.district ||
                      district?.districtName ||
                      ""
                    );

                  })
                  .filter(Boolean);

            }

          });

        }


        if (!Object.keys(formattedData).length) {
          throw new Error("Location data format not recognised");
        }


        if (mounted) {

          setLocationData(formattedData);
          setLocationLoading(false);

        }

      } catch (error) {

        console.error(
          "Location data error:",
          error
        );

        if (mounted) {

          setLocationError(true);
          setLocationLoading(false);

        }

      }

    };


    loadLocations();


    return () => {
      mounted = false;
    };

  }, []);


  /* =======================================================
     STATES
  ======================================================= */

  const states = useMemo(() => {

    return Object.keys(locationData).sort(
      (a, b) =>
        a.localeCompare(b)
    );

  }, [locationData]);


  /* =======================================================
     CITIES / DISTRICTS
  ======================================================= */

  const cities = useMemo(() => {

    if (!selectedState) {
      return [];
    }

    return locationData[selectedState] || [];

  }, [
    selectedState,
    locationData,
  ]);


  /* =======================================================
     STATE CHANGE
  ======================================================= */

  const handleStateChange = (event) => {

    const state =
      event.target.value;

    setSelectedState(state);

    /*
      Important:
      State change hone par purani city remove
    */

    setSelectedCity("");

  };


  /* =======================================================
     CITY CHANGE
  ======================================================= */

  const handleCityChange = (event) => {

    setSelectedCity(
      event.target.value
    );

  };


  /* =======================================================
     DOCUMENT CHANGE
  ======================================================= */

const addDocuments = (fileList) => {

  if (!fileList) {
    return;
  }


  const newFiles = Array.from(fileList);


  if (!newFiles.length) {
    return;
  }


  const validFiles = newFiles.filter((file) => {

    if (file.size > MAX_FILE_SIZE) {

      alert(
        `${file.name} is larger than 10 MB.`
      );

      return false;
    }

    return true;

  });


  setDocuments((previous) => {

    const existingKeys = new Set(
      previous.map(
        (file) =>
          `${file.name}-${file.size}-${file.lastModified}`
      )
    );


    const filteredFiles = validFiles.filter((file) => {

      const key =
        `${file.name}-${file.size}-${file.lastModified}`;

      return !existingKeys.has(key);

    });


    return [
      ...previous,
      ...filteredFiles,
    ];

  });

};


  /* =======================================================
     FILE INPUT CHANGE
  ======================================================= */

  const handleDocumentsChange = (event) => {

    addDocuments(
      event.target.files
    );


    /*
      Same file ko dobara select karne ki permission
    */

    event.target.value = "";

  };


  /* =======================================================
     DRAG ENTER
  ======================================================= */

  const handleDragEnter = (event) => {

    event.preventDefault();
    event.stopPropagation();

    setIsDragging(true);

  };


  /* =======================================================
     DRAG OVER
  ======================================================= */

  const handleDragOver = (event) => {

    event.preventDefault();
    event.stopPropagation();

    setIsDragging(true);

  };


  /* =======================================================
     DRAG LEAVE
  ======================================================= */

  const handleDragLeave = (event) => {

    event.preventDefault();
    event.stopPropagation();

    setIsDragging(false);

  };


  /* =======================================================
     DROP
  ======================================================= */

  const handleDrop = (event) => {

    event.preventDefault();
    event.stopPropagation();

    setIsDragging(false);


    const droppedFiles =
      event.dataTransfer.files;


    addDocuments(
      droppedFiles
    );

  };


  /* =======================================================
     REMOVE DOCUMENT
  ======================================================= */

  const removeDocument = (index) => {

    setDocuments((previous) =>
      previous.filter(
        (_, fileIndex) =>
          fileIndex !== index
      )
    );

  };


/* =======================================================
   FORM SUBMIT
======================================================= */

const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const form = event.currentTarget;

    const formData = new FormData(form);

    /* -----------------------------------------------
       BASIC LEAD INFORMATION
    ----------------------------------------------- */

    formData.set(
      "name",
      formData.get("contactPerson") || ""
    );

    formData.set(
      "phone",
      formData.get("mobile") || ""
    );

    formData.set(
      "matter",
      formData.get("matterDetails") || ""
    );

    formData.set(
      "form_name",
      "Business Cheque Misuse"
    );

    formData.set(
      "page_url",
      window.location.href
    );


    /* -----------------------------------------------
       ADDITIONAL FORM DATA
    ----------------------------------------------- */

    const additionalFields = {

      category:
        formData.get("category") || "",

      matter:
        "Cheque Misuse",

      businessName:
        formData.get("businessName") || "",

      contactPerson:
        formData.get("contactPerson") || "",

      state:
        formData.get("state") || "",

      city:
        formData.get("city") || "",

      chequeAmount:
        formData.get("chequeAmount") || "",

      bankName:
        formData.get("bankName") || "",

      chequeNumber:
        formData.get("chequeNumber") || "",

      chequeDate:
        formData.get("chequeDate") || "",

      chequePurpose:
        formData.get("chequePurpose") || "",

      noticeReceived:
        formData.get("noticeReceived") || "",

      matterDetails:
        formData.get("matterDetails") || "",

    };


    /* -----------------------------------------------
       REMOVE OLD FIELDS VALUE
    ----------------------------------------------- */

    formData.delete("fields");


    /* -----------------------------------------------
       ADD FIELDS AS JSON
    ----------------------------------------------- */

    formData.append(
      "fields",
      JSON.stringify(additionalFields)
    );


    /* -----------------------------------------------
       ADD DOCUMENTS
    ----------------------------------------------- */

    documents.forEach((file) => {

      formData.append(
        "documents[]",
        file
      );

    });


    /* -----------------------------------------------
       SEND TO WORDPRESS
    ----------------------------------------------- */

    const response = await fetch(
      "/api/leadify",
      {
        method: "POST",
        body: formData,
      }
    );


    const result = await response.json();


    /* -----------------------------------------------
       SUCCESS
    ----------------------------------------------- */

    if (
      response.ok &&
      result.success
    ) {

      setSubmitted(true);

      setDocuments([]);

      form.reset();

      setSelectedState("");

      setSelectedCity("");

      return;
    }


    /* -----------------------------------------------
       ERROR
    ----------------------------------------------- */

    alert(
      result.message ||
      "Something went wrong. Please try again."
    );


  } catch (error) {

    console.error(
      "Lead submission error:",
      error
    );

    alert(
      "Unable to submit your request. Please try again."
    );

  }
};


  /* =======================================================
     RENDER
  ======================================================= */

  return (

    <main className="business-misuse-page">


      {/* =================================================
          HERO
      ================================================= */}

      <section className="business-misuse-hero">

        <div className="business-misuse-hero-content">

          <span className="business-misuse-eyebrow">
            BUSINESS CHEQUE MISUSE ASSISTANCE
          </span>


          <h1>
            Protect Your
            <span> Business</span>
            <br />
            From Cheque Misuse
          </h1>


          <p>
            If a cheque issued as security, left blank,
            or used beyond its intended purpose has created
            a concern for your business, share your matter
            with us to understand the available assistance.
          </p>


          <div className="business-misuse-hero-buttons">

            <a
              href="#misuse-form"
              className="business-misuse-primary-btn"
            >
              Request Assistance
              <span>→</span>
            </a>


            <a
              href="#misuse-info"
              className="business-misuse-secondary-btn"
            >
              Understand Your Matter
            </a>

          </div>

        </div>


        {/* =================================================
            HERO VISUAL
        ================================================= */}

        <div className="business-misuse-hero-visual">

  <div className="business-misuse-hero-image-wrap">

    <img
      src="/business-cheque-misuse.png"
      alt="Business cheque misuse assistance"
      className="business-misuse-hero-image"
    />

  </div>

</div>

      </section>



      {/* =================================================
          INFORMATION
      ================================================= */}

      <section
        id="misuse-info"
        className="business-misuse-info"
      >

        <div className="business-misuse-container">

          <div className="business-misuse-info-heading">

            <span className="business-misuse-eyebrow">
              CHEQUE MISUSE
            </span>


            <h2>
              Share Your
              <span> Business Matter</span>
            </h2>


            <p>
              Provide the relevant details below. This
              information helps us understand the nature
              of the cheque-related concern and the
              assistance being requested.
            </p>

          </div>

        </div>

      </section>



      {/* =================================================
          FORM
      ================================================= */}

      <section
        id="misuse-form"
        className="business-misuse-form-section"
      >

        <div className="business-misuse-form-container">


          {/* =================================================
              FORM HEADING
          ================================================= */}

          <div className="business-misuse-form-heading">

            <span className="business-misuse-eyebrow">
              BUSINESS CHEQUE MISUSE ASSISTANCE FORM
            </span>


            <h2>
              Tell Us About Your
              <span> Matter</span>
            </h2>


            <p>
              Please provide accurate information. This
              helps us understand your enquiry and contact
              you regarding the assistance requested.
            </p>

          </div>



          {/* =================================================
              FORM
          ================================================= */}

          <form
            className="business-misuse-form"
            onSubmit={handleSubmit}
          >


            {/* =================================================
                HIDDEN LEAD IDENTIFICATION
            ================================================= */}

            <input
              type="hidden"
              name="category"
              value="Business / Corporate"
            />


            <input
              type="hidden"
              name="matter"
              value="Cheque Misuse"
            />


            <input
              type="hidden"
              name="source"
              value="Business Cheque Misuse Assistance"
            />



            {/* =================================================
                01 BUSINESS DETAILS
            ================================================= */}

            <div className="business-misuse-section-title">

              <span>
                01
              </span>

              Business Details

            </div>


            <div className="business-misuse-form-grid">


              <div className="business-misuse-field">

                <label>
                  Business / Company Name *
                </label>

                <input
                  type="text"
                  name="businessName"
                  placeholder="Enter business / company name"
                  required
                />

              </div>


              <div className="business-misuse-field">

                <label>
                  Contact Person *
                </label>

                <input
                  type="text"
                  name="contactPerson"
                  placeholder="Enter contact person's name"
                  required
                />

              </div>


              <div className="business-misuse-field">

                <label>
                  Mobile Number *
                </label>

                <input
                  type="tel"
                  name="mobile"
                  placeholder="Enter mobile number"
                  required
                />

              </div>


              <div className="business-misuse-field">

                <label>
                  Email Address *
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  required
                />

              </div>


            </div>



            {/* =================================================
                02 BUSINESS LOCATION
            ================================================= */}

            <div className="business-misuse-section-title">

              <span>
                02
              </span>

              Business Location

            </div>


            <div className="business-misuse-form-grid">


              {/* STATE */}

              <div className="business-misuse-field">

                <label>
                  State *
                </label>


                <select
                  name="state"
                  value={selectedState}
                  onChange={handleStateChange}
                  required
                  disabled={locationLoading}
                >

                  <option value="">
                    {locationLoading
                      ? "Loading states..."
                      : "Choose your state"}
                  </option>


                  {states.map((state) => (

                    <option
                      key={state}
                      value={state}
                    >
                      {state}
                    </option>

                  ))}

                </select>


                {locationError && (

                  <small className="location-error">
                    Unable to load state list. Please
                    refresh the page and try again.
                  </small>

                )}

              </div>



              {/* CITY / DISTRICT */}

              <div className="business-misuse-field">

                <label>
                  City / District *
                </label>


                <select
                  name="city"
                  value={selectedCity}
                  onChange={handleCityChange}
                  required
                  disabled={
                    !selectedState ||
                    locationLoading
                  }
                >

                  <option value="">

                    {!selectedState
                      ? "Select state first"
                      : "Choose your city / district"}

                  </option>


                  {cities.map((city) => (
  <option
    key={city}
    value={city}
  >
    {city}
  </option>
))}

<option value="Other">
  Other
</option>

                </select>

              </div>


            </div>



            {/* =================================================
                03 CHEQUE DETAILS
            ================================================= */}

            <div className="business-misuse-section-title">

              <span>
                03
              </span>

              Cheque Details

            </div>


            <div className="business-misuse-form-grid">


              <div className="business-misuse-field">

                <label>
                  Cheque Amount *
                </label>

                <input
                  type="number"
                  name="chequeAmount"
                  placeholder="Enter cheque amount"
                  min="0"
                  required
                />

              </div>


              <div className="business-misuse-field">

                <label>
                  Bank / Cooperative Bank Name *
                </label>

                <input
                  type="text"
                  name="bankName"
                  placeholder="Enter bank name"
                  required
                />

              </div>


              <div className="business-misuse-field">

                <label>
                  Cheque Number
                </label>

                <input
                  type="text"
                  name="chequeNumber"
                  placeholder="Enter cheque number"
                />

              </div>


              <div className="business-misuse-field">

                <label>
                  Cheque Date
                </label>

                <input
                  type="date"
                  name="chequeDate"
                />

              </div>


            </div>



            {/* =================================================
                04 MISUSE DETAILS
            ================================================= */}

            <div className="business-misuse-section-title">

              <span>
                04
              </span>

              Misuse Details

            </div>


            <div className="business-misuse-form-grid">


              <div className="business-misuse-field">

                <label>
                  How Was The Cheque Given?
                </label>

                <select
                  name="chequePurpose"
                  defaultValue=""
                >

                  <option value="">
                    Choose an option
                  </option>

                  <option value="Security Cheque">
                    Security Cheque
                  </option>

                  <option value="Blank Cheque">
                    Blank Cheque
                  </option>

                  <option value="Business Transaction">
                    Business Transaction
                  </option>

                  <option value="Loan / Finance">
                    Loan / Finance
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>


              <div className="business-misuse-field">

                <label>
                  Have You Received A Notice?
                </label>

                <select
                  name="noticeReceived"
                  defaultValue=""
                >

                  <option value="">
                    Choose an option
                  </option>

                  <option value="Yes">
                    Yes
                  </option>

                  <option value="No">
                    No
                  </option>

                  <option value="Not Sure">
                    Not Sure
                  </option>

                </select>

              </div>


            </div>



            {/* =================================================
                05 MATTER DETAILS
            ================================================= */}

            <div className="business-misuse-section-title">

              <span>
                05
              </span>

              Matter Details

            </div>


            <div className="business-misuse-field business-misuse-full-field">

              <label>
                Tell Us About Your Matter
                <span>
                  (Optional)
                </span>
              </label>


              <textarea
                name="matterDetails"
                rows="6"
                placeholder="Briefly explain what happened, how the cheque was given and what concern you are facing..."
              />

            </div>



           {/* =================================================
    06 DOCUMENTS
================================================= */}

<div className="business-misuse-section-title">

  <span>
    06
  </span>

  Supporting Documents

</div>


<div className="business-misuse-field business-misuse-full-field">

  <label>
    Upload Relevant Documents
    <span>
      (Optional)
    </span>
  </label>


  {/* =================================================
      HIDDEN FILE INPUT
  ================================================= */}

  <input
    id="business-misuse-documents"
    type="file"
    multiple
    hidden
    accept={ACCEPTED_FILE_TYPES}
    onChange={(e) => {
      addDocuments(e.target.files);

      // Same file ko dobara select karne ki permission
      e.target.value = "";
    }}
  />


  {/* =================================================
      DRAG & DROP / CLICK AREA
  ================================================= */}

  <div
    className={`business-document-dropzone ${
      isDragging ? "dragging" : ""
    }`}

    onDragEnter={handleDragEnter}

    onDragOver={handleDragOver}

    onDragLeave={handleDragLeave}

    onDrop={handleDrop}
  >

    <label
      htmlFor="business-misuse-documents"
      className="business-document-upload-content"
    >

      <div className="business-document-plus">
        +
      </div>

      <strong>
        Drag & Drop Documents Here
      </strong>

      <span>
        or click to browse files
      </span>

    </label>

  </div>


  {/* =================================================
      DOCUMENT LIST
  ================================================= */}

  {documents.length > 0 && (

    <div className="business-document-list">

      {documents.map((file, index) => (

        <div
          className="business-document-item"
          key={`${file.name}-${file.size}-${file.lastModified}-${index}`}
        >

          <div className="business-document-info">

            <div className="business-document-icon">
              📄
            </div>

            <div>

              <strong>
                {file.name}
              </strong>

              <small>
                {(file.size / 1024 / 1024).toFixed(2)}
                {" "}
                MB
              </small>

            </div>

          </div>


          <button
            type="button"
            className="business-document-remove"
            onClick={() => removeDocument(index)}
            aria-label={`Remove ${file.name}`}
          >
            ×
          </button>

        </div>

      ))}

    </div>

  )}
  <small className="business-document-upload-note">
    Accepted formats: PDF, JPG, JPEG, PNG, DOC, DOCX, XLS, XLSX.
  <span>Maximum file size: 10 MB per file</span>
  </small>
</div>
            {/* =================================================
                07 CONFIRMATION
            ================================================= */}

            <div className="business-misuse-section-title">

              <span>
                07
              </span>

              Confirmation

            </div>


            <div className="business-misuse-consent">

              <label>

                <input
                  type="checkbox"
                  name="consent"
                  required
                />


                <span>
                  I confirm that the information provided by
                  me is accurate to the best of my knowledge
                  and I consent to Cheque Bounce Advisor
                  contacting me regarding the assistance
                  requested. I understand that submitting
                  this form does not by itself create an
                  attorney-client relationship.
                </span>

              </label>

            </div>



            {/* =================================================
                SUBMIT
            ================================================= */}

            <button
              type="submit"
              className="business-misuse-submit"
            >

              Submit Assistance Request

              <span>
                →
              </span>

            </button>



            {/* =================================================
                SUCCESS
            ================================================= */}

            {submitted && (

              <div className="business-misuse-success">

                Your assistance request has been recorded.
                We will review the information provided.

              </div>

            )}


          </form>

        </div>

      </section>

    </main>

  );

}