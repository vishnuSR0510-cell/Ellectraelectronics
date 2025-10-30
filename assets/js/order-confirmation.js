const lastOrder = JSON.parse(localStorage.getItem("lastOrder"));
const orderItems = document.getElementById("order-items");

orderItems.innerHTML = lastOrder.items.map(item => `
  <div class="order-summary-item">
    <div>
      <strong>${item.name}</strong><br>
      <small>(x${item.quantity})</small>
    </div>
    <div class="price">₹${item.price * item.quantity}</div>
  </div>
`).join("");

document.getElementById("total").textContent = lastOrder.total;
