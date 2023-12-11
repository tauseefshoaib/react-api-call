/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="App">
      <div className="header">
        <h1 className="header-text">Products</h1>
      </div>
      <div className="body">
        {data.map((item, index) => {
          return (
            <div className="product-card">
              <img
                style={{ width: "100%" }}
                src={item.image}
                alt="product image"
              />
              <p1>{item.title}</p1>
              <p1>
                {item.description.length < 30
                  ? item.description
                  : item.description.slice(0, 30) + "..."}
              </p1>
              <h4>₹ {item.price}</h4>
              <h3 style={{ color: "#640d14" }}>Rating : {item.rating.rate}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
