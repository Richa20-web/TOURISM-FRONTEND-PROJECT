function addTodo() {
  const input = document.getElementById("todo-input");
  const value = input.value.trim();

  if (value !== "") {
    const list = document.getElementById("todo-list");

    const li = document.createElement("li");
    li.textContent = value;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");

    removeBtn.onclick = function () {
      list.removeChild(li);
    };

    li.appendChild(removeBtn);
    list.appendChild(li);

    input.value = "";
  } else {
    alert("Please enter a place name first!");
  }
}

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Stop actual form submit

    // Get field values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // If any field is empty, show alert
    if (!name || !email || !phone || !message) {
      alert("⚠️ Please fill out all the fields before submitting.");
      return;
    }

    // Optional: Validate phone number
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      alert("⚠️ Please enter a valid 10-digit phone number.");
      return;
    }

    // If everything is correct
    alert("✅ Message sent successfully!");
    document.getElementById("contact-form").reset();
  });
