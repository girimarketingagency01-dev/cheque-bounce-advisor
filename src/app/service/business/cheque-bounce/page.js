"use client";

import { useState } from "react";
import "./page.css";


/* =========================================================
   LOCATION DATA
   Add your complete existing locationData here.
   ========================================================= */

const locationData = {
  "Andhra Pradesh": [
    "Anantapur",
    "Chittoor",
    "East Godavari",
    "Guntur",
    "Kadapa",
    "Krishna",
    "Kurnool",
    "Nellore",
    "Prakasam",
    "Srikakulam",
    "Visakhapatnam",
    "Vizianagaram",
    "West Godavari",
  ],

  "Arunachal Pradesh": [
    "Itanagar",
    "Tawang",
    "West Kameng",
    "East Kameng",
    "Papum Pare",
    "Lower Subansiri",
    "Upper Subansiri",
    "West Siang",
    "East Siang",
    "Changlang",
    "Tirap",
    "Lohit",
    "Namsai",
  ],

  Assam: [
    "Baksa",
    "Barpeta",
    "Biswanath",
    "Bongaigaon",
    "Cachar",
    "Charaideo",
    "Darrang",
    "Dhemaji",
    "Dhubri",
    "Dibrugarh",
    "Goalpara",
    "Golaghat",
    "Guwahati",
    "Hailakandi",
    "Jorhat",
    "Kamrup",
    "Karbi Anglong",
    "Lakhimpur",
    "Majuli",
    "Morigaon",
    "Nagaon",
    "Nalbari",
    "Sivasagar",
    "Sonitpur",
    "Tinsukia",
  ],

  Bihar: [
    "Araria",
    "Arwal",
    "Aurangabad",
    "Banka",
    "Begusarai",
    "Bhagalpur",
    "Bhojpur",
    "Buxar",
    "Darbhanga",
    "East Champaran",
    "Gaya",
    "Gopalganj",
    "Jamui",
    "Jehanabad",
    "Kaimur",
    "Katihar",
    "Khagaria",
    "Kishanganj",
    "Lakhisarai",
    "Madhepura",
    "Madhubani",
    "Munger",
    "Muzaffarpur",
    "Nalanda",
    "Nawada",
    "Patna",
    "Purnia",
    "Rohtas",
    "Saharsa",
    "Samastipur",
    "Saran",
    "Sheikhpura",
    "Sheohar",
    "Sitamarhi",
    "Siwan",
    "Supaul",
    "Vaishali",
    "West Champaran",
  ],

  Chandigarh: [
    "Chandigarh",
  ],

  Chhattisgarh: [
    "Balod",
    "Baloda Bazar",
    "Balrampur",
    "Bastar",
    "Bemetara",
    "Bijapur",
    "Bilaspur",
    "Dantewada",
    "Dhamtari",
    "Durg",
    "Gariaband",
    "Janjgir-Champa",
    "Jashpur",
    "Kabirdham",
    "Kanker",
    "Kondagaon",
    "Korba",
    "Koriya",
    "Mahasamund",
    "Mungeli",
    "Narayanpur",
    "Raigarh",
    "Raipur",
    "Rajnandgaon",
    "Sukma",
    "Surajpur",
    "Surguja",
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

  Goa: [
    "North Goa",
    "South Goa",
  ],

  Gujarat: [
    "Ahmedabad",
    "Amreli",
    "Anand",
    "Aravalli",
    "Banaskantha",
    "Bharuch",
    "Bhavnagar",
    "Botad",
    "Chhota Udaipur",
    "Dahod",
    "Dang",
    "Devbhoomi Dwarka",
    "Gandhinagar",
    "Gir Somnath",
    "Jamnagar",
    "Junagadh",
    "Kheda",
    "Kutch",
    "Mahisagar",
    "Mehsana",
    "Morbi",
    "Narmada",
    "Navsari",
    "Panchmahal",
    "Patan",
    "Porbandar",
    "Rajkot",
    "Sabarkantha",
    "Surat",
    "Surendranagar",
    "Tapi",
    "Vadodara",
    "Valsad",
  ],

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

  "Himachal Pradesh": [
    "Bilaspur",
    "Chamba",
    "Hamirpur",
    "Kangra",
    "Kinnaur",
    "Kullu",
    "Lahaul and Spiti",
    "Mandi",
    "Shimla",
    "Sirmaur",
    "Solan",
    "Una",
  ],

  Jharkhand: [
    "Bokaro",
    "Chatra",
    "Deoghar",
    "Dhanbad",
    "Dumka",
    "East Singhbhum",
    "Garhwa",
    "Giridih",
    "Godda",
    "Gumla",
    "Hazaribagh",
    "Jamtara",
    "Khunti",
    "Koderma",
    "Latehar",
    "Lohardaga",
    "Pakur",
    "Palamu",
    "Ramgarh",
    "Ranchi",
    "Sahibganj",
    "Seraikela Kharsawan",
    "Simdega",
    "West Singhbhum",
  ],

  Karnataka: [
    "Bagalkot",
    "Ballari",
    "Bangalore Rural",
    "Bangalore Urban",
    "Belagavi",
    "Bengaluru",
    "Bidar",
    "Chamarajanagar",
    "Chikballapur",
    "Chikkamagaluru",
    "Chitradurga",
    "Dakshina Kannada",
    "Davanagere",
    "Dharwad",
    "Gadag",
    "Hassan",
    "Haveri",
    "Kalaburagi",
    "Kodagu",
    "Kolar",
    "Koppal",
    "Mandya",
    "Mysuru",
    "Raichur",
    "Ramanagara",
    "Shivamogga",
    "Tumakuru",
    "Udupi",
    "Uttara Kannada",
    "Vijayapura",
    "Yadgir",
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

  "Madhya Pradesh": [
    "Agar Malwa",
    "Alirajpur",
    "Anuppur",
    "Ashoknagar",
    "Balaghat",
    "Barwani",
    "Betul",
    "Bhind",
    "Bhopal",
    "Burhanpur",
    "Chhatarpur",
    "Chhindwara",
    "Damoh",
    "Datia",
    "Dewas",
    "Dhar",
    "Dindori",
    "Guna",
    "Gwalior",
    "Harda",
    "Hoshangabad",
    "Indore",
    "Jabalpur",
    "Jhabua",
    "Katni",
    "Khandwa",
    "Khargone",
    "Mandla",
    "Mandsaur",
    "Morena",
    "Narsinghpur",
    "Neemuch",
    "Panna",
    "Raisen",
    "Rajgarh",
    "Ratlam",
    "Rewa",
    "Sagar",
    "Satna",
    "Sehore",
    "Seoni",
    "Shahdol",
    "Shajapur",
    "Sheopur",
    "Shivpuri",
    "Sidhi",
    "Singrauli",
    "Tikamgarh",
    "Ujjain",
    "Umaria",
    "Vidisha",
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

  Odisha: [
    "Angul",
    "Balangir",
    "Balasore",
    "Bargarh",
    "Bhadrak",
    "Boudh",
    "Cuttack",
    "Deogarh",
    "Dhenkanal",
    "Gajapati",
    "Ganjam",
    "Jagatsinghpur",
    "Jajpur",
    "Jharsuguda",
    "Kalahandi",
    "Kandhamal",
    "Kendrapara",
    "Kendujhar",
    "Khordha",
    "Koraput",
    "Malkangiri",
    "Mayurbhanj",
    "Nabarangpur",
    "Nayagarh",
    "Nuapada",
    "Puri",
    "Rayagada",
    "Sambalpur",
    "Subarnapur",
    "Sundargarh",
  ],

  Punjab: [
    "Amritsar",
    "Barnala",
    "Bathinda",
    "Faridkot",
    "Fatehgarh Sahib",
    "Fazilka",
    "Ferozepur",
    "Gurdaspur",
    "Hoshiarpur",
    "Jalandhar",
    "Kapurthala",
    "Ludhiana",
    "Malerkotla",
    "Mansa",
    "Moga",
    "Pathankot",
    "Patiala",
    "Rupnagar",
    "Sahibzada Ajit Singh Nagar",
    "Sangrur",
    "Shaheed Bhagat Singh Nagar",
    "Sri Muktsar Sahib",
    "Tarn Taran",
  ],

  Rajasthan: [
    "Ajmer",
    "Alwar",
    "Banswara",
    "Baran",
    "Barmer",
    "Bharatpur",
    "Bhilwara",
    "Bikaner",
    "Bundi",
    "Chittorgarh",
    "Churu",
    "Dausa",
    "Dholpur",
    "Dungarpur",
    "Hanumangarh",
    "Jaipur",
    "Jaisalmer",
    "Jalore",
    "Jhalawar",
    "Jhunjhunu",
    "Jodhpur",
    "Karauli",
    "Kota",
    "Nagaur",
    "Pali",
    "Pratapgarh",
    "Rajsamand",
    "Sawai Madhopur",
    "Sikar",
    "Sirohi",
    "Sri Ganganagar",
    "Tonk",
    "Udaipur",
  ],

  "Tamil Nadu": [
    "Ariyalur",
    "Chengalpattu",
    "Chennai",
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kallakurichi",
    "Kancheepuram",
    "Karur",
    "Krishnagiri",
    "Madurai",
    "Mayiladuthurai",
    "Nagapattinam",
    "Namakkal",
    "Nilgiris",
    "Perambalur",
    "Pudukkottai",
    "Ramanathapuram",
    "Ranipet",
    "Salem",
    "Sivaganga",
    "Tenkasi",
    "Thanjavur",
    "Theni",
    "Thoothukudi",
    "Tiruchirappalli",
    "Tirunelveli",
    "Tirupathur",
    "Tiruppur",
    "Tiruvallur",
    "Tiruvannamalai",
    "Tiruvarur",
    "Vellore",
    "Viluppuram",
    "Virudhunagar",
  ],

  Telangana: [
    "Adilabad",
    "Bhadradri Kothagudem",
    "Hyderabad",
    "Jagtial",
    "Jangaon",
    "Jayashankar Bhupalpally",
    "Jogulamba Gadwal",
    "Kamareddy",
    "Karimnagar",
    "Khammam",
    "Komaram Bheem",
    "Mahabubabad",
    "Mahbubnagar",
    "Mancherial",
    "Medak",
    "Medchal-Malkajgiri",
    "Mulugu",
    "Nagarkurnool",
    "Nalgonda",
    "Narayanpet",
    "Nirmal",
    "Nizamabad",
    "Peddapalli",
    "Rajanna Sircilla",
    "Rangareddy",
    "Sangareddy",
    "Siddipet",
    "Suryapet",
    "Vikarabad",
    "Wanaparthy",
    "Warangal",
    "Yadadri Bhuvanagiri",
  ],

  "Uttar Pradesh": [
    "Agra",
    "Aligarh",
    "Ambedkar Nagar",
    "Amethi",
    "Amroha",
    "Auraiya",
    "Ayodhya",
    "Azamgarh",
    "Baghpat",
    "Bahraich",
    "Ballia",
    "Balrampur",
    "Banda",
    "Barabanki",
    "Bareilly",
    "Basti",
    "Bhadohi",
    "Bijnor",
    "Budaun",
    "Bulandshahr",
    "Chandauli",
    "Chitrakoot",
    "Deoria",
    "Etah",
    "Etawah",
    "Farrukhabad",
    "Fatehpur",
    "Firozabad",
    "Gautam Buddha Nagar",
    "Ghaziabad",
    "Ghazipur",
    "Gonda",
    "Gorakhpur",
    "Hamirpur",
    "Hapur",
    "Hardoi",
    "Hathras",
    "Jalaun",
    "Jaunpur",
    "Jhansi",
    "Kannauj",
    "Kanpur Dehat",
    "Kanpur Nagar",
    "Kasganj",
    "Kaushambi",
    "Kheri",
    "Kushinagar",
    "Lalitpur",
    "Lucknow",
    "Maharajganj",
    "Mahoba",
    "Mainpuri",
    "Mathura",
    "Mau",
    "Meerut",
    "Mirzapur",
    "Moradabad",
    "Muzaffarnagar",
    "Pilibhit",
    "Pratapgarh",
    "Prayagraj",
    "Raebareli",
    "Rampur",
    "Saharanpur",
    "Sambhal",
    "Sant Kabir Nagar",
    "Shahjahanpur",
    "Shamli",
    "Shravasti",
    "Siddharthnagar",
    "Sitapur",
    "Sonbhadra",
    "Sultanpur",
    "Unnao",
    "Varanasi",
  ],

  Uttarakhand: [
    "Almora",
    "Bageshwar",
    "Chamoli",
    "Champawat",
    "Dehradun",
    "Haridwar",
    "Nainital",
    "Pauri Garhwal",
    "Pithoragarh",
    "Rudraprayag",
    "Tehri Garhwal",
    "Udham Singh Nagar",
    "Uttarkashi",
  ],

  "West Bengal": [
    "Alipurduar",
    "Bankura",
    "Birbhum",
    "Cooch Behar",
    "Dakshin Dinajpur",
    "Darjeeling",
    "Hooghly",
    "Howrah",
    "Jalpaiguri",
    "Jhargram",
    "Kalimpong",
    "Kolkata",
    "Malda",
    "Murshidabad",
    "Nadia",
    "North 24 Parganas",
    "Paschim Bardhaman",
    "Paschim Medinipur",
    "Purba Bardhaman",
    "Purba Medinipur",
    "Purulia",
    "South 24 Parganas",
    "Uttar Dinajpur",
  ],
};


export default function BusinessChequeBouncePage() {

  const [selectedState, setSelectedState] = useState("");

  const [documents, setDocuments] = useState([]);

  const ACCEPTED_FILE_TYPES =
  ".pdf,.jpg,.jpeg,.png,.doc,.docx,.xls,.xlsx";

const MAX_FILE_SIZE = 10 * 1024 * 1024;

  const [isDragging, setIsDragging] = useState(false);

  const [submitted, setSubmitted] = useState(false);


  /* =========================================================
     DOCUMENT HANDLERS
  ========================================================= */

 const addDocuments = (files) => {

  const newFiles = Array.from(files || []);

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


    const uniqueFiles = validFiles.filter(
      (file) =>
        !existingKeys.has(
          `${file.name}-${file.size}-${file.lastModified}`
        )
    );


    return [
      ...previous,
      ...uniqueFiles,
    ];

  });

};


  const handleDocumentsChange = (e) => {

    addDocuments(e.target.files);

    e.target.value = "";
  };


  const handleDrop = (e) => {

    e.preventDefault();

    setIsDragging(false);

    addDocuments(e.dataTransfer.files);
  };


  const removeDocument = (index) => {

    setDocuments((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };


  /* =========================================================
     SUBMIT
  ========================================================= */

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
      "Business Cheque Bounce"
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

      businessName:
        formData.get("businessName") || "",

      contactPerson:
        formData.get("contactPerson") || "",

      email:
        formData.get("email") || "",

      state:
        formData.get("state") || "",

      city:
        formData.get("city") || "",

      chequeAmount:
        formData.get("chequeAmount") || "",

      bankName:
        formData.get("bankName") || "",

      bounceDate:
        formData.get("bounceDate") || "",

      noticeReceived:
        formData.get("noticeReceived") || "",

      transactionType:
        formData.get("transactionType") || "",

      counterpartyType:
        formData.get("counterpartyType") || "",

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


  const cities = selectedState
    ? locationData[selectedState] || []
    : [];


  return (

    <main className="business-bounce-page">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="business-bounce-hero">

        <div className="business-bounce-hero-content">

          <span className="business-bounce-eyebrow">
            BUSINESS & CORPORATE CHEQUE ASSISTANCE
          </span>

          <h1>
            Protect Your
            <span> Business Receivables.</span>
          </h1>

          <p>
            A bounced cheque can affect business cash flow,
            collections and ongoing commercial relationships.
            Share your matter with us for assistance regarding
            the next steps.
          </p>


          <div className="business-bounce-hero-buttons">

            <a
              href="#business-bounce-form"
              className="business-bounce-primary-btn"
            >
              GET BUSINESS ASSISTANCE
              <span>→</span>
            </a>

            <a
              href="#business-bounce-info"
              className="business-bounce-secondary-btn"
            >
              KNOW MORE
              <span>↓</span>
            </a>

          </div>

        </div>


        {/* =====================================================
    HERO VISUAL
===================================================== */}

<div className="business-bounce-hero-visual">

  <div className="business-bounce-hero-image-wrap">

    <img
      src="/business-cheque-bounce.png"
      alt="Business cheque bounce assistance"
      className="business-bounce-hero-image"
    />

  </div>

</div>
      </section>


      {/* =====================================================
          INFORMATION
      ===================================================== */}

      <section
        id="business-bounce-info"
        className="business-bounce-info"
      >

        <div className="business-bounce-container">

          <div className="business-bounce-info-heading">

            <span className="business-bounce-eyebrow">
              BUSINESS CHEQUE BOUNCE
            </span>

            <h2>
              When Business
              <span> Payments Go Wrong.</span>
            </h2>

            <p>
              Whether the cheque was issued against an invoice,
              commercial transaction, service payment or another
              business obligation, accurate information helps us
              understand the matter and the assistance required.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          FORM
      ===================================================== */}

      <section
        id="business-bounce-form"
        className="business-bounce-form-section"
      >

        <div className="business-bounce-form-container">

          <div className="business-bounce-form-heading">

            <span className="business-bounce-eyebrow">
              BUSINESS CHEQUE BOUNCE ASSISTANCE FORM
            </span>

            <h2>
              Tell Us About Your
              <span> Business Matter</span>
            </h2>

            <p>
              Please provide accurate information. This helps us
              understand your business enquiry and contact you
              regarding the assistance requested.
            </p>

          </div>


          <form
            className="business-bounce-form"
            onSubmit={handleSubmit}
          >


            {/* HIDDEN IDENTIFICATION */}

            <input
              type="hidden"
              name="category"
              value="Business / Corporate"
            />

            <input
              type="hidden"
              name="matter"
              value="Business Cheque Bounce"
            />

            <input
              type="hidden"
              name="source"
              value="Business Cheque Bounce Assistance"
            />


            {/* =================================================
                01 BUSINESS DETAILS
            ================================================= */}

            <div className="business-bounce-section-title">

              <span>01</span>

              Business Details

            </div>


            <div className="business-bounce-form-grid">

              <div className="business-bounce-field">

                <label>
                  Business / Company Name *
                </label>

                <input
                  type="text"
                  name="businessName"
                  placeholder="Enter business or company name"
                  required
                />

              </div>


              <div className="business-bounce-field">

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


              <div className="business-bounce-field">

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


              <div className="business-bounce-field">

                <label>
                  Email Address *
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter business email"
                  required
                />

              </div>

            </div>


            {/* =================================================
                02 BUSINESS LOCATION
            ================================================= */}

            <div className="business-bounce-section-title">

              <span>02</span>

              Business Location

            </div>


            <div className="business-bounce-form-grid">

              <div className="business-bounce-field">

                <label>
                  State *
                </label>

                <select
                  name="state"
                  value={selectedState}
                  onChange={(e) =>
                    setSelectedState(e.target.value)
                  }
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


              <div className="business-bounce-field">

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
                03 CHEQUE DETAILS
            ================================================= */}

            <div className="business-bounce-section-title">

              <span>03</span>

              Cheque Details

            </div>


            <div className="business-bounce-form-grid">

              <div className="business-bounce-field">

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


              <div className="business-bounce-field">

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


              <div className="business-bounce-field">

                <label>
                  Cheque Bounce Date
                </label>

                <input
                  type="date"
                  name="bounceDate"
                />

              </div>


              <div className="business-bounce-field">

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
                04 TRANSACTION DETAILS
            ================================================= */}

            <div className="business-bounce-section-title">

              <span>04</span>

              Transaction Details

            </div>


            <div className="business-bounce-form-grid">

              <div className="business-bounce-field">

                <label>
                  Nature of Transaction
                </label>

                <select
                  name="transactionType"
                  defaultValue=""
                >

                  <option value="">
                    Choose transaction type
                  </option>

                  <option value="Invoice Payment">
                    Invoice Payment
                  </option>

                  <option value="Goods / Supply">
                    Goods / Supply
                  </option>

                  <option value="Services">
                    Services
                  </option>

                  <option value="Loan / Advance">
                    Loan / Advance
                  </option>

                  <option value="Other Business Transaction">
                    Other Business Transaction
                  </option>

                </select>

              </div>


              <div className="business-bounce-field">

                <label>
                  Counterparty Type
                </label>

                <select
                  name="counterpartyType"
                  defaultValue=""
                >

                  <option value="">
                    Choose an option
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

            </div>


            {/* =================================================
                05 MATTER DETAILS
            ================================================= */}

            <div className="business-bounce-section-title">

               <span>05</span>

              Matter Details

            </div>


            <div className="business-bounce-field business-bounce-full-field">

              <label>
                Tell Us About Your Matter
                <span> (Optional)</span>
              </label>

              <textarea
                name="matterDetails"
                rows="6"
                placeholder="Briefly explain what happened..."
              ></textarea>

            </div>


            {/* =================================================
                06 DOCUMENTS
            ================================================= */}
{/* =================================================
    05 SUPPORTING DOCUMENTS
================================================= */}

<div className="form-section-title">
  <span>06</span>
  Supporting Documents
</div>

<div className="form-field full-field">

  <label>
    Upload Relevant Documents <span>(Optional)</span>
  </label>

  <div
    className="document-upload-box"
    onDragOver={(e) => {
      e.preventDefault();
      e.currentTarget.classList.add("drag-active");
    }}
    onDragLeave={(e) => {
      e.currentTarget.classList.remove("drag-active");
    }}
    onDrop={(e) => {
      e.preventDefault();
      e.currentTarget.classList.remove("drag-active");

      const droppedFiles = Array.from(e.dataTransfer.files);

      setDocuments((prev) => [
        ...prev,
        ...droppedFiles,
      ]);
    }}
  >

    <input
  id="businessDocuments"
  type="file"
  multiple
  hidden
  accept={ACCEPTED_FILE_TYPES}
  onChange={handleDocumentsChange}
/>

    <label
      htmlFor="businessDocuments"
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


  {/* SELECTED DOCUMENTS */}

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
                {(file.size / 1024).toFixed(1)} KB
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


  <small className="document-upload-note">
  Accepted formats: PDF, JPG, JPEG, PNG, DOC, DOCX, XLS, XLSX.
    <span>Maximum file size: 10 MB per file</span>

</small>

</div>

            {/* =================================================
                07 CONFIRMATION
            ================================================= */}

            <div className="business-bounce-section-title">

              <span>07</span>

              Confirmation

            </div>


            <div className="business-bounce-consent">

              <label>

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
              className="business-bounce-submit"
            >

              Submit Assistance Request

              <span>
                →
              </span>

            </button>


            {submitted && (

              <div className="business-bounce-success">

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