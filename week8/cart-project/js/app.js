const products = [
  {
    name: "Flat screen TV",
    url: "https://images.unsplash.com/photo-1528928441742-b4ccac1bb04c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    price: 32000,
  },
  {
    name: "Fridge",
    url: "https://images.unsplash.com/photo-1646592491578-01b3053d9053?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 50000,
  },
  {
    name: "Sound System",
    url: "https://images.unsplash.com/photo-1615582854433-ac993fd801f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: 5000,
  },
  {
    name: "Laptop / Kabati",
    url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    price: 15000,
  },
  {
    name: "Laptop / Kabati",
    url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    price: 15000,
  },
];

const productsContainer = document.getElementById("products");
const counter = document.querySelector(".counter");
const cart = [];

products.map((product, index) => {
  // Variables
  const productDiv = document.createElement("div");
  productDiv.innerHTML = `
    <div class="card" style="width: 20rem;">
    <img src=${product.url} class="card-img-top" alt="...">
    <div class="card-body">
    <h2 class="card-title">${product.name}</h2>
    <h3 class="card-text">Ksh. ${product.price}</h3>
    <a href="#" class="btn btn-primary button" id="btn">Add to Cart</a>
    </div>
    </div>  
    `;

  productsContainer.append(productDiv);
});
const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
  button.addEventListener("click", (e) => {

    const el = e.target
    const name = el.parentElement.children[0].innerText;
    const price = el.parentElement.children[1].innerText;
    const image = el.parentElement.parentElement.children[0].src;

    const cartItem = {
      name,
      price: parseInt(price.substring(5)),
      image
    }

    if (el.innerText == "Add to Cart") {
      cart.push(cartItem)
      el.innerText = "Added to Cart";
      el.style.backgroundColor = "gray";
      counter.innerText = cart.length;

    }



    console.log(cart)
  })
})



