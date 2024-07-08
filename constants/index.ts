export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-musthofa.png",
    name: "Zainul Musthofa",
  },
  {
    image: "/assets/images/dr-marshanda.png",
    name: "Marshanda Yori",
  },
  {
    image: "/assets/images/dr-dimyati.png",
    name: "Ahmad Dimyati",
  },
  {
    image: "/assets/images/dr-ulum.png",
    name: "Miftahul Ulum",
  },
  {
    image: "/assets/images/dr-canita.png",
    name: "Putri Canita",
  },
  {
    image: "/assets/images/dr-kaisar.png",
    name: "Muhammad Kaisar",
  },
  {
    image: "/assets/images/dr-indrajaya.png",
    name: "Tursinah Indrajaya",
  },
  {
    image: "/assets/images/dr-damar.png",
    name: "Muhammad Damar",
  },
  {
    image: "/assets/images/dr-mulyanti.png",
    name: "Sri Mulyanti",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
