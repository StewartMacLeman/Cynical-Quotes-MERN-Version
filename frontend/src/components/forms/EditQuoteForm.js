import React from "react";

const EditQuoteForm = (props) => {
  return (
    <form className="editModal" onSubmit={props.confirmEdit}>
      <p>Please make the required adjustments.</p>
      <div className="quoteAndQuoterCont">
        <div className="quoteCont">
          <label htmlFor="quoteEdit">Quote:</label>
          <input
            type="text"
            id="quoteEdit"
            autoComplete="off"
            autoFocus
            value={props.editedQuote}
            onChange={(e) => props.setEditedQuote(e.target.value)}
          />
        </div>

        <div className="quoterCont">
          <label htmlFor="quoterEdit">Quoter:</label>
          <input
            type="text"
            id="quoterEdit"
            autoComplete="off"
            value={props.editedQuoter}
            onChange={(e) => props.setEditedQuoter(e.target.value)}
          />
        </div>
      </div>

      <button type="button" className="delete" onClick={props.cancelEdit}>
        Cancel
      </button>
      <button type="submit">Click to Update!</button>
    </form>
  );
};

export default EditQuoteForm;
