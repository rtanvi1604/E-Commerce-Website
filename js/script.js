let cartCount = 0;

function addToCart(productName) {
document.getElementById("search-input")?.addEventListener("keyup", function () {
  const filter = this.value.toLowerCase();
  const products = document.querySelectorAll(".product");

  products.forEach(product => {
    const title = product.querySelector("h3").textContent.toLowerCase();
    if (title.includes(filter)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;
  alert(`${productName} added to cart!`);
}
const form = document.getElementById("contactForm");
const status = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    status.style.color = "red";
    status.textContent = "Please fill in all the fields!";
    return;
  }

  status.style.color = "green";
  status.textContent = "Message sent successfully! 💌";

  form.reset();
});

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("search-input");
  if (input) {
    input.addEventListener("input", function () {
      const search = input.value.toLowerCase();
      document.querySelectorAll(".product-card").forEach((card) => {
        const name = card.querySelector("h3").textContent.toLowerCase();
        card.style.display = name.includes(search) ? "block" : "none";
      });
    });
  }
});


