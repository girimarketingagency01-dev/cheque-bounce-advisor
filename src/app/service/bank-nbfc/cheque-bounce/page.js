"use client";

import { useState } from "react";
import Link from "next/link";
import "./page.css";
/* =========================================================
   LOCATION DATA
   ========================================================= */

const locationData = {
  "Andhra Pradesh": [
    "Alluri Sitharama Raju",
    "Anakapalli",
    "Anantapur",
    "Annamayya",
    "Bapatla",
    "Chittoor",
    "Dr. B.R. Ambedkar Konaseema",
    "East Godavari",
    "Eluru",
    "Guntur",
    "Kakinada",
    "Krishna",
    "Kurnool",
    "Nandyal",
    "NTR",
    "Palnadu",
    "Parvathipuram Manyam",
    "Prakasam",
    "Srikakulam",
    "Sri Sathya Sai",
    "Tirupati",
    "Visakhapatnam",
    "Vizianagaram",
    "West Godavari",
    "YSR Kadapa",
  ],

  "Arunachal Pradesh": [
    "Anjaw",
    "Bichom",
    "Changlang",
    "Dibang Valley",
    "East Kameng",
    "East Siang",
    "Itanagar Capital Complex",
    "Kamle",
    "Kra Daadi",
    "Kurung Kumey",
    "Lepa Rada",
    "Lohit",
    "Longding",
    "Lower Dibang Valley",
    "Lower Siang",
    "Lower Subansiri",
    "Namsai",
    "Pakke Kessang",
    "Papum Pare",
    "Shi Yomi",
    "Siang",
    "Tawang",
    "Tirap",
    "Upper Siang",
    "Upper Subansiri",
    "West Kameng",
    "West Siang",
  ],

  Assam: [
    "Baksa",
    "Bajali",
    "Barpeta",
    "Biswanath",
    "Bongaigaon",
    "Cachar",
    "Charaideo",
    "Chirang",
    "Darrang",
    "Dhemaji",
    "Dhubri",
    "Dibrugarh",
    "Dima Hasao",
    "Goalpara",
    "Golaghat",
    "Hailakandi",
    "Hojai",
    "Jorhat",
    "Kamrup",
    "Kamrup Metropolitan",
    "Karbi Anglong",
    "Karimganj",
    "Kokrajhar",
    "Lakhimpur",
    "Majuli",
    "Morigaon",
    "Nagaon",
    "Nalbari",
    "Sivasagar",
    "Sonitpur",
    "South Salmara-Mankachar",
    "Tamulpur",
    "Tinsukia",
    "Udalguri",
    "West Karbi Anglong",
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

  Chhattisgarh: [
    "Balod",
    "Baloda Bazar",
    "Balrampur-Ramanujganj",
    "Bastar",
    "Bemetara",
    "Bijapur",
    "Bilaspur",
    "Dantewada",
    "Dhamtari",
    "Durg",
    "Gariaband",
    "Gaurela-Pendra-Marwahi",
    "Janjgir-Champa",
    "Jashpur",
    "Kabirdham",
    "Kanker",
    "Khairagarh-Chhuikhadan-Gandai",
    "Kondagaon",
    "Korba",
    "Korea",
    "Mahasamund",
    "Manendragarh-Chirmiri-Bharatpur",
    "Mohla-Manpur-Ambagarh Chowki",
    "Mungeli",
    "Narayanpur",
    "Raigarh",
    "Raipur",
    "Rajnandgaon",
    "Sakti",
    "Sarangarh-Bilaigarh",
    "Sukma",
    "Surajpur",
    "Surguja",
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
    "Kachchh",
    "Kheda",
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
    "Belagavi",
    "Bengaluru Rural",
    "Bengaluru Urban",
    "Bidar",
    "Chamarajanagar",
    "Chikkaballapur",
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
    "Vijayanagara",
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
    "Indore",
    "Jabalpur",
    "Jhabua",
    "Katni",
    "Khandwa",
    "Khargone",
    "Maihar",
    "Mandla",
    "Mandsaur",
    "Mauganj",
    "Morena",
    "Narmadapuram",
    "Narsinghpur",
    "Neemuch",
    "Niwari",
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
    "Beed",
    "Bhandara",
    "Buldhana",
    "Chandrapur",
    "Chhatrapati Sambhajinagar",
    "Dharashiv",
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

  Manipur: [
    "Bishnupur",
    "Chandel",
    "Churachandpur",
    "Imphal East",
    "Imphal West",
    "Jiribam",
    "Kakching",
    "Kamjong",
    "Kangpokpi",
    "Noney",
    "Pherzawl",
    "Senapati",
    "Tamenglong",
    "Tengnoupal",
    "Thoubal",
    "Ukhrul",
  ],

  Meghalaya: [
    "East Garo Hills",
    "East Jaintia Hills",
    "East Khasi Hills",
    "Eastern West Khasi Hills",
    "North Garo Hills",
    "Ri-Bhoi",
    "South Garo Hills",
    "South West Garo Hills",
    "South West Khasi Hills",
    "West Garo Hills",
    "West Jaintia Hills",
    "West Khasi Hills",
  ],

  Mizoram: [
    "Aizawl",
    "Champhai",
    "Hnahthial",
    "Khawzawl",
    "Kolasib",
    "Lawngtlai",
    "Lunglei",
    "Mamit",
    "Saitual",
    "Serchhip",
  ],

  Nagaland: [
    "Chumoukedima",
    "Dimapur",
    "Kiphire",
    "Kohima",
    "Longleng",
    "Meluri",
    "Mokokchung",
    "Mon",
    "Niuland",
    "Noklak",
    "Peren",
    "Phek",
    "Shamator",
    "Tseminyu",
    "Tuensang",
    "Wokha",
    "Zunheboto",
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
    "Balotra",
    "Banswara",
    "Baran",
    "Barmer",
    "Beawar",
    "Bharatpur",
    "Bhilwara",
    "Bikaner",
    "Bundi",
    "Chittorgarh",
    "Churu",
    "Dausa",
    "Deeg",
    "Dholpur",
    "Didwana-Kuchamana",
    "Dungarpur",
    "Hanumangarh",
    "Jaipur",
    "Jaisalmer",
    "Jalore",
    "Jhalawar",
    "Jhunjhunu",
    "Jodhpur",
    "Karauli",
    "Khairthal-Tijara",
    "Kota",
    "Kotputli-Behror",
    "Nagaur",
    "Pali",
    "Phalodi",
    "Pratapgarh",
    "Rajsamand",
    "Salumbar",
    "Sawai Madhopur",
    "Sikar",
    "Sirohi",
    "Sri Ganganagar",
    "Tonk",
    "Udaipur",
  ],

  Sikkim: [
    "Gangtok",
    "Gyalshing",
    "Mangan",
    "Namchi",
    "Pakyong",
    "Soreng",
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
    "Hanamkonda",
    "Hyderabad",
    "Jagtial",
    "Jangaon",
    "Jayashankar Bhupalpally",
    "Jogulamba Gadwal",
    "Kamareddy",
    "Karimnagar",
    "Khammam",
    "Komaram Bheem Asifabad",
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

  Tripura: [
    "Dhalai",
    "Gomati",
    "Khowai",
    "North Tripura",
    "Sepahijala",
    "South Tripura",
    "Unakoti",
    "West Tripura",
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
    "Kushinagar",
    "Lakhimpur Kheri",
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

  "Andaman and Nicobar Islands": [
    "Nicobar",
    "North and Middle Andaman",
    "South Andaman",
  ],

  Chandigarh: [
    "Chandigarh",
  ],

  "Dadra and Nagar Haveli and Daman and Diu": [
    "Dadra and Nagar Haveli",
    "Daman",
    "Diu",
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

  "Jammu and Kashmir": [
    "Anantnag",
    "Bandipora",
    "Baramulla",
    "Budgam",
    "Doda",
    "Ganderbal",
    "Jammu",
    "Kathua",
    "Kishtwar",
    "Kulgam",
    "Kupwara",
    "Poonch",
    "Pulwama",
    "Rajouri",
    "Ramban",
    "Reasi",
    "Samba",
    "Shopian",
    "Srinagar",
    "Udhampur",
  ],

  Ladakh: [
    "Kargil",
    "Leh",
  ],

  Lakshadweep: [
    "Lakshadweep",
  ],

  Puducherry: [
    "Karaikal",
    "Mahe",
    "Puducherry",
    "Yanam",
  ],
};


/* =========================================================
   PAGE
========================================================= */

export default function BankNbfcChequeBouncePage() {

  const [selectedState, setSelectedState] = useState("");
  const [documents, setDocuments] = useState([]);
  const [dragging, setDragging] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const cities = selectedState
    ? locationData[selectedState] || []
    : [];


  /* =======================================================
     STATE CHANGE
  ======================================================= */

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };


  /* =======================================================
     DOCUMENT HANDLING
  ======================================================= */

  const addDocuments = (files) => {

    const incomingFiles = Array.from(files || []);

    if (!incomingFiles.length) {
      return;
    }

    setDocuments((previous) => {

      const existingKeys = new Set(
        previous.map(
          (file) =>
            `${file.name}-${file.size}-${file.lastModified}`
        )
      );

      const uniqueFiles = incomingFiles.filter(
        (file) =>
          !existingKeys.has(
            `${file.name}-${file.size}-${file.lastModified}`
          )
      );

      return [...previous, ...uniqueFiles];
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
      previous.filter((_, currentIndex) => currentIndex !== index)
    );
  };


  /* =======================================================
     FORM SUBMIT
  ======================================================= */

  const handleSubmit = (event) => {

    event.preventDefault();

    setSubmitted(true);
  };


  return (

    <main className="bank-bounce-page">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="bank-bounce-hero">

        <div className="bank-bounce-hero-content">

          

          <span className="bank-bounce-eyebrow">
            BANK & NBFC · CHEQUE BOUNCE
          </span>

          <h1>
            Cheque Bounce
            <span> Assistance</span>
          </h1>

          <p>
            Provide the relevant details about the dishonoured
            cheque, financial institution and matter so the
            assistance requested can be reviewed appropriately.
          </p>

        </div>


        

              <div className="bank-nbfc-cheque-bounce-hero-visual">

  <div className="bank-nbfc-cheque-bounce-hero-image-wrap">
    <img
      src="/bank-nbfc-cheque-bounce.png"
      alt="Cheque bounce assistance"
      className="bank-nbfc-cheque-bounce-hero-image"
    />
  </div>

</div>

           

       

      </section>


      {/* =====================================================
          FORM
      ===================================================== */}

      <section className="bank-bounce-form-section">

        <div className="bank-bounce-form-container">


          <div className="bank-bounce-form-heading">

            <span className="bank-bounce-section-eyebrow">
              CHEQUE BOUNCE ASSISTANCE FORM
            </span>

            <h2>
              Tell Us About The
              <span> Matter</span>
            </h2>

            <p>
              Please provide accurate information. This helps
              understand the cheque bounce matter and the
              assistance requested.
            </p>

          </div>


          <form
            className="bank-bounce-form"
            onSubmit={handleSubmit}
          >


            {/* =================================================
                HIDDEN IDENTIFICATION
            ================================================= */}

            <input
              type="hidden"
              name="category"
              value="Bank / NBFC"
            />

            <input
              type="hidden"
              name="matter"
              value="Cheque Bounce"
            />

            <input
              type="hidden"
              name="source"
              value="Bank NBFC Cheque Bounce Assistance"
            />


            {/* =================================================
                01 INSTITUTION DETAILS
            ================================================= */}

            <div className="bank-bounce-section-title">

              <span>
                01
              </span>

              Institution Details

            </div>


            <div className="bank-bounce-form-grid">


              <div className="bank-bounce-field">

                <label>
                  Institution Type *
                </label>

                <select
                  name="institutionType"
                  required
                  defaultValue=""
                >

                  <option value="">
                    Choose institution type
                  </option>

                  <option value="Bank">
                    Bank
                  </option>

                  <option value="NBFC">
                    NBFC
                  </option>

                  <option value="Cooperative Bank">
                    Cooperative Bank
                  </option>

                  <option value="Financial Institution">
                    Financial Institution
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>


              <div className="bank-bounce-field">

                <label>
                  Institution / Bank Name *
                </label>

                <input
                  type="text"
                  name="institutionName"
                  placeholder="Enter institution name"
                  required
                />

              </div>


              <div className="bank-bounce-field">

                <label>
                  Branch Name
                </label>

                <input
                  type="text"
                  name="branchName"
                  placeholder="Enter branch name"
                />

              </div>


              <div className="bank-bounce-field">

                <label>
                  Branch / Reference Number
                </label>

                <input
                  type="text"
                  name="branchReference"
                  placeholder="Enter branch or reference number"
                />

              </div>

            </div>


            {/* =================================================
                02 CONTACT / LOCATION
            ================================================= */}

            <div className="bank-bounce-section-title">

              <span>
                02
              </span>

              Contact & Location

            </div>


            <div className="bank-bounce-form-grid">


              <div className="bank-bounce-field">

                <label>
                  Contact Person *
                </label>

                <input
                  type="text"
                  name="contactPerson"
                  placeholder="Enter contact person name"
                  required
                />

              </div>


              <div className="bank-bounce-field">

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


              <div className="bank-bounce-field">

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


              <div className="bank-bounce-field">

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


              <div className="bank-bounce-field">

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

                </select>

              </div>

            </div>


            {/* =================================================
                03 CHEQUE DETAILS
            ================================================= */}

            <div className="bank-bounce-section-title">

              <span>
                03
              </span>

              Cheque Details

            </div>


            <div className="bank-bounce-form-grid">


              <div className="bank-bounce-field">

                <label>
                  Cheque Amount *
                </label>

                <input
                  type="number"
                  name="chequeAmount"
                  placeholder="Enter cheque amount"
                  min="0"
                  step="0.01"
                  required
                />

              </div>


              <div className="bank-bounce-field">

                <label>
                  Cheque Number *
                </label>

                <input
                  type="text"
                  name="chequeNumber"
                  placeholder="Enter cheque number"
                  required
                />

              </div>


              <div className="bank-bounce-field">

                <label>
                  Drawer / Borrower Name *
                </label>

                <input
                  type="text"
                  name="drawerName"
                  placeholder="Enter drawer / borrower name"
                  required
                />

              </div>


              <div className="bank-bounce-field">

                <label>
                  Cheque Date
                </label>

                <input
                  type="date"
                  name="chequeDate"
                />

              </div>


              <div className="bank-bounce-field">

                <label>
                  Bounce Date
                </label>

                <input
                  type="date"
                  name="bounceDate"
                />

              </div>


              <div className="bank-bounce-field">

                <label>
                  Return Reason
                </label>

                <select
                  name="returnReason"
                  defaultValue=""
                >

                  <option value="">
                    Choose return reason
                  </option>

                  <option value="Insufficient Funds">
                    Insufficient Funds
                  </option>

                  <option value="Account Closed">
                    Account Closed
                  </option>

                  <option value="Payment Stopped">
                    Payment Stopped
                  </option>

                  <option value="Signature Mismatch">
                    Signature Mismatch
                  </option>

                  <option value="Account Blocked">
                    Account Blocked
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>

            </div>


            {/* =================================================
                04 MATTER STATUS
            ================================================= */}

            <div className="bank-bounce-section-title">

              <span>
                04
              </span>

              Matter Status

            </div>


            <div className="bank-bounce-form-grid">


              <div className="bank-bounce-field">

                <label>
                  Notice Status
                </label>

                <select
                  name="noticeStatus"
                  defaultValue=""
                >

                  <option value="">
                    Choose an option
                  </option>

                  <option value="Not Sent">
                    Not Sent
                  </option>

                  <option value="Sent">
                    Sent
                  </option>

                  <option value="Received">
                    Received
                  </option>

                  <option value="Not Sure">
                    Not Sure
                  </option>

                </select>

              </div>


              <div className="bank-bounce-field">

                <label>
                  Current Matter Status
                </label>

                <select
                  name="matterStatus"
                  defaultValue=""
                >

                  <option value="">
                    Choose current status
                  </option>

                  <option value="Initial Review">
                    Initial Review
                  </option>

                  <option value="Recovery Pending">
                    Recovery Pending
                  </option>

                  <option value="Notice Stage">
                    Notice Stage
                  </option>

                  <option value="Legal Proceedings">
                    Legal Proceedings
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

            <div className="bank-bounce-section-title">

              <span>
                05
              </span>

              Matter Details

            </div>


            <div className="bank-bounce-field full-field">

              <label>
                Tell Us About The Matter
                <span>
                  (Optional)
                </span>
              </label>

              <textarea
                name="matterDetails"
                rows="6"
                placeholder="Briefly explain the cheque bounce matter, recovery status or any other relevant information..."
              ></textarea>

            </div>


            {/* =================================================
    06 SUPPORTING DOCUMENTS
================================================= */}

<div className="bank-bounce-section-title">
  <span>06</span>
  Supporting Documents
</div>


<div className="bank-bounce-field full-field">

  <label>
    Upload Relevant Documents
    <span>(Optional)</span>
  </label>


  {/* =================================================
      DOCUMENT UPLOAD
  ================================================= */}

  <label
    htmlFor="bank-bounce-document-upload"
    className={`bank-bounce-document-dropzone ${
      dragging ? "dragging" : ""
    }`}
    onDragOver={handleDragOver}
    onDragLeave={handleDragLeave}
    onDrop={handleDrop}
  >

    <div className="bank-bounce-document-plus">
      +
    </div>

    <strong>
      Drag & Drop Documents Here
    </strong>

    <span>
      or click to browse files
    </span>


    <input
      id="bank-bounce-document-upload"
      type="file"
      multiple
      hidden
      onChange={handleDocumentsChange}
      accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.xls,.xlsx"
    />

  </label>


  {/* =================================================
      DOCUMENT LIST
  ================================================= */}

  {documents.length > 0 && (

    <div className="bank-bounce-document-list">

      {documents.map((file, index) => (

        <div
          className="bank-bounce-document-item"
          key={`${file.name}-${file.lastModified}-${index}`}
        >

          <div className="bank-bounce-document-info">

            <div className="bank-bounce-document-icon">
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
            className="bank-bounce-document-remove"
            onClick={() => removeDocument(index)}
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
                07 CONFIRMATION
            ================================================= */}

            <div className="bank-bounce-section-title">

              <span>
                07
              </span>

              Confirmation

            </div>


            <div className="bank-bounce-consent">

              <label>

                <input
                  type="checkbox"
                  name="consent"
                  required
                />

                <span>
                  I confirm that the information provided by me
                  is accurate to the best of my knowledge and I
                  consent to Cheque Bounce Advisor contacting me
                  regarding the assistance requested. I understand
                  that submitting this form does not by itself
                  create an attorney-client relationship.
                </span>

              </label>

            </div>


            {/* =================================================
                SUBMIT
            ================================================= */}

            <button
              type="submit"
              className="bank-bounce-submit"
            >

              Submit Cheque Bounce Request

              <span>
                →
              </span>

            </button>


            {submitted && (

              <div className="bank-bounce-success">

                Your cheque bounce assistance request has been
                recorded. We will review the information provided.

              </div>

            )}

          </form>

        </div>

      </section>

    </main>
  );
}