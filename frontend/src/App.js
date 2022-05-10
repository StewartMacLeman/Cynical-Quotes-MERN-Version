import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import CreateQuoteForm from "./components/forms/CreateQuoteForm";
import QuotesHeading from "./components/QuotesHeading";
import QuotesList from "./components/QuotesList";
import ModalCover from "./components/forms/ModalCover";
import ReloadButton from "./components/forms/ReloadButton";
import EditQuoteForm from "./components/forms/EditQuoteForm";
import DeleteQuoteForm from "./components/forms/DeleteQuoteForm";

const App = () => {
  const [quotes, setQuotes] = useState([]);
  // ------------------------
  const [newQuote, setNewQuote] = useState("");
  const [newQuoter, setNewQuoter] = useState("");
  // ------------------------
  const [modalCover, setModalCover] = useState(false);
  // ------------------------
  const [editForm, setEditForm] = useState(false);
  const [editId, setEditId] = useState("");
  const [editedQuote, setEditedQuote] = useState("");
  const [editedQuoter, setEditedQuoter] = useState("");
  // ------------------------
  const [deleteForm, setDeleteForm] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  // ------------------------
  const [showReload, setShowReload] = useState(false);
  const [reload, setReload] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const URL = "http://localhost:5000";

  // Show reload. -------------------------------------------
  const showReloadModal = () => {
    setModalCover(true);
    setShowReload(true);
  };
  const handleReload = () => {
    setModalCover(false);
    setShowReload(false);
    setReload((reload) => !reload);
  };

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
  }, [reload]);

  // Create a quote. --------------------------------------
  const createQuote = async (new_quote, new_quoter) => {
    let newQuoteObject = {
      quote: new_quote,
      quoter: new_quoter,
    };
    try {
      await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newQuoteObject),
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleCreateSubmit = (e) => {
    e.preventDefault();
    console.log("The submit button was clicked!");
    if (
      (!newQuote && !newQuoter) ||
      (newQuote && !newQuoter) ||
      (!newQuote && newQuoter)
    ) {
      return;
    }
    // Fetch function call!
    createQuote(newQuote, newQuoter);
    // -----------------------------------
    setNewQuote("");
    setNewQuoter("");
    showReloadModal();
  };
  // Edit a quote. -----------------------------------------
  const showEditForm = (e) => {
    console.log(e.target.value);
    let id = e.target.value;
    let currentQuote =
      e.target.parentElement.previousSibling.querySelector(
        ".quote"
      ).textContent;
    let currentQuoter =
      e.target.parentElement.previousSibling.querySelector(".quoter").textContent;
    setEditId(id);
    setEditedQuote(currentQuote);
    setEditedQuoter(currentQuoter);
    setModalCover(true);
    setEditForm(true);
  };
  const cancelEdit = () => {
    setModalCover(false);
    setEditForm(false);
    setEditId("");
    setEditedQuote("");
    setEditedQuoter("");
  };
  const editQuote = async (id, edited_Quote, edited_Quoter) => {
    let editedQuoteObject = {
      id: id,
      quote_edited: edited_Quote,
      quoter_edited: edited_Quoter,
    };
    try {
      await fetch(URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedQuoteObject),
      });
    } catch (err) {
      console.log(err);
    }
  };
  const confirmEdit = (e) => {
    e.preventDefault();
    // Fetch function call!
    editQuote(editId, editedQuote, editedQuoter);
    // -----------------------------------------------
    let editedObject = {
      _id: editId,
      quote: editedQuote,
      quoter: editedQuoter,
    };
    let idArray = quotes.map((item) => item._id);
    let idIndexNumber = idArray.indexOf(editId);
    let editedQuotes = quotes.map((item, index) => {
      if (index == idIndexNumber) {
        return editedObject;
      } else {
        return item;
      }
    });
    setQuotes(editedQuotes);
    setModalCover(false);
    setEditForm(false);
    setEditId("");
    setEditedQuote("");
    setEditedQuoter("");
  };
  // Delete a quote. -----------------------------------------
  const showDeleteForm = (e) => {
    let id = e.target.value;
    setDeleteId(id);
    setModalCover(true);
    setDeleteForm(true);
  };
  const cancelDelete = () => {
    setDeleteId("");
    setModalCover(false);
    setDeleteForm(false);
  };
  const deleteQuote = async (delId) => {
    let newQuoteObject = {
      id: delId,
    };
    try {
      await fetch(URL, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newQuoteObject),
      });
    } catch (err) {
      console.log(err);
    }
  };
  const confirmDelete = (e) => {
    e.preventDefault();
    // Fetch function call!
    deleteQuote(deleteId);
    // ---------------------
    let amendedQuotes = quotes.filter((quote) => {
      return quote._id != deleteId;
    });
    setQuotes(amendedQuotes);
    setDeleteId("");
    setModalCover(false);
    setDeleteForm(false);
  };

  return (
    <>
      <Header />
      <CreateQuoteForm
        createSubmit={handleCreateSubmit}
        newQuote={newQuote}
        setNewQuote={setNewQuote}
        newQuoter={newQuoter}
        setNewQuoter={setNewQuoter}
      />
      <QuotesHeading />
      {fetchError && <h2>{fetchError}</h2>}
      <QuotesList
        quotesList={quotes}
        showEditForm={showEditForm}
        showDeleteForm={showDeleteForm}
      />
      {modalCover && <ModalCover />}
      {showReload && <ReloadButton reloadList={handleReload} />}
      {editForm && (
        <EditQuoteForm
          editedQuote={editedQuote}
          setEditedQuote={setEditedQuote}
          editedQuoter={editedQuoter}
          setEditedQuoter={setEditedQuoter}
          cancelEdit={cancelEdit}
          confirmEdit={confirmEdit}
        />
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
