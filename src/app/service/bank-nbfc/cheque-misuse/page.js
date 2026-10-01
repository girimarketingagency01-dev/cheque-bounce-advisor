"use client";

import { useState } from "react";
import Link from "next/link";
import "./page.css";

/* =========================================================
   LOCATION DATA
========================================================= */

const STATES = {
  "Andhra Pradesh": [
    "Visakhapatnam",
    "Vijayawada",
    "Guntur",
    "Tirupati",
    "Nellore",
    "Kurnool",
  ],
  "Arunachal Pradesh": [
    "Itanagar",
    "Naharlagun",
    "Pasighat",
    "Tawang",
  ],
  Assam: [
    "Guwahati",
    "Dibrugarh",
    "Silchar",
    "Jorhat",
    "Nagaon",
  ],
  Bihar: [
    "Patna",
    "Gaya",
    "Bhagalpur",
    "Muzaffarpur",
    "Darbhanga",
    "Purnia",
  ],
  Chhattisgarh: [
    "Raipur",
    "Bhilai",
    "Bilaspur",
    "Korba",
    "Durg",
  ],
  Goa: [
    "Panaji",
    "Margao",
    "Vasco da Gama",
    "Mapusa",
  ],
  Gujarat: [
    "Ahmedabad",
    "Surat",
    "Vadodara",
    "Rajkot",
    "Bhavnagar",
    "Jamnagar",
    "Gandhinagar",
  ],
  Haryana: [
    "Faridabad",
    "Gurugram",
    "Panipat",
    "Ambala",
    "Hisar",
    "Rohtak",
    "Karnal",
    "Sonipat",
    "Yamunanagar",
    "Panchkula",
  ],
  "Himachal Pradesh": [
    "Shimla",
    "Dharamshala",
    "Solan",
    "Mandi",
    "Kullu",
  ],
  Jharkhand: [
    "Ranchi",
    "Jamshedpur",
    "Dhanbad",
    "Bokaro",
    "Deoghar",
  ],
  Karnataka: [
    "Bengaluru",
    "Mysuru",
    "Mangaluru",
    "Hubballi",
    "Belagavi",
    "Davanagere",
  ],
  Kerala: [
    "Thiruvananthapuram",
    "Kochi",
    "Kozhikode",
    "Thrissur",
    "Kollam",
    "Kannur",
  ],
  "Madhya Pradesh": [
    "Bhopal",
    "Indore",
    "Jabalpur",
    "Gwalior",
    "Ujjain",
    "Sagar",
  ],
  Maharashtra: [
    "Mumbai",
    "Pune",
    "Nagpur",
    "Nashik",
    "Thane",
    "Aurangabad",
    "Kolhapur",
    "Navi Mumbai",
  ],
  Manipur: [
    "Imphal",
    "Thoubal",
    "Churachandpur",
  ],
  Meghalaya: [
    "Shillong",
    "Tura",
    "Jowai",
  ],
  Mizoram: [
    "Aizawl",
    "Lunglei",
    "Champhai",
  ],
  Nagaland: [
    "Kohima",
    "Dimapur",
    "Mokokchung",
  ],
  Odisha: [
    "Bhubaneswar",
    "Cuttack",
    "Rourkela",
    "Berhampur",
    "Sambalpur",
  ],
  Punjab: [
    "Ludhiana",
    "Amritsar",
    "Jalandhar",
    "Patiala",
    "Bathinda",
    "Mohali",
  ],
  Rajasthan: [
    "Jaipur",
    "Jodhpur",
    "Udaipur",
    "Kota",
    "Ajmer",
    "Bikaner",
    "Alwar",
  ],
  Sikkim: [
    "Gangtok",
    "Namchi",
    "Gyalshing",
  ],
  "Tamil Nadu": [
    "Chennai",
    "Coimbatore",
    "Madurai",
    "Salem",
    "Tiruchirappalli",
    "Tiruppur",
    "Erode",
  ],
  Telangana: [
    "Hyderabad",
    "Warangal",
    "Nizamabad",
    "Karimnagar",
    "Khammam",
  ],
  Tripura: [
    "Agartala",
    "Udaipur",
    "Dharmanagar",
  ],
  "Uttar Pradesh": [
    "Lucknow",
    "Kanpur",
    "Ghaziabad",
    "Agra",
    "Varanasi",
    "Prayagraj",
    "Meerut",
    "Noida",
    "Bareilly",
    "Aligarh",
    "Moradabad",
    "Gorakhpur",
  ],
  Uttarakhand: [
    "Dehradun",
    "Haridwar",
    "Haldwani",
    "Roorkee",
    "Rishikesh",
  ],
  "West Bengal": [
    "Kolkata",
    "Howrah",
    "Durgapur",
    "Siliguri",
    "Asansol",
  ],
  Delhi: [
    "New Delhi",
    "Central Delhi",
    "East Delhi",
    "North Delhi",
    "North East Delhi",
    "North West Delhi",
    "Shahdara",
    "South Delhi",
    "South East Delhi",
    "South West Delhi",
    "West Delhi",
  ],
};




/* =========================================================
   PAGE
========================================================= */

export default function BankNbfcChequeMisusePage() {
  const [documents, setDocuments] = useState([]);
  const [dragging, setDragging] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const ACCEPTED_FILE_TYPES =
  ".pdf,.jpg,.jpeg,.png,.doc,.docx,.xls,.xlsx";

const MAX_FILE_SIZE = 10 * 1024 * 1024;

  const [formData, setFormData] = useState({
    institutionType: "",
    institutionName: "",
    branchOffice: "",

    customerType: "",
    customerName: "",
    accountReference: "",
    mobile: "",
    email: "",

    chequeNumber: "",
    chequeAmount: "",
    chequeDate: "",
    chequeStatus: "",

    misuseDetails: "",
    matterDescription: "",

    state: "",
    city: "",
    matterLocation: "",

    consent: false,
  });

  /* =========================================================
     INPUT CHANGE
  ========================================================= */

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
      ...(name === "state" ? { city: "" } : {}),
    }));
  };


  /* =========================================================
     DOCUMENT HANDLERS
  ========================================================= */

 const addDocuments = (files) => {

  const incomingFiles = Array.from(files || []);

  if (!incomingFiles.length) {
    return;
  }

  const validFiles = incomingFiles.filter((file) => {

    if (file.size > MAX_FILE_SIZE) {

      alert(
        `${file.name} is larger than 10 MB.`
      );

      return false;
    }

    return true;
  });

  if (!validFiles.length) {
    return;
  }

  setDocuments((previous) => {

    const existingKeys = new Set(
      previous.map(
        (file) =>
          `${file.name}-${file.size}-${file.lastModified}`
      )
    );

    const uniqueFiles = validFiles.filter(
      (file) =>
        !existingKeys.has(
          `${file.name}-${file.size}-${file.lastModified}`
        )
    );

    return [
      ...previous,
      ...uniqueFiles
    ];
  });
};


  const handleDocumentsChange = (event) => {
    addDocuments(event.target.files);

    event.target.value = "";
  };


  const handleDragOver = (event) => {
    event.preventDefault();
    setDragging(true);
  };


  const handleDragLeave = (event) => {
    event.preventDefault();
    setDragging(false);
  };


  const handleDrop = (event) => {
    event.preventDefault();

    setDragging(false);

    addDocuments(event.dataTransfer.files);
  };


  const removeDocument = (index) => {
    setDocuments((previous) =>
      previous.filter((_, fileIndex) => fileIndex !== index)
    );
  };


  /* =========================================================
     SUBMIT
  ========================================================= */

const handleSubmit = async (event) => {
  event.preventDefault();

  if (!formData.consent) {
    alert("Please confirm the consent before submitting.");
    return;
  }

  try {
    const leadFormData = new FormData();

    /* =====================================================
       MAIN LEAD IDENTIFICATION
    ===================================================== */

    leadFormData.append(
      "name",
      formData.customerName
    );

    leadFormData.append(
      "phone",
      formData.mobile
    );

    leadFormData.append(
      "matter",
      "Cheque Misuse"
    );

    leadFormData.append(
      "form_name",
      "Bank NBFC Cheque Misuse"
    );

    leadFormData.append(
      "page_url",
      window.location.href
    );


    /* =====================================================
       ALL FORM FIELDS
    ===================================================== */

    const fields = {
      category: "Bank / NBFC",

      matter: "Cheque Misuse",

      source:
        "Bank NBFC Cheque Misuse Assistance",

      institutionType:
        formData.institutionType,

      institutionName:
        formData.institutionName,

      branchOffice:
        formData.branchOffice,

      customerType:
        formData.customerType,

      customerName:
        formData.customerName,

      accountReference:
        formData.accountReference,

      mobile:
        formData.mobile,

      email:
        formData.email,

      chequeNumber:
        formData.chequeNumber,

      chequeAmount:
        formData.chequeAmount,

      chequeDate:
        formData.chequeDate,

      chequeStatus:
        formData.chequeStatus,

      misuseDetails:
        formData.misuseDetails,

      matterDescription:
        formData.matterDescription,

      state:
        formData.state,

      city:
        formData.city,

      matterLocation:
        formData.matterLocation,

      consent:
        formData.consent,

      page_url:
        window.location.href,
    };


    leadFormData.append(
      "fields",
      JSON.stringify(fields)
    );


    /* =====================================================
       DOCUMENTS
    ===================================================== */

    documents.forEach((file) => {

      leadFormData.append(
        "documents[]",
        file
      );

    });


    /* =====================================================
       SEND LEAD
    ===================================================== */

    const response = await fetch(
      "/api/leadify",
      {
        method: "POST",
        body: leadFormData,
      }
    );


    const result = await response.json();


    /* =====================================================
       RESPONSE CHECK
    ===================================================== */

    if (!response.ok) {

      throw new Error(
        result?.message ||
        "Unable to submit the request."
      );

    }


    /* =====================================================
       SUCCESS
    ===================================================== */

    setSubmitted(true);

    /* Clear form */

    setFormData({
      institutionType: "",
      institutionName: "",
      branchOffice: "",

      customerType: "",
      customerName: "",
      accountReference: "",
      mobile: "",
      email: "",

      chequeNumber: "",
      chequeAmount: "",
      chequeDate: "",
      chequeStatus: "",

      misuseDetails: "",
      matterDescription: "",

      state: "",
      city: "",
      matterLocation: "",

      consent: false,
    });


    /* Clear uploaded documents */

    setDocuments([]);

  } catch (error) {

    console.error(
      "Bank/NBFC cheque misuse submission error:",
      error
    );

    alert(
      error?.message ||
      "Something went wrong while submitting your request. Please try again."
    );

  }
};


  const cities =
    formData.state
      ? STATES[formData.state] || []
      : [];


  return (
    <main className="bank-misuse-page">

      {/* =================================================
          HERO
      ================================================= */}

      <section className="bank-misuse-hero">

        <div className="bank-misuse-hero-content">

          <span className="bank-misuse-eyebrow">
            BANK / NBFC CHEQUE MISUSE ASSISTANCE
          </span>

          <h1>
            Cheque Misuse
            <br />
            <span>Support for Banks & NBFCs</span>
          </h1>

          <p>
            Facing a cheque misuse issue involving a borrower,
            customer or business account? Share the relevant
            details and documents for a structured assessment
            of the matter.
          </p>

          <div className="bank-misuse-hero-buttons">

            <a
              href="#case-assessment"
              className="bank-misuse-primary-btn"
            >
              Request Case Assessment
            </a>

            <a
              href="tel:+919891188400"
              className="bank-misuse-secondary-btn"
            >
              Talk to Our Team
            </a>

          </div>

        </div>


        {/* =================================================
            HERO VISUAL
        ================================================= */}

        {/* =====================================================
    HERO IMAGE
===================================================== */}

<div className="bank-misuse-hero-visual">

  <div className="bank-misuse-hero-image-wrap">

    <img
      src="/bank-nbfc-cheque-misuse.png"
      alt="Bank and NBFC cheque misuse assistance"
      className="bank-misuse-hero-image"
    />

  </div>

</div>

      </section>


      {/* =================================================
          INFORMATION
      ================================================= */}

      <section className="bank-misuse-info">

        <div className="bank-misuse-container">

          <div className="bank-misuse-info-heading">

            <span className="bank-misuse-eyebrow">
              WHEN A CHEQUE IS MISUSED
            </span>

            <h2>
              A cheque given for one purpose
              <span> can create a different dispute.</span>
            </h2>

            <p>
              Cheque misuse matters can arise when a cheque is
              presented, deposited or used in circumstances that
              differ from the understanding between the parties.
              For Banks and NBFCs, timely review of the cheque,
              transaction records and supporting documents can
              help establish the relevant facts of the matter.
            </p>

          </div>


          <div className="bank-misuse-info-grid">

            <div className="bank-misuse-info-card">

              <div className="bank-misuse-card-number">
                01
              </div>

              <h3>
                Cheque & Transaction Review
              </h3>

              <p>
                Review the cheque details, transaction history
                and available records related to the matter.
              </p>

            </div>


            <div className="bank-misuse-info-card">

              <div className="bank-misuse-card-number">
                02
              </div>

              <h3>
                Document & Record Assessment
              </h3>

              <p>
                Assess relevant agreements, notices,
                correspondence, account records and other
                supporting documents.
              </p>

            </div>


            <div className="bank-misuse-info-card">

              <div className="bank-misuse-card-number">
                03
              </div>

              <h3>
                Case-Specific Assistance
              </h3>

              <p>
                Get assistance based on the facts, documents
                and circumstances of the particular cheque
                misuse matter.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          FORM
      ================================================= */}

      <section
        className="bank-misuse-form-section"
        id="case-assessment"
      >

        <div className="bank-misuse-form-container">

          <div className="bank-misuse-form-heading">

            <span className="bank-misuse-eyebrow">
              CASE ASSESSMENT
            </span>

            <h2>
              Share Your
              <span> Cheque Misuse Matter</span>
            </h2>

            <p>
              Provide the relevant Bank or NBFC, customer and
              cheque details. Upload supporting documents so
              the matter can be reviewed with the available
              information.
            </p>

          </div>


          <form
            className="bank-misuse-form"
            onSubmit={handleSubmit}
          >

            {/* =================================================
                01 INSTITUTION DETAILS
            ================================================= */}

            <div className="bank-misuse-section-title">
              <span>01</span>
              Institution Details
            </div>


            <div className="bank-misuse-form-grid">

              <div className="bank-misuse-field">

                <label>
                  Institution Type
                </label>

                <select
                  name="institutionType"
                  value={formData.institutionType}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select institution type
                  </option>

                  <option value="Bank">
                    Bank
                  </option>

                  <option value="NBFC">
                    NBFC
                  </option>

                  <option value="Financial Institution">
                    Financial Institution
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>


              <div className="bank-misuse-field">

                <label>
                  Institution Name
                </label>

                <input
                  type="text"
                  name="institutionName"
                  value={formData.institutionName}
                  onChange={handleChange}
                  placeholder="Enter bank / NBFC name"
                  required
                />

              </div>


              <div className="bank-misuse-field full-field">

                <label>
                  Branch / Office
                </label>

                <input
                  type="text"
                  name="branchOffice"
                  value={formData.branchOffice}
                  onChange={handleChange}
                  placeholder="Enter branch or office name"
                  required
                />

              </div>

            </div>


            {/* =================================================
                02 CUSTOMER / BORROWER DETAILS
            ================================================= */}

            <div className="bank-misuse-section-title">

              <span>02</span>

              Customer / Borrower Details

            </div>


            <div className="bank-misuse-form-grid">

              <div className="bank-misuse-field">

                <label>
                  Customer Type
                </label>

                <select
                  name="customerType"
                  value={formData.customerType}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select customer type
                  </option>

                  <option value="Individual">
                    Individual
                  </option>

                  <option value="Business">
                    Business
                  </option>

                  <option value="Company">
                    Company
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>


              <div className="bank-misuse-field">

                <label>
                  Customer / Borrower Name
                </label>

                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleChange}
                  placeholder="Enter customer or borrower name"
                  required
                />

              </div>


              <div className="bank-misuse-field">

                <label>
                  Account / Loan Reference
                </label>

                <input
                  type="text"
                  name="accountReference"
                  value={formData.accountReference}
                  onChange={handleChange}
                  placeholder="Enter account or loan reference"
                />

              </div>


              <div className="bank-misuse-field">

                <label>
                  Registered Mobile Number
                </label>

                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                  pattern="[0-9]{10}"
                  maxLength="10"
                  required
                />

              </div>


              <div className="bank-misuse-field full-field">

                <label>
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  required
                />

              </div>

            </div>


            {/* =================================================
                03 CHEQUE DETAILS
            ================================================= */}

            <div className="bank-misuse-section-title">

              <span>03</span>

              Cheque Details

            </div>


            <div className="bank-misuse-form-grid">

              <div className="bank-misuse-field">

                <label>
                  Cheque Number
                </label>

                <input
                  type="text"
                  name="chequeNumber"
                  value={formData.chequeNumber}
                  onChange={handleChange}
                  placeholder="Enter cheque number"
                  required
                />

              </div>


              <div className="bank-misuse-field">

                <label>
                  Cheque Amount
                </label>

                <input
                  type="number"
                  name="chequeAmount"
                  value={formData.chequeAmount}
                  onChange={handleChange}
                  placeholder="Enter cheque amount"
                  min="0"
                  required
                />

              </div>


              <div className="bank-misuse-field">

                <label>
                  Cheque Date
                </label>

                <input
                  type="date"
                  name="chequeDate"
                  value={formData.chequeDate}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="bank-misuse-field">

                <label>
                  Cheque Status
                </label>

                <select
                  name="chequeStatus"
                  value={formData.chequeStatus}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select cheque status
                  </option>

                  <option value="Presented">
                    Presented
                  </option>

                  <option value="Returned">
                    Returned
                  </option>

                  <option value="Misused">
                    Misused
                  </option>

                  <option value="Disputed">
                    Disputed
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>

            </div>


            {/* =================================================
                04 MISUSE DETAILS
            ================================================= */}

            <div className="bank-misuse-section-title">

              <span>04</span>

              Misuse Details

            </div>


            <div className="bank-misuse-form-grid">

              <div className="bank-misuse-field full-field">

                <label>
                  How was the cheque misused?
                </label>

                <textarea
                  name="misuseDetails"
                  value={formData.misuseDetails}
                  onChange={handleChange}
                  placeholder="Explain how the cheque was allegedly misused"
                  required
                />

              </div>


              <div className="bank-misuse-field full-field">

                <label>
                  Brief Description of the Matter
                </label>

                <textarea
                  name="matterDescription"
                  value={formData.matterDescription}
                  onChange={handleChange}
                  placeholder="Provide relevant facts, events and communication related to the cheque."
                  required
                />

              </div>

            </div>


            {/* =================================================
                05 LOCATION DETAILS
            ================================================= */}

            <div className="bank-misuse-section-title">

              <span>05</span>

              Location Details

            </div>


            <div className="bank-misuse-form-grid">

              <div className="bank-misuse-field">

                <label>
                  State
                </label>

                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    Select State
                  </option>

                  {Object.keys(STATES).map((state) => (
                    <option
                      key={state}
                      value={state}
                    >
                      {state}
                    </option>
                  ))}

                </select>

              </div>


              <div className="bank-misuse-field">

                <label>
                  City
                </label>

                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  disabled={!formData.state}
                  required
                >

                  <option value="">
                    {formData.state
                      ? "Select City"
                      : "Select State First"}
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


              <div className="bank-misuse-field full-field">

                <label>
                  Branch / Matter Location
                </label>

                <input
                  type="text"
                  name="matterLocation"
                  value={formData.matterLocation}
                  onChange={handleChange}
                  placeholder="Enter branch or matter location"
                  required
                />

              </div>

            </div>


            {/* =================================================
                06 SUPPORTING DOCUMENTS
            ================================================= */}

            <div className="bank-misuse-section-title">
              <span>06</span>
              Supporting Documents
            </div>

            <div className="bank-misuse-field bank-misuse-full-field">

              <label>
                Upload Relevant Documents
                <span>(Optional)</span>
              </label>

              <div
                className={`bank-misuse-document-dropzone ${
                  dragging ? "dragging" : ""
                }`}
                onDragEnter={handleDragOver}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() =>
                  document
                    .getElementById("bank-misuse-document-upload")
                    ?.click()
                }
              >

                <div className="bank-misuse-document-plus">
                  +
                </div>

                <strong>
                  Drag & Drop Documents Here
                </strong>

                <span>
                  or click to browse files
                </span>

                <input
                  id="bank-misuse-document-upload"
                  type="file"
                  multiple
                  hidden
                  onChange={handleDocumentsChange}
                  accept={ACCEPTED_FILE_TYPES}
                />

              </div>


<div className="bank-misuse-document-upload-note">
  Accepted formats: PDF, JPG, JPEG, PNG, DOC, DOCX, XLS, XLSX
  <span>Maximum file size: 10 MB per file</span>
</div>
              {documents.length > 0 && (

                <div className="bank-misuse-document-list">

                  {documents.map((file, index) => (

                    <div
                      className="bank-misuse-document-item"
                      key={`${file.name}-${file.lastModified}-${index}`}
                    >

                      <div className="bank-misuse-document-info">

                        <div className="bank-misuse-document-icon">
                          📄
                        </div>

                        <div>

                          <strong>
                            {file.name}
                          </strong>

                          <small>
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </small>

                        </div>

                      </div>

                      <button
                        type="button"
                        className="bank-misuse-document-remove"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeDocument(index);
                        }}
                        aria-label={`Remove ${file.name}`}
                      >
                        ×
                      </button>

                    </div>

                  ))}

                </div>

              )}

            </div>


            {/* =================================================
                CONSENT
            ================================================= */}

            <div className="bank-misuse-consent">

              <label>

                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                />

                <span>
                  I confirm that the information provided above
                  is accurate to the best of my knowledge and
                  that the submitted documents may be reviewed
                  for the purpose of assessing this cheque misuse
                  matter.
                </span>

              </label>

            </div>


            {/* =================================================
                SUBMIT
            ================================================= */}

            <button
              type="submit"
              className="bank-misuse-submit"
            >
              Submit Cheque Misuse Matter
            </button>


            {/* =================================================
                SUCCESS
            ================================================= */}

            {submitted && (

              <div className="bank-misuse-success">

                Thank you. Your cheque misuse matter has been
                submitted successfully. Our team will review
                the information and documents provided.

              </div>

            )}

          </form>

        </div>

      </section>

    </main>
  );
}