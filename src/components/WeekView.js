import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { doneHabit, selectHabits } from "../redux/reducers/habitReducer";
import { useParams } from "react-router-dom";
import style from "../styles/WeekView.module.css";

const WeekView = () => {
  const { id } = useParams();
  const habits = useSelector(selectHabits);
  const dispatch = useDispatch();
  const arr = habits[id].lastSixDays;
  return (
    <>
      <h1 className={style.heading}>{habits[id].name}</h1>
      <div className={style.flexDiv}>
        {arr.map((data, index) => (
          <div key={index} className={style.flexItems}>
            <h2 className={style.time}>{data.dayOfWeek}</h2>
            <h3 className={style.time}>{data.formattedDate}</h3>
            <div className={style.iconsDiv}>
              <button
                className={`${style.button} ${
                  data.done === 1 ? style.active : ""
                }`}
                onClick={() => dispatch(doneHabit({ id, index, done: 1 }))}
              >
                Done
              </button>
              <button
                className={`${style.button} ${
                  data.done === 0 ? style.active : ""
                }`}
                onClick={() => dispatch(doneHabit({ id, index, done: 0 }))}
              >
                Not Done
              </button>
              <button
                className={`${style.button} ${
                  data.done === -1 ? style.active : ""
                }`}
                onClick={() => dispatch(doneHabit({ id, index, done: -1 }))}
              >
                None
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WeekView;
