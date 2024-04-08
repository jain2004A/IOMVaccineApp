//Type your code here
//Type your code here

// var FamilyName = ["John Gregory Smith","Sarah Smith","James Smith","Maria Smith"];

// var DOB = ["Born on 20-Aug-1990","Born on 11-Oct-1994","Born on 18-Apr-2004","Born on 22-Nov-2006"];
// var SelectedImage = ["L"];

var FamilyDetail = [
  {FullName: "John Gregory Smith",
   DOB:"Born on 20-Aug-1990",
   
  },
  {FullName: "Sarah Smith",
   DOB:"Born on 11-Oct-1994",
  
  },
  {FullName: "James Smith",
   DOB:"Born on 18-Apr-2004",
   
  },
  {FullName: "Maria Smith",
   DOB:"Born on 22-Nov-2006",
  
  }
  
];

 var Symptoms = [
   {
     ImgSymptoms:"pain_icon.png",
     SymptomsType : "Local reaction at injection site (pain, redness or swelling)",
   },
    {
     ImgSymptoms:"general_fatigue_icon.png",
     SymptomsType : "General fatigue and body aches",
   },
    {
     ImgSymptoms:"fever_icon.png",
     SymptomsType : "Fever",
   },
    {
     ImgSymptoms:"nausea_icon.png",
     SymptomsType : "Nausea or vomiting",
   },
    {
     ImgSymptoms:"skin_rash_icon.png",
     SymptomsType : "Skin rash",
   },
   {
     ImgSymptoms:"seizure_icon.png",
     SymptomsType : "Seizure or unconsciousness",
   },
 ];




var Status = [
  {
    Date : "20-Jul-2022",
    FullName : "John Gregory Smith",
    Status : "Reopened",
    Symptoms : "Local reaction at injection site (pain, redness or swelling), Nausea or vomiting...",
    Issue : "Reported Health Issue after Vaccination",
    Icon : "N",
  },
  
  {
    Date : "20-Jul-2022",
    FullName : "John Gregory Smith",
    Status : "Open",
    Symptoms : "Local reaction at injection site (pain, redness or swelling), Nausea or vomiting...",
    Issue : "Reported Health Issue after Vaccination",
    Icon : "N",
  },
  
  {
    Date : "20-Jul-2022",
    FullName : "Sarah Smith",
    Status : "In Progress",
    Symptoms : "Symptoms: Dizziness, Hives, Vomiting, High fever and cold",
    Issue : "Other Reported Health Conditions",
    Icon : "N",
  },
  
  {
    Date : "15-Jul-2022",
    FullName : "John Gregory Smith",
    Status : "Closed",
    Symptoms : "Symptoms: Dizziness, Hives, Vomiting, High fever and cold",
    Issue : "Other Reported Health Conditions",
    Icon : "N",
  },
]

// var Family = JSON.stringify(FamilyDetail);

segmentData =[
  {
    name:"John Gregory Smith",
    dob :"Born on 20-Aug-1990",
  },
  {
    name:"Sarah Smith",
    dob :"Born on 11-Oct-1994",
  },
  {
    name:"James Smith",
    dob :"Born on 18-Apr-2004",
  }, 
  {
    name:"Maria Smith",
    dob :"Born on 22-Nov-2006",
  },
];

segAppoiment = [
  {
    date:"20-Jul-2022 2:30 PM",
    case:"Case number: JO-020002",
    note:"You and/or your family members have an appointment with IOM Amman",
  },
  {
    date:"19-Jul-2022 1:00 PM",
    case:"Case number: JO-020002",
    note:"You and/or your family members have an appointment with IOM Amman",
  },  
];

segNotification = [
  {
    date:"20-Jul-2022 2:30 PM",
    case:"Missed Vaccination",
    note:"At least one of the following family members missed vaccination on 01-Oct-2023",
  },
  {
    date:"20-Jul-2022 1:00 PM",
    case:"Missed vaccination",
    note:"At least one of the following family members missed vaccination on 01-Oct-2023",
  },
];

vaccineReords = [
 { 
   status :"Completed",
   vaccine : "Diphtheria, Tetanus, Pertussis",
   date : "Td: 15-Mar-2021 (valid); 16-Sep-2022 (valid)",
   dose :"2 dose(s) out of 2",
 },
  {
    status : "Received",
    vaccine :"Measles, Mumps, Rubella",
    date:"MMR: 16-Sep-2022 (valid)",
    dose:"1 dose(s) out of 2",
    due :"Due on 14-Oct-2022",
  },
  {
    status : "Received",
    vaccine :"Hepatitis A",
    date:"20-Apr-2022; 10-May-2022",
    dose:"2 dose(s)",
  },
  {
    status : "Overdue",
    vaccine :"Hepatitis B",
    date:"20-Apr-2022 (valid); 10-May-2022",
    dose:"1 dose(s) out of 3", 
    due :"Due on 16-Sep-2022",
  },
  {
    status : "Received",
    vaccine :"Varicella",
    date:"05-Feb-2021",
    dose:"1 dose(s)",
  },
  {
    status : "Received",
    vaccine :"Pneumococcal",
    date:"PCV10: 16-Sep-2022",
    dose:"1 dose(s)",
  },
  {
    status : "Waived",
    vaccine :"Rotavirus",
    date:"RotaTeq(TV5): Rotarix (RV1):",
    dose:"1 dose(s)",
  },
  {
    status : "Received",
    vaccine :"Influenza",
    date:"16-Sep-2022",
    dose:"1 dose(s)",
  },
  {
    status : "Completed",
    vaccine :"COVID-19 (WHO EUL)",
    date:"COVID-19 (SI India – Covishield): 01-Jan-2023 (valid) ; 08-Feb-2023; 08-D...",
    dose:"3 dose(s) out of 2",    
  },
  {
    status : "Received",
    vaccine :"COVID-19 (Other)",
    date:"Covid-19 (KoviVac): 18-Jan-2022",
    dose:"1 dose(s)",
  }
];

johnvaccineCertificates = [
  {
    vacname : "COVID-19 Vaccination Certificate",
    vacdate : "15-May-2023",
  },
  {
    vacname : "COVID-19 Testing Certificate",
    vacdate : "16-Apr-2022",
  },
  {
    vacname : "COVID-19 Recovery Certificate",
    vacdate : "16-Apr-2022 11:15 AM",
  },
  {
    vacname : "COVID-19 Recovery Certificate",
    vacdate : "12-Mar-2022 3:20 PM (Expired)",
  },
  
];


sarahvaccineCertificates = [
  {
    vacname :"COVID-19 Testing Certificate",
    vacdate :"2-Jan-2023 to 1-Jul-2023",
  },
  {
    vacname :"COVID-19 Recovery Certificate",
    vacdate :"20-Mar-2022 3:20 PM (Expired)",
  },
];


jamesvaccineCertificates = [
  {
    vacname: "COVID-19 Testing Certificate",
    vacdate :"20-May-2023",
  }
];



vaccineData = [
  {
    name :"Moderna",
    dosedate :"Dose 1 (15-May-2023)",
  },
  {
    name:"Moderna",
    dosedate :"Dose 2 (15-May-2023)",
  },
  {
    name :"Pfizer",
    dosedate:"Dose 1 (15-May-2023)",
  },
  {
    name:"Pfizer",
    dosedate :"Dose 2 (15-May-2023)",
  },
]











