const express = require('express')
const router = express.Router();
const medicine = require('../models/medicine')

router.get('/medicines', (req, res) => {
    medicine.find({})
        .sort("-createdAt")
        .then(medicines => {
            res.json(medicines);
        })
        .catch((e) => console.log(e));
})

router.post('/medicines/:id', (req, res) => {
    medicine.findById(req.params.id)
        .then(fetchedmedicine => {
            if (!fetchedmedicine) return res.json({ error: "not found !" });
            res.json(fetchedmedicine);
        })
        .catch((e) => console.log(e));
})

router.post("/medicines", (req, res) => {
    const newMedicine = new medicine(req.body);
    newMedicine
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

router.put("/medicines/:id", (req, res) => {
    medicine.findOneAndReplace({ _id: req.params.id }, req.body, null, (e, medicine) => {
        if (e) {
            return res.status(400).json({
                error: "medicine cannot be updated !"
            })
        }
        return res.json(medicine)
    })
});

router.delete("/medicines/:id", (req, res) => {
    medicine.findById(req.params.id, (err, blog) => {
        if (err) return res.status(500).send(err);
        if (blog) {
            blog.remove(() => {
                return res.json(blog);
            });
        }
    });
});

module.exports = router