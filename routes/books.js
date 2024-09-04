const express = require("express");
const router = express.Router();

const {InsertBook,updateBook,deleteBook,getBook,getBooks} = require("../controllers/bookController");
// Import Controller

// APIs Routing Config

router.post('/books',InsertBook);
router.put('/books/:id',updateBook);
router.delete('/books/:id',deleteBook)
router.get('/books/',getBooks);
router.get('/books/:genre',getBook);
// Export router

module.exports = router;
