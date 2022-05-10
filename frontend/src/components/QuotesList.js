import React from "react";
import QuoteItem from "./QuoteItem";

const QuotesList = ({ quotesList }) => {
  return (
    <ul className="quotesUlCont">
      {quotesList.map((item) => {
        return (
          <QuoteItem
            key={item._id}
            _id={item._id}
            quote={item.quote}
            quoter={item.quoter}
          />
        );
      })}
    </ul>
  );
};

export default QuotesList;
