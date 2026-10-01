"use client";

import { useState } from "react";
import "./page.css";


/* =========================================================
   STATE → CITY / DISTRICT DATA
========================================================= */

const locationData = {
  "Andhra Pradesh": [
    "Alluri Sitharama Raju",
    "Anakapalli",
    "Ananthapuramu",
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
    "Sri Potti Sriramulu Nellore",
    "Sri Sathya Sai",
    "Tirupati",
    "Visakhapatnam",
    "Vizianagaram",
    "West Godavari",
    "YSR Kadapa",
  ],

  "Arunachal Pradesh": [
    "Anjaw",
    "Changlang",
    "Dibang Valley",
    "East Kameng",
    "East Siang",
    "Itanagar",
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
    "Kanker",
    "Kabirdham",
    "Kondagaon",
    "Korba",
    "Koriya",
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
    "Panaji",
    "Margao",
    "Vasco da Gama",
    "Mapusa",
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
    "Sahebganj",
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
    "Vijayapura",
    "Vijayanagara",
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
    "Ri Bhoi",
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
    "Mokokchung",
    "Mon",
    "Niuland",
    "Noklak",
    "Peren",
    "Phek",
    "Shamator",
    "Tuensang",
    "Wokha",
    "Zunheboto",
  ],

  Odisha: [
    "Angul",
    "Boudh",
    "Balangir",
    "Bargarh",
    "Balasore",
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
    "Anupgarh",
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
    "Dudu",
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
    "Neem Ka Thana",
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
    "Paschim Bardhaman",
    "Purba Bardhaman",
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
    "Maldah",
    "Murshidabad",
    "Nadia",
    "North 24 Parganas",
    "South 24 Parganas",
    "Uttar Dinajpur",
    "Paschim Medinipur",
    "Purba Medinipur",
  ],

  "Andaman and Nicobar Islands": [
    "Nicobar",
    "North and Middle Andaman",
    "South Andaman",
    "Port Blair",
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
    "Agatti",
    "Amini",
    "Andrott",
    "Bitra",
    "Chetlat",
    "Kadmat",
    "Kalpeni",
    "Kavaratti",
    "Kiltan",
    "Minicoy",
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

export default function IndividualChequeBouncePage() {

  const [selectedState, setSelectedState] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const ACCEPTED_FILE_TYPES =
  ".pdf,.jpg,.jpeg,.png,.doc,.docx,.xls,.xlsx";

const MAX_FILE_SIZE = 10 * 1024 * 1024;


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


    const uniqueFiles = validFiles.filter((file) => {

      const key =
        `${file.name}-${file.size}-${file.lastModified}`;

      return !existingKeys.has(key);

    });


    return [
      ...previous,
      ...uniqueFiles,
    ];

  });

};


const handleDocumentsChange = (e) => {
  addDocuments(e.target.files);

  // Same file ko dobara select karne ki permission
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

  const cities = selectedState
    ? locationData[selectedState] || []
    : [];


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
      "Individual Cheque Bounce"
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
      "/api/leadify",
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
    <main className="bounce-page">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="bounce-hero">

        <div className="bounce-hero-content">

          <span className="service-eyebrow">
            INDIVIDUAL • CHEQUE BOUNCE
          </span>

          <h1>
            Cheque Bounced?
            <br />
            <span>Understand Your Options.</span>
          </h1>

          <p>
            Share the details of your cheque bounce matter and get
            assistance in understanding the situation and possible
            next steps.
          </p>

          <a
            href="#bounce-form"
            className="bounce-hero-btn"
          >
            Get Assistance
            <span>↓</span>
          </a>

        </div>


        {/* RIGHT SIDE VISUAL */}

<div className="individual-bounce-hero-visual">

  <div className="individual-bounce-hero-image-wrap">

    <img
      src="/individual-cheque-bounce.png"
      alt="Individual cheque bounce assistance"
      className="individual-bounce-hero-image"
    />

  </div>

</div>

      </section>


      {/* =====================================================
          ASSISTANCE
      ===================================================== */}

      <section className="bounce-assistance">

        <div className="bounce-container">

          <div className="bounce-heading">

            <span className="service-eyebrow">
              INDIVIDUAL ASSISTANCE
            </span>

            <h2>
              Understand Your
              <span> Situation</span>
            </h2>

            <p>
              Provide the relevant information so the nature of your
              cheque bounce matter can be understood properly.
            </p>

          </div>


          <div className="bounce-assistance-grid">

            <div className="bounce-info-card">
              <span>01</span>

              <h3>
                Case Details
              </h3>

              <p>
                Share the basic information about the bounced cheque
                and the amount involved.
              </p>
            </div>


            <div className="bounce-info-card">
              <span>02</span>

              <h3>
                Bank Information
              </h3>

              <p>
                Provide the relevant bank or cooperative bank details
                connected with the cheque.
              </p>
            </div>


            <div className="bounce-info-card">
              <span>03</span>

              <h3>
                Documents
              </h3>

              <p>
                Upload relevant documents that can help in understanding
                your matter.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FORM
      ===================================================== */}

      <section
        id="bounce-form"
        className="bounce-form-section"
      >

        <div className="bounce-form-container">

          <div className="bounce-form-heading">

            <span className="service-eyebrow">
              CHEQUE BOUNCE ASSISTANCE FORM
            </span>

            <h2>
              Tell Us About Your
              <span> Matter</span>
            </h2>

            <p>
              Please provide accurate information. This helps us
              understand your enquiry and contact you regarding the
              assistance requested.
            </p>

          </div>


          <form
            className="bounce-form"
            onSubmit={handleSubmit}
          >


            {/* =================================================
                HIDDEN LEAD IDENTIFICATION
            ================================================= */}

            <input
              type="hidden"
              name="category"
              value="Individual"
            />

            <input
              type="hidden"
              name="matter"
              value="Cheque Bounce"
            />

            <input
              type="hidden"
              name="source"
              value="Individual Cheque Bounce Assistance"
            />


            {/* =================================================
                01 PERSONAL DETAILS
            ================================================= */}

            <div className="form-section-title">

              <span>
                01
              </span>

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
                02 LOCATION
            ================================================= */}

            <div className="form-section-title">

              <span>
                02
              </span>

              Location

            </div>


            <div className="form-grid">


              {/* STATE */}

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


              {/* CITY */}

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
                03 CHEQUE DETAILS
            ================================================= */}

            <div className="form-section-title">

              <span>
                03
              </span>

              Cheque Details

            </div>


            <div className="form-grid">


              <div className="form-field">

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
                  Cheque Bounce Date
                </label>

                <input
                  type="date"
                  name="bounceDate"
                />

              </div>


              <div className="form-field">

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
                04 MATTER DETAILS
            ================================================= */}

            <div className="form-section-title">

              <span>
                04
              </span>

              Matter Details

            </div>


            <div className="form-field full-field">

              <label>
                Tell Us About Your Matter <span>(Optional)</span>
              </label>

              <textarea
                name="matterDetails"
                rows="6"
                placeholder="Briefly explain what happened..."
              ></textarea>

            </div>


            {/* =================================================
                05 DOCUMENTS
            ================================================= */}

            <div className="form-section-title">

  <span>
    05
  </span>

  Supporting Documents

</div>


<div className="form-field full-field">

  <label>
    Upload Relevant Documents <span>(Optional)</span>
  </label>




  {/* Upload Box */}

 <input
  id="bounce-documents"
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
    htmlFor="bounce-documents"
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


  {/* Selected Documents */}

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
            aria-label={`Remove ${file.name}`}
          >
            ×
          </button>

        </div>

      ))}

    </div>

  )}


<small className="individual-document-upload-note">
  Accepted formats: PDF, JPG, JPEG, PNG, DOC, DOCX, XLS, XLSX.
  <span>Maximum file size: 10 MB per file</span>
</small>

</div>


            {/* =================================================
                06 CONSENT
            ================================================= */}

            <div className="form-section-title">

              <span>
                06
              </span>

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
              className="bounce-submit-btn"
            >

              Submit Assistance Request

              <span>
                →
              </span>

            </button>


            {submitted && (

              <div className="bounce-success">

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
