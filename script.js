var symptomChecker = [
    {
      symptoms: ['fatigue', 'fever', 'sore throat', 'diarrhea'],
      diagnosis: 'You are suffering from a common cold.',
      medicine: 'Rest,drink plenty of water, use saline nasal rinses.',
    },
    {
      symptoms: ['Fever', 'diarrhea','fatigue','Muscle aches'],
      diagnosis: 'You are suffering from a flu.',
      medicine: 'Rest and fluid intake.',
    },
    {
      symptoms: ['shortness of breath', 'chest pain', 'fatigue'],
      diagnosis: 'You are suffering from a heart condition.',
      medicine: 'consult a doctor',
    },
    {
      symptoms: ['High fever', 'rash','cough','stomach and muscle pain'],
      diagnosis: 'You are suffering from a Typhoid.',
      medicine: 'Antibiotics and fluid intake.',
    },
    {
      symptoms: ['Itching','swelling'],
      diagnosis: 'You are suffering from a Fungal infection.',
      medicine: 'Antifungal  medication.',
    },
    {
      symptoms: ['Itching','skin rash','facial swelling'],
      diagnosis: 'You are suffering from a Allergy.',
      medicine: 'Avoid allergens and steroids.',
    },{
      symptoms: ['Fever','headache','muscle aches','joint pain'],
      diagnosis: 'You are suffering from a AIDS.',
      medicine: 'Antiretroviral therapy.',
    },
    // Add more symptom-diagnosis pairs as needed
  ];
  
  function checkSymptoms() {
    var symptoms = document.getElementById("symptoms").value.toLowerCase();
    var diagnosis = "No diagnosis found.";
    var medicine = "No medicine found.";
  
    // Search for matching symptom set in the symptomChecker array
    for (var i = 0; i < symptomChecker.length; i++) {
      var matched = true;
      var symptomSet = symptomChecker[i].symptoms;
  
      // Check if all symptoms in the set are present in the user's input
      for (var j = 0; j < symptomSet.length; j++) {
        if (symptoms.indexOf(symptomSet[j]) === -1) {
          matched = false;
          break;
        }
      }
  
      // If all symptoms are present, assign the corresponding diagnosis
      if (matched) {
        diagnosis = symptomChecker[i].diagnosis;
        medicine = symptomChecker[i].medicine;

        break;
      }
    }
  
    document.getElementById("resultText").innerHTML = '<p>'+diagnosis + '</p>';
    document.getElementById("resultText1").innerHTML = '<p>'+medicine + '</p>';
  }