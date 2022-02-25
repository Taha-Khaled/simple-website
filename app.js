setInterval(silderhandler, 4000);
let timehandler = 0;
const wrapper = document.querySelector(".sliderWraper");
const menuItems = document.querySelectorAll(".menuItem");
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const buyButton = document.querySelectorAll(".buyButton");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
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
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];
let choosenProduct = products[0];
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    timehandler = index;
    wrapper.style.transform = `translateX(${index * -100}vw)`;
    choosenProduct = products[index];
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductColors.forEach((color, index) => {
      color.style.background = choosenProduct.colors[index].code;
    });
    currentProductImg.src = choosenProduct.colors[0].img;
  });
});
function silderhandler() {
  if (timehandler < 5) {
    wrapper.style.transform = `translateX(${timehandler * -100}vw)`;
    timehandler++;
  } else {
    timehandler = 1;
    wrapper.style.transform = `translateX(0vw)`;
  }
}
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});
currentProductSizes.forEach((size) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((x) => {
      x.style.background = "white";
      x.style.color = "black";
    });
    size.style.background = "black";
    size.style.color = "white";
  });
});
buyButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    choosenProduct = products[timehandler - 1];
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductColors.forEach((color, index) => {
      color.style.background = choosenProduct.colors[index].code;
    });
    currentProductImg.src = choosenProduct.colors[0].img;
  });
});
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
close.addEventListener("click", () => {
  payment.style.display = "none";
});
const productButton = document.querySelector(".productButton");
productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});
