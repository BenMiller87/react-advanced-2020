import React from "react";
import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              onClick={() => {
                setPeople(people.filter((person) => person.id !== id));
              }}
              className="btn"
            >
              remove person
            </button>
          </div>
        );
      })}
    </>
  );
};

export default UseStateArray;
