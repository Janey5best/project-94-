
const firebaseConfig = {
      apiKey: "AIzaSyCyh5RU6o3vw-DDYUygl92WOxxG33EOFBk",
      authDomain: "kwitter-project-1dab5.firebaseapp.com",
      databaseURL: "https://kwitter-project-1dab5-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-1dab5",
      storageBucket: "kwitter-project-1dab5.appspot.com",
      messagingSenderId: "275495326946",
      appId: "1:275495326946:web:7266b0c6c7200a229bfabb"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


