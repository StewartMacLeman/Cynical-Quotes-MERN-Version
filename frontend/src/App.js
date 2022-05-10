import React from "react";
import Header from "./components/Header";
import CreateQuoteForm from "./components/forms/CreateQuoteForm";
import QuotesHeading from "./components/QuotesHeading";
import QuotesList from "./components/QuotesList";

const App = () => {

  const testData = [
    {
      _id: "quote_1",
      quote: "All you need in life is ignorance and confidence and then succcess is sure.",
      quoter: "Mark Twain"
    },
    {
      _id: "quote_2",
      quote: "Life is one long process of getting tired.",
      quoter: "Samuel Butler"
    },
    {
      _id: "quote_3",
      quote: "Don't take life too seriously - you will never get out of it alive",
      quoter: "Elbert Hubbard"
    },
  ];

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    console.log("The submit button was clicked!");
  }

  return (
    <>
      <Header />
      <CreateQuoteForm createSubmit={handleCreateSubmit}/>
      <QuotesHeading />
      <QuotesList quotesList={testData} />
    </>
  );
};

export default App;
