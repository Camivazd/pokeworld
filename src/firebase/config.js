
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCOt2rFKSRprd2UWwTnWtZhdE5S7_xU6rE",
  authDomain: "pokeworld-525d5.firebaseapp.com",
  projectId: "pokeworld-525d5",
  storageBucket: "pokeworld-525d5.appspot.com",
  messagingSenderId: "976631318190",
  appId: "1:976631318190:web:c226819b6350fd645f4f3f"
};

const app = initializeApp(firebaseConfig)

export const initFirebase = () => app