const express = require("express");
const { auth } = require("../middlewares/auth.js");
const { register,
        login,
        checkAuth } = require("../controllers/auth");
const { getBooks,
        addBooks,
        getBook,
        updateBooks,
        promoBooks, } = require("../controllers/book");
const { uploadFiles } = require("../middlewares/uploadFiles.js");

const router = express.Router();

//=== Auth ===
router.post("/register", register);
router.post("/login", login)
router.get("/check-auth", auth, checkAuth);

//=== Book ===
router.get("/books", getBooks)
router.get("/book/:id",auth, getBook)
router.get("/promo-books", promoBooks);
router.patch("/book/:id", auth, uploadFiles("bookPdf", "bookImg"), updateBooks);
router.post("/book", auth, uploadFiles("bookPdf", "bookImg"), addBooks)


module.exports = router 