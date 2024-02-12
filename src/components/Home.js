// Home.jsx
import React, { useState } from "react";
import homeStyles from "../styles/Home.module.css";

import { selectHabits } from "../redux/reducers/habitReducer";
import Habit from "./Habit";
import { useSelector } from "react-redux";

const Home = () => {
  const habits = useSelector(selectHabits);
  return (
    <div>
      <div className={homeStyles.habitDiv}>
        {habits.map((habit, index) => (
          <Habit key={index} habit={habit} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;
