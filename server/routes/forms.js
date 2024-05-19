const { Router } = require("express");
const tryoutFormModel = require("../schemas/tryoutForm");
const openFormModel = require("../schemas/opengymForm");
const { query } = require("express-validator")

const router = Router();

router.post("/api/mongo/tryout", query('body').isString().notEmpty(), async (req, res) => {
  const { body } = req;
  console.log(req.body);
  const newForm = new tryoutFormModel(body);  
  try {
    const savedForm = await newForm.save();
    return res.status(201).send(savedForm);
  } catch (err) {
    console.log(err);
    return res.sendStatus(400);
  }
});

router.post("/api/mongo/opengym", async (req, res) => {
  const { body } = req;
  console.log(req.body);
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