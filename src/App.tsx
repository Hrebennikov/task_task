// import React from "react";
import Buttons from "./components/Buttons";
import Header from "./components/Header";
import Table from "./components/Table/Table";
import styles from "./App.module.scss";
// import AddButton from "./components/Buttons/AddButton";
// import DeleteButton from "./components/Buttons/DeleteButton";
// import SearchButton from "./components/Buttons/SearchButton";
import ConfirmDeleteModal from "./components/Modals/ConfirmDeleteModal";

function App() {
  const handleHeaderClick = (item: {
    id: number;
    imgUrl: string;
    title: string;
  }) => {
    console.log("Clicked header item:", item);
  };

  return (
    <div className={styles.container}>
      <Header onClickHeader={handleHeaderClick} />
      <Buttons />
      {/* <div className={styles.buttons}>
        <AddButton />
        <DeleteButton />
        <SearchButton />
      </div> */}
      <Table />
      <ConfirmDeleteModal />
    </div>
  );
}

export default App;
