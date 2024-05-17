const { Router } = require("express");
const formModel = require("../schemas/tryoutForm");

const router = Router();

router.post("/api/forms", async (req, res) => {
  const { body } = req;
  console.log(req.body);
  const newForm = new formModel(body);
  try {
    const savedForm = await newForm.save();
    return res.status(201).send(savedForm);
  } catch (err) {
    console.log(err);
    return res.sendStatus(400);
  }
});

export default router;