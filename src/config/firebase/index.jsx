
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCt7VoYRl0Qkq_gWp5Chzq4GDO8V8XfMJs",
    authDomain: "backend-bromindo.firebaseapp.com",
    projectId: "backend-bromindo",
    storageBucket: "backend-bromindo.appspot.com",
    messagingSenderId: "514907845416",
    appId: "1:514907845416:web:77902af6a33fbe0129d61d",
    measurementId: "G-Z4TWB5XG6R"
  };
  
  // Initialize Firebase
  const fire = initializeApp(firebaseConfig);
  const analytics = getAnalytics(fire);

 

  export default fire;