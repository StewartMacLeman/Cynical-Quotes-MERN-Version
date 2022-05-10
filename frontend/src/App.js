import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import CreateQuoteForm from "./components/forms/CreateQuoteForm";
import QuotesHeading from "./components/QuotesHeading";
import QuotesList from "./components/QuotesList";
import ModalCover from "./components/forms/ModalCover";
import EditQuoteForm from "./components/forms/EditQuoteForm";
import DeleteQuoteForm from "./components/forms/DeleteQuoteForm";

const App = () => {
  const [quotes, setQuotes] = useState([]);
  // ------------------------
  const [modalCover, setModalCover] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [deleteForm, setDeleteForm] = useState(false);
  // ------------------------
  const [fetchError, setFetchError] = useState(null);
  const URL = "http://localhost:5000";

  // Read / get the quotes. -------------------------------
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw Error("The data was not returned!");
        }
        const quoteItems = await response.json();
        setQuotes(quoteItems);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message);
      }
    };
    fetchItems();
  }, []);
  
  // Create a quote. --------------------------------------
  const handleCreateSubmit = (e) => {
    e.preventDefault();
    console.log("The submit button was clicked!");
  };
  // Edit a quote. -----------------------------------------
  const showEditForm = (e) => {
    console.log(e.target.value);
    setModalCover(true);
    setEditForm(true);
  };
  const cancelEdit = () => {
    setModalCover(false);
    setEditForm(false);
  };
  const confirmEdit = (e) => {
    e.preventDefault();
    setModalCover(false);
    setEditForm(false);
  };
  // Edit a quote. -----------------------------------------
  const showDeleteForm = (e) => {
    console.log(e.target.value);
    setModalCover(true);
    setDeleteForm(true);
  };
  const cancelDelete = () => {
    setModalCover(false);
    setDeleteForm(false);
  };
  const confirmDelete = (e) => {
    e.preventDefault();
    setModalCover(false);
    setDeleteForm(false);
  };

  return (
    <>
      <Header />
      <CreateQuoteForm createSubmit={handleCreateSubmit} />
      <QuotesHeading />
      {fetchError && <h2>{fetchError}</h2>}
      <QuotesList
        quotesList={quotes}
        showEditForm={showEditForm}
        showDeleteForm={showDeleteForm}
      />
      {modalCover && <ModalCover />}
      {editForm && (
        <EditQuoteForm cancelEdit={cancelEdit} confirmEdit={confirmEdit} />
      )}
      {deleteForm && (
        <DeleteQuoteForm
          cancelDelete={cancelDelete}
          confirmDelete={confirmDelete}
        />
      )}
    </>
  );
};

export default App;
