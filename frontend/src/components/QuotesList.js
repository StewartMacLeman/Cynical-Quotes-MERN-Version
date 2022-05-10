import React from "react";
import QuoteItem from "./QuoteItem";

const QuotesList = ({ quotesList, showEditForm, showDeleteForm }) => {
  return (
    <ul className="quotesUlCont">
      {quotesList.map((item) => {
        return (
          <QuoteItem
            key={item._id}
            _id={item._id}
            quote={item.quote}
            quoter={item.quoter}
            showEditForm={showEditForm}
            showDeleteForm={showDeleteForm}
          />
        );
      })}
    </ul>
  );
};

export default QuotesList;
