import React from "react";

const DeleteQuoteForm = ({cancelDelete, confirmDelete}) => {
  return (
    <form className="deleteModal" onSubmit={confirmDelete}>
      <p>Are you sure you wish to delete?</p>
      <button type="button" className="delCancel" onClick={cancelDelete}>
        Cancel!
      </button>
      <button type="submit" className="delete">
        Delete!
      </button>
    </form>
  );
};

export default DeleteQuoteForm;
