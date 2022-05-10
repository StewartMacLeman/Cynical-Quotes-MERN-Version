import React, { useState } from "react";
import Header from "./components/Header";
import CreateQuoteForm from "./components/forms/CreateQuoteForm";
import QuotesHeading from "./components/QuotesHeading";
import QuotesList from "./components/QuotesList";
import ModalCover from "./components/forms/ModalCover";
import EditQuoteForm from "./components/forms/EditQuoteForm";
import DeleteQuoteForm from "./components/forms/DeleteQuoteForm";

const App = () => {

  const testData = [
    {
      _id: "quote_1",
      quote: "All you need in life is ignorance and confidence and then succcess is sure.",
      quoter: "Mark Twain"
    },
    {
      _id: "quote_2",
      quote: "Life is one long process of getting tired.",
      quoter: "Samuel Butler"
    },
    {
      _id: "quote_3",
      quote: "Don't take life too seriously - you will never get out of it alive",
      quoter: "Elbert Hubbard"
    },
  ];

  const [modalCover, setModalCover] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [deleteForm, setDeleteForm] = useState(false);

// Read / get the quotes. -------------------------------

// Create a quote. --------------------------------------
const handleCreateSubmit = (e) => {
  e.preventDefault();
  console.log("The submit button was clicked!");
}
// Edit a quote. -----------------------------------------
const showEditForm = (e) => {
  console.log(e.target.value);
  setModalCover(true);
  setEditForm(true);
}
const cancelEdit = () => {
  setModalCover(false);
  setEditForm(false);
}
const confirmEdit = (e) => {
  e.preventDefault();
  setModalCover(false);
  setEditForm(false);
}
// Edit a quote. -----------------------------------------
const showDeleteForm = (e) => {
  console.log(e.target.value);
  setModalCover(true);
  setDeleteForm(true);
}
const cancelDelete = () => {
  setModalCover(false);
  setDeleteForm(false);
}
const confirmDelete = (e) => {
  e.preventDefault();
  setModalCover(false);
  setDeleteForm(false);
}

  return (
    <>
      <Header />
      <CreateQuoteForm createSubmit={handleCreateSubmit}/>
      <QuotesHeading />
      <QuotesList quotesList={testData} showEditForm={showEditForm} showDeleteForm={showDeleteForm} />
      {modalCover && <ModalCover/>}
      {editForm && <EditQuoteForm cancelEdit={cancelEdit} confirmEdit={confirmEdit} />}
      {deleteForm && <DeleteQuoteForm cancelDelete={cancelDelete} confirmDelete={confirmDelete} />}
    </>
  );
};

export default App;
