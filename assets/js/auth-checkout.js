import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import { app } from "./firebase-config.js";

const auth = getAuth(app);

// Function to check login before protected actions
export function requireLogin(callback) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // ✅ Logged in → continue
      callback(user);
    } else {
      // 🚫 Not logged in → redirect
      alert("Please login to continue your purchase.");
      window.location.href = "login.html";
    }
  });
}
