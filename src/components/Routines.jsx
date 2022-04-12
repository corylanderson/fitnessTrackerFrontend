import React from "react";
import { useEffect, useState } from "react";
import { fetchAllRoutines } from "../api";

const Routines = () => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    const getRoutines = async () => {
      const response = await fetchAllRoutines();
      setRoutines(response);
    };
    getRoutines();
  }, []);

  return (
    <div>
      <h1>ROUTINES</h1>
      {routines.map((routine, idx) => {
        return (
          <div className="routine_data">
            <h2>Name: {routine.name}</h2>
            <h3>Goal: {routine.goal}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Routines;