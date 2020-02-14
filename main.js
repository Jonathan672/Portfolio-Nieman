
// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyCM_32YjpG5lTSEn0iVVqgCpfvW7FAvJ9o",
  authDomain: "contactform-64c04.firebaseapp.com",
  databaseURL: "https://contactform-64c04.firebaseio.com",
  projectId: "contactform-64c04",
  storageBucket: "contactform-64c04.appspot.com",
  messagingSenderId: "238311754575",
  appId: "1:238311754575:web:a6d07fa5ba4b0b01d1533a",
  measurementId: "G-K4L9417H2Y"
};

firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, message);


  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    message:message
  });
}