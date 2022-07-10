const express = require("express");
const { auth } = require("../middlewares/auth.js");
const { uploadFiles } = require("../middlewares/uploadFiles.js");
const { uploadImg } = require("../middlewares/uploadFile.js"); // One Image for Profile

const { register,
        login,
        checkAuth } = require("../controllers/auth");

const { getBooks,
        addBooks,
        getBook,
        updateBooks,
        promoBooks,
        deleteBook, } = require("../controllers/book");

const { addCart,
        getCart,
        deleteCart,} = require ("../controllers/cart")
const { getProfile, updateProfile } = require("../controllers/profile.js");

const {
    addTransaction,
    getTrxs,
    notification,
  } = require("../controllers/transaction.js");

const {
    getPurchased,
    getOnePurchased,
  } = require("../controllers/purchased.js");

const router = express.Router();

//=== Auth ===
router.post("/register", register);
router.post("/login", login)
router.get("/check-auth", auth, checkAuth);

//=== Book ===
router.get("/books", getBooks)
router.get("/book/:id",auth, getBook)
router.get("/promo-books", promoBooks);
router.delete("/delete-book/:id", deleteBook)
router.patch("/book/:id", auth, uploadFiles("bookPdf", "bookImg"), updateBooks);
router.post("/book", auth, uploadFiles("bookPdf", "bookImg"), addBooks)


//== Cart ===
router.post("/cart", addCart)
router.delete("/cart/:id", deleteCart)
router.get("carts", getCart)

//== Profile ==
router.get("/profile", auth, getProfile);
router.patch("/profile", auth, uploadImg("avatar"), updateProfile);

//== Transactions ==
router.post("/transaction", auth, addTransaction);
router.get("/transactions", auth, getTrxs);
router.post("/notification", notification);

//== Purchased Book ==
router.get("/purchased-books", auth, getPurchased);
router.get("/purchased/:id", auth, getOnePurchased);

module.exports = router 