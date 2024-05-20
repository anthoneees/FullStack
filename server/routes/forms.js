const { Router } = require("express");
const tryoutFormModel = require("../schemas/tryoutForm");
const openFormModel = require("../schemas/opengymForm");
const { query, validationResult, body } = require("express-validator");

const router = Router();

router.post(
  "/api/mongo/tryout",
  body()
    .isString()
    .notEmpty()
    .isLength({ min: 2, max: 20 })
    .withMessage("between 3-10 characters")
    .withMessage("must not be empty")
    .withMessage("not String"),
  async (req, res) => {
    const result = validationResult(req);
    console.log(result);
    const { body } = req;
    const newForm = new tryoutFormModel(body);
    try {
      const savedForm = await newForm.save();
      return res.status(201).send(savedForm);
    } catch (err) {
      console.log(err);
      return res.sendStatus(400);
    }
  }
);

router.post("/api/mongo/opengym", async (req, res) => {
  const { body } = req;
  const newForm = new openFormModel(body);
  try {
    const savedForm = await newForm.save();
    return res.status(201).send(savedForm);
  } catch (err) {
    console.log(err);
    return res.sendStatus(400);
  }
});

module.exports = router;
