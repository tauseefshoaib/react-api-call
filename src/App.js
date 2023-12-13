import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchText, setSearchText] = useState("");

  function onSearchInput(value) {
    setSearchText(value);
    let searchInput = value.toLowerCase();
    let result = data.filter((item) =>
      item.title.toLowerCase().includes(searchInput)
    );
    setFilterData(result);
  }

  const renderStars = (rating) => {
    const stars = [];
    const numberOfStars = Math.floor(rating);
    for (let i = 0; i < numberOfStars; i++) {
      stars.push(<span style={{ color: "#640d14" }}>★</span>);
    }
    return stars;
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFilterData(data);
      });
  }, []);

  return (
    <div className="App">
      <div className="header">
        <h1 className="header-text">Products</h1>
      </div>
      <input
        className="search-input"
        placeholder="search..."
        value={searchText}
        onChange={(e) => onSearchInput(e.target.value)}
      />
      <div className="body">
        {filterData.length > 0 ? (
          filterData.map((item) => {
            return (
              <div className="product-card" key={item.id}>
                <img
                  style={{ width: "100%", height: "200px" }}
                  src={item.image}
                  alt={item.title}
                />
                <h4>{item.title}</h4>
                <h3>₹ {item.price}</h3>
                <p1>
                  {item.description.length < 30
                    ? item.description
                    : item.description.slice(0, 30) + "..."}
                </p1>
                <h4>Rating: {renderStars(item.rating.rate)}</h4>
              </div>
            );
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
}

export default App;
