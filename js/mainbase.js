var firebaseConfig = {
    apiKey: "AIzaSyBFGYurOIhEurVPkTaoE5O2JfB22GmKnB8",
    authDomain: "checkpoint6-18125.firebaseapp.com",
    databaseURL: "https://checkpoint6-18125.firebaseio.com",
    projectId: "checkpoint6-18125",
    storageBucket: "",
    messagingSenderId: "33482968395",
    appId: "1:33482968395:web:5a9565f71fa074fb"
  };
  firebase.initializeApp(firebaseConfig);

let database = firebase.database()



document.querySelector("#contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    submit()
})

function submit(){
    let ref=database.ref("checkpoint6")

    let name = document.querySelector("#name").value;
    let email = document.querySelector("#em").value;
    let number = document.querySelector("#num").value;
    let education = document.querySelector("#edu").value;
    let course = document.querySelector("#course").value;

    let data={
        name: name,
        email: email,
        Phone: number,
        School: education,
        Course: course,
    }
    
    ref.push(data)
    console.log(data)
}
