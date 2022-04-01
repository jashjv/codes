import React, { useEffect, useState } from "react";
import Mealitem from "./MealItem";
import "./style.css";
const Meal = () => {
  const [search, setSearch] = useState("");
  const [Mymeal, setMeal] = useState();
  const searchMeal = (evt) => {
    if (evt.key == "Enter") {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then((res) => res.json())
        .then((data) => {
          setMeal(data.meals);
          console.log(data.meals);
          setSearch("");
        });
    }
  };

  useEffect(() => {
    console.log(Mymeal);
  }, []);
  return (
    <>
      <div className="main">
        <div className="heading">
          <h1 id="cake">sketch bhramha cake corner</h1>
          <h4>sketch bhramha cake shop is here !!!!!</h4>
        </div>
        <div className="searchBox">
          <input
            type="search"
            className="search-bar"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            onKeyPress={searchMeal}
            placeholder="search for cake"
          />
        </div>
        <div className="container">
          {Mymeal == null ? (
            <p className="notSearch">search not found try next</p>
          ) : (
            Mymeal.map((res) => {
              return <Mealitem data={res} />;
            })
          )}
        </div>
      </div>
    </>
  );
};
export default Meal;
