const express = require('express')
const router = express.Router();
const request = require('../models/Request')

router.get('/request', (req, res) => {
    request.find({})
        .sort("-createdAt")
        .then(medicines => {
            res.json(medicines);
        })
        .catch((e) => console.log(e));
})

router.post('/request/:id', (req, res) => {
    request.findById(req.params.id)
        .then(fetchedmedicine => {
            if (!fetchedmedicine) return res.json({ error: "not found !" });
            res.json(fetchedmedicine);
        })
        .catch((e) => console.log(e));
})

router.post("/request", (req, res) => {
    const newRequest = new request(req.body);
    newRequest
        .save()
        .then(savedMedicine => {
            const { id, name, price, desc, image, tags } = savedMedicine

            res.json({
                id: id.toString(),
                name,
                price,
                desc,
                image,
                tags
            });
        })
        .catch((e) => console.log(e));
});

router.delete("/request/:id", (req, res) => {
    request.findById(req.params.id, (err, blog) => {
        if (err) return res.status(500).send(err);
        if (blog) {
            blog.remove(() => {
                return res.json(blog);
            });
        }
    });
});

module.exports = router