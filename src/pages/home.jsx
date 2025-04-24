import Card from "../components/Card.jsx";
import data from "../Data.js";
import { useState, useEffect } from "react";
import React, { Component } from "react";

function Home() {
  // console.log(data);
  const [appData, setAppData] = useState(data);
  const [filter, setFilter] = useState("all");
  const [sorted, setSorted] = useState("all");

  function removeItem(id) {
    // console.log("clicked", id);
    let removeIt = appData.filter((item) => item.id !== id);
    setAppData(removeIt);
    // console.log(removeIt);
  }
  function updateIsActive(id, newIsActive) {
    const updatedData = appData.map((item) => {
      if (item.id === id) {
        return { ...item, isActive: newIsActive };
      }
      return item;
    });
    setAppData(updatedData);
  }

  let filteredData = appData.filter((item) => {
    if (filter === "active") return item.isActive;
    if (filter === "inactive") return !item.isActive;
    return item;
  });

  useEffect(() => {
    console.log(appData, "APP DATA ");
  }, [appData]);

  return (
    <>
      <div>
        <div id="project">
          <img id="logo" src="src/assets/images/logo.svg" />
          <img id="react" src="src/assets/images/icon-moon.svg" />
        </div>
      </div>
      <div id="actButton">
        <button id="all" onClick={() => setFilter("all")}>
          All
        </button>
        <button id="active" onClick={() => setFilter("active")}>
          Active
        </button>
        <button id="inactive" onClick={() => setFilter("inactive")}>
          Inactive
        </button>
      </div>
      {/* </button onClick()></button> */}
      <div id="container">
        {filteredData.map((item, key) => {
          return (
            <Card
              key={key}
              id={item.id}
              logo={item.logo}
              name={item.name}
              description={item.description}
              isActive={item.isActive}
              removeItem={removeItem}
              updateIsActive={updateIsActive}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;
