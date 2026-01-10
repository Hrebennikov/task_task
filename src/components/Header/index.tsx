import React from "react";
import styles from "./Header.module.scss";
import headerData from "../../assets/headerData.json";

interface HeaderItem {
  id: number;
  imgUrl: string;
  title: string;
}

interface HeaderProps {
  onClickHeader: (item: HeaderItem) => void;
}

const Header: React.FC<HeaderProps> = ({ onClickHeader }) => {
  const [activeId, setActiveId] = React.useState<number | null>(null);

  const handleClick = (item: HeaderItem) => {
    setActiveId(item.id);
    onClickHeader(item);
  };

  return (
    <div className={styles.container}>
      {/* Top header */}
      <div className={styles.top_header}>
        <div className={styles.top_header_left}>
          <img src="../../../public/img/Rectangle 6.png" alt="" />
          <h3>Hi Kate!</h3>
        </div>
        <div className={styles.top_header_right}>
          <img src="../../../public/img/chat.svg" alt="Chat" />
          <img src="../../../public/img/message.svg" alt="Message" />
          <img src="../../../public/img/partner icon.svg" alt="Partner" />
          <img src="../../../public/img/setting icon.svg" alt="Setting" />
          <img src="../../../public/img/Ellipse 1.svg" alt="Ellipse" />
        </div>
      </div>

      <div className={styles.line}></div>

      {/* Bottom header */}
      <div className={styles.bottom_header}>
        {headerData.map((item) => (
          <div
            key={item.id}
            onClick={() => handleClick(item)}
            className={`${styles.bottom_header_block} ${
              activeId === item.id ? styles.active : ""
            }`}
          >
            <div>
              <img src={item.imgUrl} alt={item.title} />
            </div>
            <div className={styles.bottom_header_block_text}>
              <span>{item.title}</span>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
