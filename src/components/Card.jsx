import Button from "./button";
import MyToggle from "./myToggle";
import { useState } from "react";

function Card({
  id,
  logo,
  name,
  description,
  isActive,
  removeItem,
  updateIsActive,
}) {
  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
    updateIsActive(id, nextChecked);
  };

  return (
    <>
      <div id="card">
        <div id="card-top">
          <div id="img">
            <img src={logo} />
          </div>
          <div id="words">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div id="thing">
          <Button id={id} removeItem={removeItem} isActive={isActive} />

          <MyToggle
            id="toggle"
            isActive={isActive}
            handleChange={handleChange}
            checked={checked}
          />
        </div>
      </div>
    </>
  );
}

export default Card;
