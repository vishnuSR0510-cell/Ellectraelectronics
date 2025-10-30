document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("orders-container");
  let orders = JSON.parse(localStorage.getItem("allOrders")) || [];

  if (orders.length === 0) {
    container.innerHTML = `
      <p class="text-center text-muted">No orders found.</p>
      <div class="text-center mt-3">
        <a href="shop.html" class="btn btn-info">🛒 Shop Now</a>
      </div>`;
    return;
  }

  // 🆕 Sort latest order first
  orders.sort((a, b) => b.id - a.id);
  renderOrders();

  function renderOrders() {
    container.innerHTML = orders
      .map((order, index) => {
        const statusClass =
          order.status === "Cancelled"
            ? "status-cancelled"
            : order.status === "Delivered"
            ? "status-delivered"
            : "status-process";

        const itemsHTML = order.items
          .map(
            (item) => `
          <div class="d-flex justify-content-between align-items-center border-bottom py-2">
            <div>
              <strong class="text-light">${item.name}</strong><br>
              <small class="text-secondary">Code: ${item.code}</small><br>
              <small class="text-secondary">Qty: ${item.quantity}</small>
            </div>
            <div class="text-info fw-bold">₹${item.price * item.quantity}</div>
          </div>`
          )
          .join("");

        // 🆕 Delivery charge info (if available)
        const deliveryChargeHTML =
          order.deliveryCharge && order.deliveryCharge > 0
            ? `<div class="d-flex justify-content-between mt-2">
                 <strong class="text-light">Delivery Charge:</strong>
                 <span class="text-warning fw-bold">₹${order.deliveryCharge}</span>
               </div>`
            : `<div class="d-flex justify-content-between mt-2">
                 <strong class="text-light">Delivery:</strong>
                 <span class="text-success fw-bold">Free</span>
               </div>`;

        return `
        <div class="card p-4 mb-4">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h5 class="text-info mb-0">Order ID: ${order.id}</h5>
            <span class="status-box ${statusClass}">${order.status}</span>
          </div>

          <p class="mb-1"><strong style="color:#00bfff;">Name:</strong> <span class="text-light">${order.name}</span></p>
          <p class="mb-1"><strong style="color:#00bfff;">Phone:</strong> <span class="text-light">${order.phone}</span></p>
          <p class="mb-3"><strong style="color:#00bfff;">Date:</strong> <span class="text-light">${order.date}</span></p>

          <hr class="border-secondary">

          <h6 class="text-info mb-2">Items</h6>
          <div class="px-2">${itemsHTML}</div>

          <hr class="border-secondary">

          ${deliveryChargeHTML}

          <div class="d-flex justify-content-between mt-2">
            <strong class="text-light">Total:</strong>
            <span class="text-info fw-bold">${order.total}</span>
          </div>

          ${
            order.status === "Cancelled"
              ? `<p class="text-danger mt-3 fw-bold text-center">❌ Order Cancelled</p>`
              : `<div class="text-end mt-3">
                  <button class="btn btn-danger btn-sm" onclick="cancelOrder(${index})">Cancel Order</button>
                </div>`
          }
        </div>
      `;
      })
      .join("");
  }

  // 🆕 Cancel order confirmation
  window.cancelOrder = (index) => {
    const confirmCancel = confirm("Are you sure you want to cancel this order?");
    if (confirmCancel) {
      orders[index].status = "Cancelled";
      localStorage.setItem("allOrders", JSON.stringify(orders));
      renderOrders();
      alert("❌ Your order has been cancelled successfully!");
    }
  };
});
