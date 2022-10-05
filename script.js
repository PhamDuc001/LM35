const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const fanClose = $(".fan_icon-close");
const fanOpen = $(".fan_icon-open");
const lightClose = $(".light_icon-close");
const lightOpen = $(".light_icon-open");
const tempElement = $(".temp_number");

const btnFan = $(".btn-fan");
const btnLight = $(".btn-light");

var checkFan = false;
var checkLight = false;

//------------------------------------------------------
// Initialize firebase
const firebaseConfig = {
    apiKey: "AIzaSyB0A_xZEG6bZIAMJYnsllxeP_Z8Aix-Pyc",
    authDomain: "esp-8266-2d864.firebaseapp.com",
    databaseURL: "https://esp-8266-2d864-default-rtdb.firebaseio.com",
    projectId: "esp-8266-2d864",
    storageBucket: "esp-8266-2d864.appspot.com",
    messagingSenderId: "1094755435358",
    appId: "1:1094755435358:web:fbd33d91956d7cd79ac5cf",
    measurementId: "G-C1CN2L7PK2",
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

database.ref("/Temp").on("value", function(snapshot) {
    var temp = snapshot.val();
    tempElement.innerHTML = temp;
});

database.ref("/FAN_STATUS").on("value", function(snapshot) {
    var fan = snapshot.val();
    //console.log(fan);
    if (fan == 1) {
        fanClose.classList.add("remove");
        fanOpen.classList.remove("remove");
    }
    if (fan == 0) {
        fanOpen.classList.add("remove");
        fanClose.classList.remove("remove");
    }
});

database.ref("/LIGHT_STATUS").on("value", function(snapshot) {
    var light = snapshot.val();
    //console.log(fan);
    if (light == 1) {
        lightClose.classList.add("remove");
        lightOpen.classList.remove("remove");
    }
    if (light == 0) {
        lightOpen.classList.add("remove");
        lightClose.classList.remove("remove");
    }
});

const handleFan = () => {
    checkFan = !checkFan;
    if (checkFan) {
        fanClose.classList.add("remove");
        fanOpen.classList.remove("remove");
        database.ref("/").update({
            FAN_STATUS: 1,
        });
        //btnFan.innerHTML = "Turn off";
        document.querySelector(".btn-fan").innerHTML = "Turn off";
    } else {
        fanOpen.classList.add("remove");
        fanClose.classList.remove("remove");
        database.ref("/").update({
            FAN_STATUS: 0,
        });
        //btnFan.innerHTML = "Turn on";
        document.querySelector(".btn-fan").innerHTML = "Turn on";
    }
};
const handleLight = () => {
    checkLight = !checkLight;
    if (checkLight) {
        lightClose.classList.add("remove");
        lightOpen.classList.remove("remove");
        database.ref("/").update({
            LIGHT_STATUS: 1,
        });
        document.querySelector(".btn-light").innerHTML = "Turn off";
    } else {
        lightOpen.classList.add("remove");
        lightClose.classList.remove("remove");
        database.ref("/").update({
            LIGHT_STATUS: 0,
        });
        document.querySelector(".btn-light").innerHTML = "Turn on";
    }
};