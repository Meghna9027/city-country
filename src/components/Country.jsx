import React from "react";
import{ useEffect, useState } from "react";
import axios from "axios";
export const Country = () => {
  const [state, setState] = useState({
    country:"",
    city:"",
    population:0,
  });
  const [country, setCountry] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const getData = () => {
    axios
      .get(`http://localhost:3000/country`)
      .then((res) => {
        setCountry(res.data);
      });
  };
  return (
    <div>
      <form
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <div>
          <label htmlFor="country">Country</label>
          <input
            name="country"
            placeholder="Country"
            required="required"
            value={state.country}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            name="city"
            placeholder="City"
            required="required"
            value={state.city}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="population">Population</label>
          <input
            name="population"
            placeholder="Population"
            required="required"
            value={state.population}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <button
            onClick={(e) => {
              const {
                country,
                city,
                population,
              } = state;
              e.preventDefault();
              fetch("http://localhost:3000/country", {
                method: "POST",
                body: JSON.stringify({
                  country : country,
                city : city,
                population : population,
                }),
                headers: {
                  "content-type": "application/json",
                },
              }).then(() => {
                getData();
              });
            }}
          >
            Add
          </button>
        </div>
      </form>
      <div className="Sort">
        <button
          onClick={() => {
            axios
              .get(`http://localhost:3000/country?_sort=country&_order=asec`)
              .then((res) => {
                setCountry(res.data);
              });
          }}
        >
          Filter by country
        </button>
      
        <button
          onClick={() => {
            axios
              .get(`http://localhost:3000/country?_sort=population&_order=asec`)
              .then((res) => {
                setCountry(res.data);
              });
          }}
        >
          Low to High
        </button>
        <button
          onClick={() => {
            axios
              .get(`http://localhost:3000/country?_sort=population&_order=desc`)
              .then((res) => {
                setCountry(res.data);
              });
          }}
        >
          High to Low
        </button>
      </div>
      {country.map((g) => (
        <div
          key={g.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            border: "1px solid black",
            width: "80%",
            margin: "auto",
          }}
        >
          <img src={g.img} style={{ width: "100px" }}></img>
          <p>{g.country}</p>
          <p>{g.city}</p>
          <p>{g.population}</p>
          </div>
      ))}
      
    </div>
  );
};
