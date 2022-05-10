import React from "react";

const CreateQuoteForm = ({createSubmit}) => {
  return (
    <form className="form" onSubmit={createSubmit}>
      <h3>Submit another quote.</h3>
      <div className="quoteAndQuoterCont">
        <div className="quoteCont">
          <label htmlFor="quote">Quote:</label>
          <input type="text" id="quote" autoComplete="off" autoFocus />
        </div>

        <div className="quoterCont">
          <label htmlFor="quoter">Quoter:</label>
          <input type="text" id="quoter" autoComplete="off" autoFocus />
        </div>
      </div>

      <button type="submit">Add your quote!</button>
    </form>
  );
};

export default CreateQuoteForm;
