document.addEventListener("DOMContentLoaded", loadCart);

function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cart-items");
  const totalPriceEl = document.getElementById("total-price");
  const itemCountEl = document.getElementById("item-count");

  if (cart.length === 0) {
    cartContainer.innerHTML = `<p class="text-light">Your cart is empty 😔</p>`;
    itemCountEl.textContent = "";
    totalPriceEl.textContent = "0";
    return;
  }

  cartContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");
    itemDiv.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="cart-item-info">
        <h5>${item.name}</h5>
        <p>Code: ${item.code}</p>
        <p>₹${item.price} × ${item.quantity} = ₹${item.price * item.quantity}</p>
      </div>
      <div class="quantity-controls">
        <button onclick="changeQuantity(${index}, -1)">−</button>
        <span>${item.quantity}</span>
        <button onclick="changeQuantity(${index}, 1)">+</button>
      </div>
      <button class="remove" onclick="removeItem(${index})">Remove</button>
    `;
    cartContainer.appendChild(itemDiv);
  });

  itemCountEl.textContent = `Items: ${cart.length}`;
  totalPriceEl.textContent = total;
}

function changeQuantity(index, change) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart[index]) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
  }
}

function removeItem(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function goToCheckout() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) {
    alert("🛒 Your cart is empty!");
    return;
  }
  // Save total price for checkout
  localStorage.setItem("checkout_total", document.getElementById("total-price").textContent);
  // Redirect to checkout page
  window.location.href = "checkout.html";
}
