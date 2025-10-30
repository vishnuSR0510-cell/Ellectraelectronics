// assets/js/login.js
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  try {
    // 🔑 Sign in the user
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    const user = userCredential.user;

    // 💾 Save UID to localStorage
    localStorage.setItem("userId", user.uid);
    localStorage.setItem("userEmail", user.email);

    console.log("✅ Login Successful:", user.email);

    // 🚀 Redirect to homepage or shop
    window.location.href = "index.html";
  } catch (error) {
    console.error("❌ Login Error:", error.message);
    alert("Login failed: " + error.message);
  }
});
