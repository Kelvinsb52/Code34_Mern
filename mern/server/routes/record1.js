import express from "express";

import db from "../db/connection.js"

import { ObjectId} from "mongodb";

const router2 = express.Router();

router2.get("/", async (req, res) => {
    let collection = await db.collection("records2");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});

router2.get("/:id", async (req, res) => {
    let collection = await db.collection("records2");
    let query = { _id: new ObjectId(req.params.id)};
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});

router2.post("/", async (req, res) => {
    try{
        let newDocument = {
            subject: req.body.subject,
            hours: req.body.hours,
            date: req.body.date
        };
        let collection = await db.collection("records2");
        let result = await collection.insertOne(newDocument);
        res.send(result).status(204);
    } catch (err){
        console.error(err);
        res.status(500).send("Error adding record")
    }
});


router2.patch("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };
        const updates = {
            $set: {
                subject: req.body.subject,
                hours: req.body.hours,
                date: req.body.date,
            },
        };

        let collection = await db.collection("records2");
        let results = await collection.updateOne(query, updates);
        res.send(result).status(200);
    } catch(err){
        console.error(err);
        res.status(500).send("Error updating record");
    }
});

router2.delete("/:id", async (req, res) => {
    try{
        const query = { _id: new ObjectId(req.params.id)};
        const collection = db.collection("records2");
        let results = await collection.deleteOne(query);

        res.send(results).status(200);
    } catch(err){
        console.error(err);
        res.status(500).send("Error deleting record")
    }
})

export default router2;