//자기소개창 닫기,열기
let closebtn = document.querySelector("#close");
let contents = document.querySelector("#contents");
let openbtn = document.querySelector("#open");

closebtn.addEventListener("click", function () {
    contents.classList.add("hidden");
    openbtn.classList.remove("hidden");
});

openbtn.addEventListener("click", function () {
    openbtn.classList.add("hidden");
    contents.classList.remove("hidden");
    contents.classList.remove("specialani");
});



//댓글 추가
let cheerbtn = document.querySelector("#cheer");

cheerbtn.addEventListener("click", function () {
    let name = document.querySelector('#yourname').value;
    let comments = document.querySelector('#compliments').value;
    let compllist = document.querySelector('#compllist');
    let newli = document.createElement('li');

    if (name == '' || comments == '') {
        alert("이름과 메세지를 입력해주세용")
    } else {
        newli.textContent = `${name} : ${comments}`
        compllist.appendChild(newli);
        document.querySelector('#yourname').value = '';
        document.querySelector('#compliments').value = '';
    }
});



/*//파이어베이스
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { query, orderBy, getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAGP85Zm-SwMopKtBAnHX3nWrX4mWVf0Vk",
    authDomain: "sparta-af350.firebaseapp.com",
    projectId: "sparta-af350",
    storageBucket: "sparta-af350.appspot.com",
    messagingSenderId: "830711809085",
    appId: "1:830711809085:web:e8299b4cdb890078b25654",
    measurementId: "G-N6M1PKHYYL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//댓글>파이어베이스
cheerbtn.addEventListener("click", function () {
    let name = document.querySelector('#yourname').value;
    let comments = document.querySelector('#compliments').value;
    let timestamp = new Date();

    let doc = {
        "name": name,
        "comments": comments,
        "timestamp": timestamp
    };

    db.collection("cheers").set(doc);
    alert('저장 완료!');
})*/