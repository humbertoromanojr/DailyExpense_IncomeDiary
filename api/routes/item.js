const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const schema = mongoose.Schema;

const schemaItems = new schema({
  idAdd: String,
  name: String,
  description: String,
  value: String,
});

const ModelItems = mongoose.model("add", schemaItems);
module.exports = router;

router.get("/example", (req, res) => {
  res.end("Test the route Add");
});

router.post("/addItem", (req, res) => {
  const newAdd = new ModelItems({
    id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    value: req.body.value,
  });
  newAdd
    .save()
    .then((savedItem) => {
      res.status(201).json({
        success: true,
        message: "Item added successfully",
        data: savedItem,
      });
    })
    .catch((err) => {
      console.error("Erro ao salvar:", err);
      res.status(500).json({
        success: false,
        message: "Item NOT added successfully",
        error: err.message,
      });
    });
});

router.get("/myList", async (req, res) => {
  try {
    const docs = await ModelItems.find({});

    res.json({
      success: true,
      count: docs.length,
      data: docs,
    });
  } catch (err) {
    console.error("Erro ao buscar itens:", err);
    res.status(500).json({
      success: false,
      error: "Item NOT find successfully",
      message: err.message,
    });
  }
});

router.post("/edititem", async (req, res) => {
  try {
    const docs = await ModelItems.find({ _id: req.body.iditem });

    res.json({
      success: true,
      count: docs.length,
      data: docs,
    });
  } catch (err) {
    console.error("Erro ao buscar itens:", err);
    res.status(500).json({
      success: false,
      error: "Item NOT find successfully",
      message: err.message,
    });
  }
});

router.post("/updateitem", async (req, res) => {
  try {
    const docs = await ModelItems.findOneAndUpdate(
      { _id: req.body.id },
      {
        name: req.body.name,
        description: req.body.description,
        value: req.body.value,
      },
      { new: true },
    );

    if (!docs) {
      return res.status(404).json({
        success: false,
        error: "Item não encontrado",
        data: null,
      });
    }

    res.json({
      success: true,
      data: docs,
    });
  } catch (err) {
    console.error("Erro ao updated itens:", err);
    res.status(500).json({
      success: false,
      error: "Item NOT updated successfully",
      message: err.message,
    });
  }
});
