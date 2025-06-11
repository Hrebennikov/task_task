import React from "react";
import styles from "./Buttons.module.scss";
import buttonsLeft from "../../assets/buttonsLeft.json";
import buttonsRight from "../../assets/buttonsRight.json";
import AddButton from "./AddButton";
import DeleteButton from "./DeleteButton";
import SearchButton from "./SearchButton";

const Buttons: React.FC = () => {
  const [isActive, setIsActive] = React.useState(false);
  const [activeId, setActiveId] = React.useState<number | null>(null);

  const handleFocus = () => setIsActive(true);
  const handleReset = () => setIsActive(false);

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div className={styles.block_left}>
          {/* {buttonsLeft.map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActiveId(btn.id)}
              className={activeId === btn.id ? styles.active : ""}
            >
              {btn.title}
            </button>
          ))} */}
          <AddButton />
          <DeleteButton />
        </div>
        <div className={styles.block_right}>
          {/* <div className={styles.search}>
            <div className={isActive ? styles.colorActive : ""}>
              <input
                type="text"
                onFocus={handleFocus}
                className={`${styles.input} ${
                  isActive ? styles.activeInput : ""
                }`}
                placeholder="Search..."
              />
              <button
                className={`${styles.reset} ${
                  isActive ? styles.activeReset : ""
                }`}
                onClick={handleReset}
              >
                <div
                  className={`${styles.handle} ${
                    isActive ? styles.activeHandle : ""
                  }`}
                ></div>
              </button>
            </div>
          </div> */}
          <SearchButton />
          {buttonsRight.map((btn) =>
            btn.isIcon ? (
              <>
                <button key={btn.id}>{btn.title}</button>
                <svg
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0867 0.452003L13.1467 1.513L7.36965 7.292C7.27708 7.38516 7.16701 7.45909 7.04576 7.50953C6.92451 7.55998 6.79448 7.58595 6.66315 7.58595C6.53182 7.58595 6.4018 7.55998 6.28055 7.50953C6.1593 7.45909 6.04922 7.38516 5.95665 7.292L0.176651 1.513L1.23665 0.453002L6.66165 5.877L12.0867 0.452003Z"
                    fill="black"
                  />
                </svg>
              </>
            ) : (
              <button key={btn.id}>{btn.title}</button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Buttons;
