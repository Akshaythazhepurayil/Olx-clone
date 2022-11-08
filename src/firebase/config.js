import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'



const firebaseConfig = {
  apiKey: "AIzaSyBA_Q3LiUeC8Pp1D_TMP_cxf6uf_hTE7gE",
  authDomain: "olx-clone-6374d.firebaseapp.com",
  projectId: "olx-clone-6374d",
  storageBucket: "olx-clone-6374d.appspot.com",
  messagingSenderId: "297791547225",
  appId: "1:297791547225:web:0d44fb32cff0efd20b4e48",
  measurementId: "G-MEF1P8PCVJ"
};

    export default firebase.initializeApp(firebaseConfig)