// assets/js/signup.js
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  try {
    // 🧾 Create user
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;

    // 🧠 Save extra user info in Firestore
    await db.collection("users").doc(user.uid).set({
      name: name,
      email: email,
      createdAt: new Date()
    });

    // 💾 Save user session locally
    localStorage.setItem("userId", user.uid);
    localStorage.setItem("userEmail", user.email);

    console.log("✅ Signup Successful:", user.email);

    // 🚀 Redirect to homepage
    window.location.href = "index.html";
  } catch (error) {
    console.error("❌ Signup Error:", error.message);
    alert("Signup failed: " + error.message);
  }
});
