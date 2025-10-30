// ===============================
// 🌐 Navbar Mobile Toggle
// ===============================
const menuToggle = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// ===============================
// 🛒 Add to Cart Functionality
// ===============================
const addToCartButtons = document.querySelectorAll(".product-card button");

addToCartButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const productCard = e.target.closest(".product-card");
    const name = productCard.querySelector("h3").textContent;
    const price = parseFloat(productCard.querySelector("p").textContent.replace("₹", ""));
    const imgSrc = productCard.querySelector("img").src;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if product already exists in cart
    const existing = cart.find((item) => item.name === name);

    if (existing) {
      existing.quantity += 1; // Increase quantity
    } else {
      cart.push({ name, price, imgSrc, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`✅ ${name} added to cart!`);
  });
});


// ===============================
// 🛍️ "Shop Now" Button Redirect
// ===============================



// ===============================
// 💰 Optional: Display Cart Count on Navbar
// ===============================
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  let cartLink = document.querySelector('a[href="cart.html"]');
  if (cartLink) {
    cartLink.textContent = `Cart (${totalItems})`;
  }
}
updateCartCount();


// ===============================
// 🔄 Keep Cart Count Updated When Adding
// ===============================
addToCartButtons.forEach((btn) => {
  btn.addEventListener("click", updateCartCount);
});

// Highlight active nav link based on current page
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll(".nav-link").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active", "text-info");
  }
});


<script>
  document.getElementById("shopNowBtn").addEventListener("click", function() {
    window.location.href = "shop.html"};
</script>
