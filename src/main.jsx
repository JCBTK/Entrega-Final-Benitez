import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCGxdQaKrKpsAf-nrKzctbdc1WWq4ysMXM",
    authDomain: "tk-shop-68ffe.firebaseapp.com",
    projectId: "tk-shop-68ffe",
    storageBucket: "tk-shop-68ffe.appspot.com",
    messagingSenderId: "987059779776",
    appId: "1:987059779776:web:06acc6fe05b4457b4ad525",
    measurementId: "G-S8VH5E3LFR"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);