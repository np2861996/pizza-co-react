import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 600,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 1000,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 1200,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 1200,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 1500,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 1800,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />

      <Footer />
    </div>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <div className="pizza ">
        {pizzaData.map((pizza) => (
          <Pizza
            pizzaname={pizza.name}
            Pizzaimage={pizza.photoName}
            pizzadesc={pizza.ingredients}
            pizzaprice={pizza.price}
            pizzasoldOut={pizza.soldOut ? "SoldOut" : pizza.price}
          />
        ))}
      </div>
    </div>
  );
}
function Pizza(props) {
  console.log(props);
  return (
    <div className={`pizzas ${props.pizzasoldOut ? "sold-out" : ""}`}>
      <img src={props.Pizzaimage} alt={props.pizzaname} />
      <h2>{props.pizzaname}</h2>
      <p>{props.pizzadesc}</p>
      <p>${props.pizzasoldOut}</p>
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>Nik Pizza Co.</h1>
    </div>
  );
}

function Footer() {
  return <div className="footer">Copyright @ Nik Pizza 2024.</div>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
