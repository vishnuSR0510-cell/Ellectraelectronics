document.addEventListener("DOMContentLoaded", () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const list = document.getElementById("checkout-items");
  const totalEl = document.getElementById("checkout-total");

  // 👇 Added display for delivery charge
  const deliveryChargeEl = document.createElement("p");
  deliveryChargeEl.className = "text-warning fw-bold mt-2";
  totalEl.parentNode.appendChild(deliveryChargeEl);

  // ===== Function to Render Items =====
  function renderCart() {
    if (cart.length === 0) {
      list.innerHTML = "<p class='text-muted'>Your cart is empty.</p>";
      totalEl.textContent = "₹0";
      return;
    }

    let total = 0;
    list.innerHTML = cart
      .map((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        return `
          <div class="d-flex justify-content-between align-items-center border-bottom py-3">
            <div class="me-3">
              <strong>${item.name}</strong><br>
              <small>Code: ${item.code}</small><br>
              <small class="text-secondary">₹${item.price}</small>
            </div>
            <div class="d-flex align-items-center">
              <button class="btn btn-sm btn-outline-info me-2" onclick="changeQty(${index}, -1)">−</button>
              <span class="fw-bold text-light">${item.quantity}</span>
              <button class="btn btn-sm btn-outline-info ms-2" onclick="changeQty(${index}, 1)">+</button>
            </div>
            <div class="ms-3 text-info fw-bold">₹${itemTotal}</div>
          </div>
        `;
      })
      .join("");

    totalEl.textContent = `₹${total}`;
  }

  // ===== Quantity Change Function =====
  window.changeQty = function (index, delta) {
    if (cart[index].quantity + delta <= 0) {
      cart.splice(index, 1);
    } else {
      cart[index].quantity += delta;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
    updateTotal();
  };

  renderCart();

  // ====== FORM SECTION LOGIC ======
  const collegeSelect = document.getElementById("college");
  const msceSection = document.getElementById("msce-section");
  const otherSection = document.getElementById("other-section");
  const msceAddress = document.getElementById("msce-address");
  const deliveryType = document.getElementById("delivery-type");

  collegeSelect.addEventListener("change", () => {
    if (collegeSelect.value === "MSCE") {
      msceSection.classList.remove("d-none");
      otherSection.classList.add("d-none");
    } else if (collegeSelect.value === "Other") {
      msceSection.classList.add("d-none");
      otherSection.classList.remove("d-none");
    } else {
      msceSection.classList.add("d-none");
      otherSection.classList.add("d-none");
    }
    updateTotal();
  });

  if (deliveryType) {
    deliveryType.addEventListener("change", updateTotal);
  }

  // ===== Dynamic Total Update =====
  function updateTotal() {
    const baseTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    let finalTotal = baseTotal;
    let deliveryCharge = 0;

    if (collegeSelect.value === "MSCE") {
      const deliveryOption = deliveryType.value;
      if (deliveryOption === "Home") {
        msceAddress.classList.remove("d-none");
        deliveryCharge = 75;
      } else {
        msceAddress.classList.add("d-none");
      }
    }

    if (collegeSelect.value === "Other") {
      deliveryCharge = 75;
    }

    finalTotal += deliveryCharge;

    totalEl.textContent = `₹${finalTotal}`;
    deliveryChargeEl.textContent = deliveryCharge > 0
      ? `Delivery Charge: ₹${deliveryCharge}`
      : "Delivery: Free";
  }

  // ====== FORM SUBMIT & RECEIPT GENERATION ======
    // ====== FORM SUBMIT & RECEIPT GENERATION ======
  document.getElementById("checkout-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();

    // ===== Header Section =====
    const totalValue = totalEl.textContent;
    const deliveryCharge =
      (collegeSelect.value === "MSCE" && deliveryType.value === "Home") ||
      collegeSelect.value === "Other"
        ? 75
        : 0;

    pdf.setFillColor(0, 191, 255);
    pdf.rect(0, 0, 210, 20, "F");
    pdf.setFontSize(18);
    pdf.setTextColor(255, 255, 255);
    pdf.text("Ellectra - Order Receipt", 70, 13);

    // ===== Customer Info =====
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(13);
    pdf.text("Customer Information", 10, 30);
    pdf.setDrawColor(0, 191, 255);
    pdf.line(10, 32, 80, 32);
    pdf.setFontSize(11);
    pdf.text(`Name: ${document.getElementById("name").value}`, 10, 40);
    pdf.text(`Phone: ${document.getElementById("phone").value}`, 10, 48);
    pdf.text(`Email: ${document.getElementById("email").value}`, 10, 56);
    const college = document.getElementById("college").value;
    pdf.text(`College: ${college}`, 10, 64);

    // ===== Delivery Details =====
    let y = 74;
    pdf.setFontSize(13);
    pdf.text("Delivery Details", 10, y);
    pdf.line(10, y + 2, 60, y + 2);
    y += 10;
    pdf.setFontSize(11);
    if (college === "MSCE") {
      pdf.text(`Reg No: ${document.getElementById("regno").value}`, 10, y);
      pdf.text(`Year: ${document.getElementById("year").value}`, 80, y);
      y += 8;
      pdf.text(`Delivery: ${document.getElementById("delivery-type").value}`, 10, y);
      y += 8;
      if (document.getElementById("delivery-type").value === "Home") {
        pdf.text(`Address: ${document.getElementById("address-msce").value}`, 10, y);
        y += 8;
        pdf.text(`Delivery Charge: ₹75`, 10, y);
        y += 8;
      } else {
        pdf.text("Delivery Charge: Free", 10, y);
        y += 8;
      }
    } else {
      pdf.text(`Address: ${document.getElementById("address").value}`, 10, y);
      y += 8;
      pdf.text(`Landmark: ${document.getElementById("landmark").value}`, 10, y);
      y += 8;
      pdf.text(`Pincode: ${document.getElementById("pincode").value}`, 10, y);
      y += 8;
      pdf.text(`Delivery Charge: ₹75`, 10, y);
      y += 8;
    }

    // ===== Order Summary =====
    y += 10;
    pdf.setFontSize(13);
    pdf.text("Order Summary", 10, y);
    pdf.line(10, y + 2, 60, y + 2);
    y += 10;
    pdf.setFontSize(11);
    cart.forEach(item => {
      pdf.text(`${item.name} (x${item.quantity})`, 10, y);
      pdf.text(`₹${item.price * item.quantity}`, 160, y);
      y += 8;
    });

    // ===== Total Section =====
    pdf.setDrawColor(220, 220, 220);
    pdf.line(10, y, 200, y);
    y += 10;
    pdf.setFontSize(12);
    pdf.text(`Delivery Charge: ₹${deliveryCharge}`, 10, y);
    y += 8;
    pdf.setFontSize(14);
    pdf.setTextColor(0, 191, 255);
    pdf.text(`Total: ${totalValue}`, 10, y);
    y += 10;
    pdf.setFontSize(11);
    pdf.setTextColor(0, 0, 0);
    pdf.text("No Return Policy Applicable.", 10, y);

    // ===== Footer =====
    y += 20;
    pdf.setDrawColor(0, 191, 255);
    pdf.line(10, y, 200, y);
    pdf.setFontSize(11);
    pdf.setTextColor(100, 100, 100);
    y += 8;
    pdf.text("Thank you for shopping with Ellectra!", 55, y);
    y += 6;
    pdf.text("Our team will reach out to you soon.", 60, y);

    pdf.save("Ellectra_Order_Receipt.pdf");

    // ✅ Save the order into order history
    const newOrder = {
      id: Date.now(),
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      total: totalEl.textContent,
      deliveryCharge: deliveryCharge,
      items: cart,
      status: "On Process",
      date: new Date().toLocaleString(),
    };


    let allOrders = JSON.parse(localStorage.getItem("allOrders")) || [];
    allOrders.push(newOrder);
    localStorage.setItem("allOrders", JSON.stringify(allOrders));

    localStorage.setItem("lastOrder", JSON.stringify(newOrder));

    alert("✅ Order Placed Successfully! Receipt downloaded.");
    localStorage.removeItem("cart");
    window.location.href = "order-track.html";
  });


  

  });

