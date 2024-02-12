import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import modalStyles from "../styles/modal.module.css";
import { addHabit } from "../redux/reducers/habitReducer";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();

  const handleAddHabitClick = () => {
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addHabit({
        name: inputValue,
        // Add other fields if needed
      })
    );
    setInputValue("");
    setIsFormVisible(false);
  };

  return (
    <nav className={styles.navStyle}>
      <h1 className={styles.navHeading}>Habit Tracker</h1>
      {location.pathname === "/" ? (
        <button className={styles.navButton} onClick={handleAddHabitClick}>
          Add Habit
        </button>
      ) : (
        <Link to="/">
          <button className={styles.navButton}>Go to Home</button>
        </Link>
      )}

      {isFormVisible && (
        <div className={modalStyles["modal-overlay"]} onClick={handleCloseForm}>
          <div
            className={modalStyles["modal-content"]}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={modalStyles["modal-header"]}>
              <h1>Add New Habit</h1>
              <p
                className={modalStyles["close-button"]}
                onClick={handleCloseForm}
              >
                X
              </p>
            </div>
            <form className={modalStyles["modal-form"]} onSubmit={handleSubmit}>
              <input
                type="text"
                id="habitName"
                placeholder="Enter habit name"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button type="submit" className={modalStyles["submit-button"]}>
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
