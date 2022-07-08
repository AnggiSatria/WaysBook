const { book } = require("../../models")
const { Op } = require("sequelize")

//== Promo Book
exports.promoBooks = async (req, res) => {
  try {
    let data = await book.findAll({
      where: {
        price: {
          [Op.lte]: 55000,
        },
      },
    });

    data = data.map((item) => {
      item.bookPdf = process.env.PATH_FILE_PDF + item.bookPdf;
      item.bookImg = process.env.PATH_FILE_IMG + item.bookImg;
      return item;
    });

    res.send({
      status: "success",
      data: {
        promoBooks: data,
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "Failed",
      message: "Error Fetching Promo Books",
    });
  }
};
//== Get All Book
exports.getBooks = async (req, res) => {
    try {
        let data = await book.findAll({
            raw: true,
            where: {
                price: {
                    //Operator than or equal operator ( >= ) lebih dari atau sama dengan
                    [Op.gte]: 10,
                    //Akan menampilkan data atau value yang lebih dari 10 atau sama dengan 10
                },
            },
            attributes: {
                exclude: ["createAt", "updateAt"],
            },
        })

        //Data yang di Map
        data = data.map((item) => {
            item.bookPdf = process.env.PATH_FILE_PDF + item.bookPdf
            item.bookImg = process.env.PATH_FILE_IMG + item.bookImg
            return item
        })

        res.send({
            status: "Success",
            data: {
                books: data,
            },
        })

    } catch (error) {
        console.log(error);
        res.send({
        status: "Failed",
        message: "Error Mengambil Semua Buku",
    });
    }
}
//== Get Book Id 
exports.getBook = async (req, res) => {
    try {
        const { id } = req.params

        let data = await book.findOne({
            raw: true,
            where: {
                id,
            },
            attributes: {
                exclude: ["createAt", "updateAt"],
            },
        })

        data = {
            ...data,
            bookPdf: process.env.PATH_FILE_PDF + data.bookPdf,
            bookImg: process.env.PATH_FILE_IMG + data.bookImg,
        }

        res.send({
            status: "Success",
            data: {
                book: data,
            },
        })        

    } catch (error) {
        res.send({
            status: "Failed",
            message: "Kesalahan Mengambil Buku",
          });
    }
}

//== Post Book
exports.addBooks = async (req, res) => {
    try {
        let data = {
            title: req.body.title,
            year: req.body.year,
            author: req.body.author,
            pages: req.body.pages,
            ISBN: req.body.ISBN,
            price: req.body.price,
            desc: req.body.desc,
            bookPdf: req.files.bookPdf[0].filename,
            bookImg: req.files.bookImg[0].filename,
        }

    let newBook = await book.create(data)

    let newBookData = await book.findOne({
        where: {
            id: newBook.id ,
        },
        attributes: {
            exclude: ["createAt", "updateAt"],
        },
    })

    res.send({
        status: "Success",
        data: {
            books: {
                ...newBookData.dataValues,
                bookPdf: process.env.PATH_FILE_PDF + data.bookPdf,
                bookImg: process.env.PATH_FILE_IMG + data.bookImg,
            },
        },
    }) 

    } catch (error) {
        console.log(error);
        res.send({
          status: "Failed",
          message: "Kesalahan Menambahkan Buku",
        });
    }
}

//== Update Book
exports.updateBooks = async (req, res) => {
    try {
        const { id } = req.params

        let data = {
            price: req.body.price,
        }

        let newBook = await book.update(data, {
            where: {
                id,
            },
        })

        let newBookData = await book.findOne({
            where: {
                id,
            },
            attributes: {
                exclude: ["createAt", "updateAt"],
            },
        })

        res.send({
          status: "Success",
          data,
        });
    } catch (error) {
        console.log(error);
        res.send({
          status: "Failed",
          message: "Kesalahan Update Buku",
        });
    }
}

//== Delete Book
exports.deleteBook = async (req, res) => {
    try {
        const { id } = req.params

        await book.destroy({
            where: {
                id,
            }
        })

        res.send({
            status: "Success",
            data,
          });


    } catch (error) {
         console.log(error);
        res.send({
          status: "Failed",
          message: "Kesalahan Hapus Buku",
        });
    }
}