"use client";

import { useState } from "react";


/* =========================================================
   STATE → CITY / DISTRICT DATA
   ========================================================= */

const locationData = {
  Haryana: [
    "Ambala",
    "Bhiwani",
    "Charkhi Dadri",
    "Faridabad",
    "Fatehabad",
    "Gurugram",
    "Hisar",
    "Jhajjar",
    "Jind",
    "Kaithal",
    "Karnal",
    "Kurukshetra",
    "Mahendragarh",
    "Nuh",
    "Palwal",
    "Panchkula",
    "Panipat",
    "Rewari",
    "Rohtak",
    "Sirsa",
    "Sonipat",
    "Yamunanagar",
  ],

  Delhi: [
    "Central Delhi",
    "East Delhi",
    "New Delhi",
    "North Delhi",
    "North East Delhi",
    "North West Delhi",
    "Shahdara",
    "South Delhi",
    "South East Delhi",
    "South West Delhi",
    "West Delhi",
  ],

  Maharashtra: [
    "Ahmednagar",
    "Akola",
    "Amravati",
    "Aurangabad",
    "Beed",
    "Bhandara",
    "Buldhana",
    "Chandrapur",
    "Dhule",
    "Gadchiroli",
    "Gondia",
    "Hingoli",
    "Jalgaon",
    "Jalna",
    "Kolhapur",
    "Latur",
    "Mumbai City",
    "Mumbai Suburban",
    "Nagpur",
    "Nanded",
    "Nandurbar",
    "Nashik",
    "Osmanabad",
    "Palghar",
    "Parbhani",
    "Pune",
    "Raigad",
    "Ratnagiri",
    "Sangli",
    "Satara",
    "Sindhudurg",
    "Solapur",
    "Thane",
    "Wardha",
    "Washim",
    "Yavatmal",
  ],

  "Uttar Pradesh": [
    "Agra",
    "Aligarh",
    "Ayodhya",
    "Azamgarh",
    "Bareilly",
    "Bhadohi",
    "Bijnor",
    "Bulandshahr",
    "Etawah",
    "Farrukhabad",
    "Firozabad",
    "Ghaziabad",
    "Gorakhpur",
    "Hapur",
    "Jhansi",
    "Kanpur Nagar",
    "Lucknow",
    "Mathura",
    "Meerut",
    "Moradabad",
    "Muzaffarnagar",
    "Noida",
    "Prayagraj",
    "Saharanpur",
    "Shahjahanpur",
    "Varanasi",
  ],

  Rajasthan: [
    "Ajmer",
    "Alwar",
    "Bharatpur",
    "Bhilwara",
    "Bikaner",
    "Bundi",
    "Chittorgarh",
    "Jaipur",
    "Jaisalmer",
    "Jodhpur",
    "Kota",
    "Nagaur",
    "Pali",
    "Sikar",
    "Sri Ganganagar",
    "Udaipur",
  ],

  Gujarat: [
    "Ahmedabad",
    "Amreli",
    "Anand",
    "Bharuch",
    "Bhavnagar",
    "Gandhinagar",
    "Jamnagar",
    "Junagadh",
    "Kutch",
    "Mehsana",
    "Rajkot",
    "Surat",
    "Vadodara",
    "Valsad",
  ],

  Karnataka: [
    "Bengaluru Urban",
    "Belagavi",
    "Ballari",
    "Bidar",
    "Chikkamagaluru",
    "Dakshina Kannada",
    "Dharwad",
    "Hassan",
    "Hubballi",
    "Mangaluru",
    "Mysuru",
    "Shivamogga",
    "Tumakuru",
    "Udupi",
  ],

  Telangana: [
    "Hyderabad",
    "Karimnagar",
    "Khammam",
    "Medak",
    "Medchal-Malkajgiri",
    "Nalgonda",
    "Nizamabad",
    "Rangareddy",
    "Sangareddy",
    "Warangal",
  ],

  "Tamil Nadu": [
    "Chennai",
    "Coimbatore",
    "Cuddalore",
    "Erode",
    "Madurai",
    "Salem",
    "Thanjavur",
    "Tiruchirappalli",
    "Tirunelveli",
    "Tiruppur",
    "Vellore",
  ],

  "West Bengal": [
    "Asansol",
    "Bardhaman",
    "Darjeeling",
    "Durgapur",
    "Howrah",
    "Jalpaiguri",
    "Kolkata",
    "Malda",
    "Siliguri",
  ],

  Punjab: [
    "Amritsar",
    "Bathinda",
    "Firozpur",
    "Jalandhar",
    "Ludhiana",
    "Moga",
    "Patiala",
    "Pathankot",
    "Sangrur",
  ],

  Bihar: [
    "Araria",
    "Begusarai",
    "Bhagalpur",
    "Bhojpur",
    "Darbhanga",
    "Gaya",
    "Muzaffarpur",
    "Patna",
    "Purnia",
    "Samastipur",
    "Saran",
    "Vaishali",
  ],

  "Madhya Pradesh": [
    "Bhopal",
    "Burhanpur",
    "Dewas",
    "Gwalior",
    "Indore",
    "Jabalpur",
    "Katni",
    "Ratlam",
    "Rewa",
    "Sagar",
    "Satna",
    "Ujjain",
  ],

  Kerala: [
    "Alappuzha",
    "Ernakulam",
    "Idukki",
    "Kannur",
    "Kasaragod",
    "Kollam",
    "Kottayam",
    "Kozhikode",
    "Malappuram",
    "Palakkad",
    "Pathanamthitta",
    "Thiruvananthapuram",
    "Thrissur",
    "Wayanad",
  ],

  Odisha: [
    "Balasore",
    "Bargarh",
    "Cuttack",
    "Ganjam",
    "Jagatsinghpur",
    "Jajpur",
    "Khordha",
    "Koraput",
    "Mayurbhanj",
    "Puri",
    "Sambalpur",
    "Sundargarh",
  ],

  Jharkhand: [
    "Bokaro",
    "Dhanbad",
    "Deoghar",
    "Dumka",
    "East Singhbhum",
    "Giridih",
    "Hazaribagh",
    "Ranchi",
    "Seraikela Kharsawan",
    "West Singhbhum",
  ],

  Chhattisgarh: [
    "Bilaspur",
    "Durg",
    "Korba",
    "Raigarh",
    "Raipur",
    "Rajnandgaon",
    "Surguja",
  ],

  Uttarakhand: [
    "Almora",
    "Dehradun",
    "Haridwar",
    "Nainital",
    "Pauri Garhwal",
    "Pithoragarh",
    "Rudraprayag",
    "Udham Singh Nagar",
    "Uttarkashi",
  ],

  "Himachal Pradesh": [
    "Bilaspur",
    "Chamba",
    "Hamirpur",
    "Kangra",
    "Kullu",
    "Mandi",
    "Shimla",
    "Sirmaur",
    "Solan",
    "Una",
  ],

  Assam: [
    "Barpeta",
    "Cachar",
    "Dibrugarh",
    "Jorhat",
    "Kamrup",
    "Kamrup Metropolitan",
    "Lakhimpur",
    "Nagaon",
    "Sivasagar",
    "Sonitpur",
    "Tinsukia",
  ],

  Goa: [
    "North Goa",
    "South Goa",
    "Panaji",
    "Margao",
    "Vasco da Gama",
  ],

  "Jammu and Kashmir": [
    "Anantnag",
    "Baramulla",
    "Budgam",
    "Jammu",
    "Kathua",
    "Kupwara",
    "Pulwama",
    "Rajouri",
    "Srinagar",
    "Udhampur",
  ],

  Ladakh: [
    "Kargil",
    "Leh",
  ],

  Puducherry: [
    "Karaikal",
    "Mahe",
    "Puducherry",
    "Yanam",
  ],

  Chandigarh: [
    "Chandigarh",
  ],
};


/* =========================================================
   PAGE
========================================================= */

export default function IndividualChequeMisusePage() {

  const [selectedState, setSelectedState] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const ACCEPTED_FILE_TYPES =
  ".pdf,.jpg,.jpeg,.png,.doc,.docx,.xls,.xlsx";

const MAX_FILE_SIZE = 10 * 1024 * 1024;

  const cities = selectedState
    ? locationData[selectedState] || []
    : [];


    const addDocuments = (files) => {
  const newFiles = Array.from(files || []);

  if (!newFiles.length) return;

  const validFiles = newFiles.filter((file) => {

    if (file.size > MAX_FILE_SIZE) {
      alert(`${file.name} is larger than 10 MB.`);
      return false;
    }

    return true;
  });

  if (!validFiles.length) return;

  setDocuments((prev) => [
    ...prev,
    ...validFiles,
  ]);
};


const handleDocumentsChange = (e) => {
  addDocuments(e.target.files);

  e.target.value = "";
};


const handleDragOver = (e) => {
  e.preventDefault();
  e.stopPropagation();

  setIsDragging(true);
};


const handleDragLeave = (e) => {
  e.preventDefault();
  e.stopPropagation();

  setIsDragging(false);
};


const handleDrop = (e) => {
  e.preventDefault();
  e.stopPropagation();

  setIsDragging(false);

  addDocuments(e.dataTransfer.files);
};


const removeDocument = (index) => {
  setDocuments((prev) =>
    prev.filter((_, i) => i !== index)
  );
};


  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };


const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const form = event.currentTarget;

    const formData = new FormData(form);

    /*
    |--------------------------------------------------------------------------
    | BASIC LEAD INFORMATION
    |--------------------------------------------------------------------------
    */

    formData.set(
      "name",
      formData.get("fullName") || ""
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
      "Individual Cheque Misuse"
    );

    formData.set(
      "page_url",
      window.location.href
    );


    /*
    |--------------------------------------------------------------------------
    | ADDITIONAL FORM DATA
    |--------------------------------------------------------------------------
    */

    const additionalFields = {

      category:
        formData.get("category") || "",

      matter:
        formData.get("matter") || "",

      chequeType:
        formData.get("chequeType") || "",

      chequeAmount:
        formData.get("chequeAmount") || "",

      bankName:
        formData.get("bankName") || "",

      chequeDate:
        formData.get("chequeDate") || "",

      state:
        formData.get("state") || "",

      city:
        formData.get("city") || "",

      matterDetails:
        formData.get("matterDetails") || ""

    };


    /*
    |--------------------------------------------------------------------------
    | REMOVE DUPLICATE FIELD
    |--------------------------------------------------------------------------
    */

    formData.delete("fields");


    /*
    |--------------------------------------------------------------------------
    | ADDITIONAL DATA AS JSON
    |--------------------------------------------------------------------------
    */

    formData.append(
      "fields",
      JSON.stringify(additionalFields)
    );


    /*
    |--------------------------------------------------------------------------
    | DOCUMENTS
    |--------------------------------------------------------------------------
    */

    documents.forEach((file) => {

      formData.append(
        "documents[]",
        file
      );

    });


    /*
    |--------------------------------------------------------------------------
    | SEND TO WORDPRESS
    |--------------------------------------------------------------------------
    */

    const response = await fetch(
      "https://chequebounceadvisor.com/wp-json/leadify/v1/lead",
      {
        method: "POST",
        body: formData
      }
    );


    const result =
      await response.json();


    /*
    |--------------------------------------------------------------------------
    | SUCCESS
    |--------------------------------------------------------------------------
    */

    if (
      response.ok &&
      result.success
    ) {

      setSubmitted(true);

      setDocuments([]);

      form.reset();

      setSelectedState("");

      return;
    }


    /*
    |--------------------------------------------------------------------------
    | ERROR
    |--------------------------------------------------------------------------
    */

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

  return (

    <main className="misuse-page">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="misuse-hero">

        <div className="misuse-hero-content">

          <span className="service-eyebrow">
            INDIVIDUAL • CHEQUE MISUSE
          </span>

          <h1>
            Cheque Misused?
            <br />
            <span>Understand Your Options.</span>
          </h1>

          <p>
            If your cheque has been used without proper authority,
            share the relevant details and get assistance in
            understanding your situation and possible next steps.
          </p>

          <a
            href="#misuse-form"
            className="misuse-hero-btn"
          >
            Get Assistance
            <span>↓</span>
          </a>

        </div>


        <div className="misuse-hero-visual">

  <div className="misuse-hero-image-wrap">

    <img
      src="/individual-cheque-misuse.png"
      alt="Individual cheque misuse assistance"
      className="misuse-hero-image"
    />

  </div>

</div>
      </section>


      {/* =====================================================
          WHAT TYPE OF MATTER
      ===================================================== */}

      <section className="misuse-types">

        <div className="misuse-container">

          <div className="misuse-heading">

            <span className="service-eyebrow">
              CHEQUE MISUSE ASSISTANCE
            </span>

            <h2>
              Tell Us What
              <span> Happened</span>
            </h2>

            <p>
              Different cheque misuse situations can require different
              types of assistance. Start by identifying the nature of
              the cheque involved.
            </p>

          </div>


          <div className="misuse-type-grid">

            <div className="misuse-type-card">

              <span>01</span>

              <h3>
                Security Cheque
              </h3>

              <p>
                A cheque provided as security that may have been
                presented or used in a disputed manner.
              </p>

            </div>


            <div className="misuse-type-card">

              <span>02</span>

              <h3>
                Blank Cheque
              </h3>

              <p>
                A cheque issued without certain details that may
                subsequently have been completed or presented.
              </p>

            </div>


            <div className="misuse-type-card">

              <span>03</span>

              <h3>
                Other Cheque Misuse
              </h3>

              <p>
                Any other situation where you believe your cheque
                may have been used without proper authority.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FORM
      ===================================================== */}

      <section
        id="misuse-form"
        className="misuse-form-section"
      >

        <div className="misuse-form-container">


          <div className="misuse-form-heading">

            <span className="service-eyebrow">
              CHEQUE MISUSE ASSISTANCE FORM
            </span>

            <h2>
              Share Your
              <span> Details</span>
            </h2>

            <p>
              Provide the relevant information about the cheque and
              circumstances so your enquiry can be understood properly.
            </p>

          </div>


          <form
            className="misuse-form"
            onSubmit={handleSubmit}
          >


            {/* =================================================
                HIDDEN LEAD INFORMATION
            ================================================= */}

            <input
              type="hidden"
              name="category"
              value="Individual"
            />

            <input
              type="hidden"
              name="matter"
              value="Cheque Misuse"
            />

            <input
              type="hidden"
              name="source"
              value="Individual Cheque Misuse Assistance"
            />


            {/* =================================================
                01 PERSONAL DETAILS
            ================================================= */}

            <div className="form-section-title">

              <span>01</span>

              Personal Details

            </div>


            <div className="form-grid">

              <div className="form-field">

                <label>
                  Full Name *
                </label>

                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  required
                />

              </div>


              <div className="form-field">

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


              <div className="form-field">

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
                02 CHEQUE TYPE
            ================================================= */}

            <div className="form-section-title">

              <span>02</span>

              Cheque Information

            </div>


            <div className="form-grid">


              <div className="form-field">

                <label>
                  Type of Cheque *
                </label>

                <select
                  name="chequeType"
                  defaultValue=""
                  required
                >

                  <option value="">
                    Choose cheque type
                  </option>

                  <option value="Security Cheque">
                    Security Cheque
                  </option>

                  <option value="Blank Cheque">
                    Blank Cheque
                  </option>

                  <option value="Signed Cheque">
                    Signed Cheque
                  </option>

                  <option value="Post Dated Cheque">
                    Post-Dated Cheque
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>


              <div className="form-field">

                <label>
                  Cheque Amount
                </label>

                <input
                  type="number"
                  name="chequeAmount"
                  placeholder="Enter amount if known"
                  min="0"
                />

              </div>


              <div className="form-field">

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


              <div className="form-field">

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
                03 LOCATION
            ================================================= */}

            <div className="form-section-title">

              <span>03</span>

              Location

            </div>


            <div className="form-grid">


              <div className="form-field">

                <label>
                  State *
                </label>

                <select
                  name="state"
                  value={selectedState}
                  onChange={handleStateChange}
                  required
                >

                  <option value="">
                    Choose your state
                  </option>

                  {Object.keys(locationData).map((state) => (

                    <option
                      key={state}
                      value={state}
                    >
                      {state}
                    </option>

                  ))}

                </select>

              </div>


              <div className="form-field">

                <label>
                  City / District *
                </label>

                <select
                  name="city"
                  required
                  disabled={!selectedState}
                  defaultValue=""
                >

                  <option value="">
                    {selectedState
                      ? "Choose your city / district"
                      : "Select state first"}
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
                04 MISUSE DETAILS
            ================================================= */}

            <div className="form-section-title">

              <span>04</span>

              Misuse Details

            </div>


            <div className="form-field full-field">

              <label>
                Explain What Happened <span>(Optional)</span>
              </label>

              <textarea
                name="matterDetails"
                rows="7"
                placeholder="Briefly explain how the cheque was issued and what you believe happened..."
              ></textarea>

            </div>


            {/* =================================================
                05 DOCUMENTS
            ================================================= */}

            <div className="form-section-title">

              <span>05</span>

              Supporting Documents

            </div>


           <div className="form-field full-field">

  <label>
    Upload Relevant Documents <span>(Optional)</span>
  </label>

  <input
    id="misuse-documents"
    type="file"
    multiple
    hidden
    accept={ACCEPTED_FILE_TYPES}
    onChange={handleDocumentsChange}
  />

  <div
    className={`document-upload-box ${
      isDragging ? "document-upload-box-dragging" : ""
    }`}
    onDragOver={handleDragOver}
    onDragEnter={handleDragOver}
    onDragLeave={handleDragLeave}
    onDrop={handleDrop}
  >

    <label
      htmlFor="misuse-documents"
      className="document-upload-content"
    >

      <div className="document-upload-icon">
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

<div className="individual-document-upload-note">
  Accepted formats: PDF, JPG, JPEG, PNG, DOC, DOCX, XLS, XLSX
  <span>Maximum file size: 10 MB per file</span>
</div>

</div>

{documents.length > 0 && (

  <div className="document-list">

    {documents.map((file, index) => (

      <div
        className="document-item"
        key={`${file.name}-${index}`}
      >

        <div className="document-file-info">

          <span className="document-file-icon">
            📄
          </span>

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
          className="document-remove-btn"
          onClick={() => removeDocument(index)}
        >
          ×
        </button>

      </div>

    ))}

  </div>

)}


            {/* =================================================
                06 CONSENT
            ================================================= */}

            <div className="form-section-title">

              <span>06</span>

              Confirmation

            </div>


            <div className="form-consent">

              <label className="consent-label">

                <input
                  type="checkbox"
                  name="consent"
                  required
                />

                <span>
                  I confirm that the information provided by me is
                  accurate to the best of my knowledge and I consent
                  to Cheque Bounce Advisor contacting me regarding
                  the assistance requested. I understand that
                  submitting this form does not by itself create an
                  attorney-client relationship.
                </span>

              </label>

            </div>


            {/* =================================================
                SUBMIT
            ================================================= */}

            <button
              type="submit"
              className="misuse-submit-btn"
            >

              Submit Assistance Request

              <span>
                →
              </span>

            </button>


            {submitted && (

              <div className="misuse-success">

                Your assistance request has been recorded.
                We will review the information provided.

              </div>

            )}

          </form>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="misuse-final-cta">

        <div>

          <span className="service-eyebrow">
            NEED HELP?
          </span>

          <h2>
            Unsure What To Do
            <span> Next?</span>
          </h2>

          <p>
            Share your situation and get assistance in understanding
            the possible next steps.
          </p>

          <a
            href="#misuse-form"
            className="misuse-cta-btn"
          >
            Get Assistance
            <span>→</span>
          </a>

        </div>

      </section>


    </main>
  );
}