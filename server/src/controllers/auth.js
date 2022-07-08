const { user, profile } = require("../../models");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//======================= REGISTER ======================
exports.register = async (req, res) => {
  try {
    let data = req.body;

    if (!data.role) {
      data = {
        ...data,
        role: "customer",
      };
    }

    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required().min(8),
      role: Joi.string(),
    });

    const { error } = schema.validate(data);

    if (error) {
      return res.status(400).send({
        error: {
          message: error.details[0].message,
        },
      });
    }

    const emailSiap = await user.findOne({
      where: {
        email: data.email,
      },
    });

    if (emailSiap) {
      return res.send({
        error: {
          message: `Akun Sudah Terdaftar`,
        },
      });
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const newUser = await user.create({
      name: data.name,
      email: data.email,
      password: hashedPassword,
      role: data.role,
    });

    const payload = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    };

    await profile.create({
      gender: null,
      phone: null,
      address: null,
      avatar: null,
      idUser: newUser.id,
    });

    const token = jwt.sign(payload, process.env.SECRET_KEY);

    res.status(201).send({
      status: "Success",
      data: {
        user: {
          name: newUser.name,
          email: newUser.email,
          token: token,
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "Failed",
      message: "Server Error",
    });
  }
};

//======================== LOGIN =========================
exports.login = async (req, res) => {
    try {
        const data = req.body

        const schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required(),
          });

        const { error } = schema.validate(data)

        if (error) {
            return res.status(400).send({
                error: {
                    message: error.details[0].message,
                },
            })
        }

        const adaAkun = await user.findOne({
            where: {
                email: data.email,
            },
        })

        if (!adaAkun) {
            return res.status(400).send({
                error: {
                    message: `Email Atau Kata Sandi Tidak Cocok`
                }
            })
        }

        const isValid = await bcrypt.compare(data.password, adaAkun.password)

        if (!isValid) {
            return res.status(400).send({
                error: {
                    message: `Email Atau Kata Sandi Tidak Cocok`
                }
            })
        }

        const payload = {
            id: adaAkun.id,
            name: adaAkun.name,
            email: adaAkun.email,
            role: adaAkun.role,
        }

        const token = jwt.sign(payload, process.env.SECRET_KEY)

        res.send({
            status: "Success",
            data: {
                user: {
                    id: adaAkun.id,
                    name: adaAkun.name,
                    email: adaAkun.email,
                    role: adaAkun.role,
                    token,
                },
            },
        })
    } catch (error) {
        console.log(error);
        res.send({
            status: "Failed",
            message: "Server Error"
        })
    }
}

//======================== INSPECT =====================
exports.checkAuth = async (req, res) => {
    try {
        const id = req.user.id

        const dataUser = await user.findOne({
            where: {
                id,
            },
            attributes: {
                exclude: ["createAt", "updateAt", "password"]
            },
        })

        if (!dataUser) {
            return res.status(400).send({
                status: "Failed",
            })
        }

        res.send({
            status: "Success Woi",
            data: {
                user: {
                    id: dataUser.id,
                    name: dataUser.name,
                    email: dataUser.email,
                    role: dataUser.role,
                }
            }
        })

    } catch (error) {
        console.log(error);
        res.status({
            status: "Failed",
            message: "Server Error",
        })
    }
}