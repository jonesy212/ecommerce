const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 199,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 219,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 189,
    colors: [
      {
        code: "black",
        img: "./img/crater.png.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 107,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png.png",
      },
    ],
  },
];

let chosenProduct = products[0];

let currentProductImg = document.querySelector(".productImg");
let currentProductTitle = document.querySelector(".productTitle");
let currentProductPrice = document.querySelector(".productPrice");
let currentProductColors = document.querySelectorAll(".color");
let currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the chose product
    chosenProduct = products[index];

    //change text of currentProductSizes
    currentProductTitle.textContent = chosenProduct.title;
    currentProductPrice.textContent = "$" + chosenProduct.price;
    currentProductImg.src = chosenProduct.colors[0].img;
    currentProductColors.src = chosenProduct.colors;
  });
});
