import React from "react";

const QuoteItem = (props) => {
  return (
    <li>
      <div className="quotesDiv">
        <span className="italics">{props.quote}</span>
        <span className="bold">{props.quoter}</span>
      </div>
      <div className="quoteButtons">
        <button type="button" className="edit" value={props._id}>
          Edit
        </button>
        <button type="button" className="delete" value={props._id}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default QuoteItem;
