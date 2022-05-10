import React from "react";

const CreateQuoteForm = ({
  createSubmit,
  newQuote,
  newQuoter,
  setNewQuote,
  setNewQuoter,
}) => {
  return (
    <form className="form" onSubmit={createSubmit}>
      <h3>Submit another quote.</h3>
      <div className="quoteAndQuoterCont">
        <div className="quoteCont">
          <label htmlFor="quote">Quote:</label>
          <input
            type="text"
            id="quote"
            autoComplete="off"
            autoFocus
            value={newQuote}
            onChange={(e) => setNewQuote(e.target.value)}
          />
        </div>

        <div className="quoterCont">
          <label htmlFor="quoter">Quoter:</label>
          <input
            type="text"
            id="quoter"
            autoComplete="off"
            value={newQuoter}
            onChange={(e) => setNewQuoter(e.target.value)}
          />
        </div>
      </div>

      <button type="submit">Add your quote!</button>
    </form>
  );
};

export default CreateQuoteForm;
