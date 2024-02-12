import React from "react";
import habitStyle from "../styles/Habit.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteHabit } from "../redux/reducers/habitReducer";
const Habit = ({ habit, index }) => {
  console.log(index);
  const { name, lastSixDays } = habit;
  const dispatch = useDispatch();
  const done = lastSixDays.reduce((count, day) => {
    // Add 1 to count if habit.done is equal to 1
    return count + (day.done === 1 ? 1 : 0);
  }, 0);
  return (
    <div className={habitStyle.mainDiv}>
      <div className={habitStyle.dataDiv}>
        <h2 className={habitStyle.name}>{name}</h2>
        <h3 className={habitStyle.days}>{done}/7 days</h3>
      </div>
      <div className={habitStyle.buttonDiv}>
        <Link to={`/week-view/${index}`}>
          <button className={`${habitStyle.button} ${habitStyle.week}`}>
            Week View
          </button>
        </Link>

        <button
          className={`${habitStyle.button} ${habitStyle.delete}`}
          onClick={() => dispatch(deleteHabit(index))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Habit;
