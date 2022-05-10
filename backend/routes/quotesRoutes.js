const express = require("express");
const router = express.Router();
const { MongoClient, ObjectId } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

router.get("/", async (req, res) => {
  let dbArray = null;
  try {
    await client.connect();
    dbArray = await client
      .db("cynical_quotes_React")
      .collection("quotes")
      .find()
      .toArray();
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
  res.status(200).json(dbArray);
});

router.post("/", async (req, res) => {
  const quote = req.body;
  try {
    await client.connect();
    await client.db("cynical_quotes_React").collection("quotes").insertOne(quote);
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
  res.status(200);
});

router.delete("/", async (req, res) => {
  const id = req.body.id;
  try {
    await client.connect();
    await client
      .db("cynical_quotes_React")
      .collection("quotes")
      .deleteOne({ _id: new ObjectId(id) });
  } catch (e) {
    console.log(e);
  } finally {
    client.close();
  }
  res.status(200);
});

router.put('/', async (req, res) => {
  let id = req.body.id;
  let editedQuote = req.body.quote_edit;
  let editedQuoter = req.body.quoter_edit;
  try {
    await client.connect();
    await client.db('cynical_quotes_React').collection('quotes').updateOne({_id: new ObjectId(id)},{ $set: {quote: editedQuote, quoter: editedQuoter}})
    
  } catch(e) {
    console.log(e)
  } finally {
    await client.connect();
  }
  res.status(200);
})

module.exports = router;
