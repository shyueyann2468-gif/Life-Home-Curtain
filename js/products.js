const PRODUCTS = [
  { id: 1, name: "Linen Blackout Curtain", category: "blackout", price: 89, room: "Bedroom", img: "" },
  { id: 2, name: "Sheer Voile Curtain", category: "sheer", price: 45, room: "Living Room", img: "" },
  { id: 3, name: "Velvet Drape", category: "luxury", price: 129, room: "Living Room", img: "" },
  { id: 4, name: "Roman Blind", category: "blinds", price: 75, room: "Kitchen", img: "" },
  { id: 5, name: "Roller Blind", category: "blinds", price: 60, room: "Office", img: "" },
  { id: 6, name: "Cotton Print Curtain", category: "sheer", price: 55, room: "Bedroom", img: "" },
  { id: 7, name: "Thermal Blackout Curtain", category: "blackout", price: 99, room: "Bedroom", img: "" },
  { id: 8, name: "Silk Luxury Drape", category: "luxury", price: 159, room: "Dining Room", img: "" },
];

function renderProducts(filter = "all") {
  const grid = document.getElementById("product-grid");
  if (!grid) return;
  const items = filter === "all" ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);
  grid.innerHTML = items.map(p => `
    <div class="card">
      <div class="placeholder" style="height:200px;">${p.name}</div>
      <div class="card-body">
        <span class="tag">${p.category}</span>
        <h3>${p.name}</h3>
        <p>${p.room}</p>
        <p class="price">$${p.price}</p>
        <a class="btn" href="services.html">Request Quote</a>
      </div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  const buttons = document.querySelectorAll(".filters button");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProducts(btn.dataset.filter);
    });
  });
});
