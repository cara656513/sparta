import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { query, orderBy, getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAGP85Zm-SwMopKtBAnHX3nWrX4mWVf0Vk",
    authDomain: "sparta-af350.firebaseapp.com",
    projectId: "sparta-af350",
    storageBucket: "sparta-af350.appspot.com",
    messagingSenderId: "830711809085",
    appId: "1:830711809085:web:e8299b4cdb890078b25654",
    measurementId: "G-N6M1PKHYYL"
};

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

$("#cheer").click(async function () {

    console.log("clicked");
    let text = $("#compliments").val();

    let doc = {
        "text": text
    };
    await addDoc(collection(db, "cheers"), doc);
    alert('저장 완료!');
    window.location.reload();
})