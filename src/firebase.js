import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const app = firebase.initializeApp({
  apiKey: "AIzaSyAWJbUkZSoLX0LmTA8soGhZdDW5eHhVlAo",
  authDomain: "hridoyv2-drive.firebaseapp.com",
  projectId: "hridoyv2-drive",
  storageBucket: "hridoyv2-drive.appspot.com",
  messagingSenderId: "768881360704",
  appId: "1:768881360704:web:d3ddbfa2d467c7d77584a5"
})


const firestore = app.firestore()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app
