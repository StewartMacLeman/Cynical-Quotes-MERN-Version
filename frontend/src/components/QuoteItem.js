import React from "react";

const QuoteItem = (props) => {
  return (
    <li>
      <div className="quotesDiv">
        <span className="italics quote">{props.quote}</span>
        <span className="bold quoter">{props.quoter}</span>
      </div>
      <div className="quoteButtons">
        <button type="button" className="edit" value={props._id} onClick={props.showEditForm}>
          Edit
        </button>
        <button type="button" className="delete" value={props._id} onClick={props.showDeleteForm}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default QuoteItem;
