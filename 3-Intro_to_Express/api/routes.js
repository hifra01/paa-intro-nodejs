const express = require("express")

const router = express.Router()

router.get('/persons', (req, res) => {
    return res.json(
        {
            ok: true,
            data: [
                "John",
                "Alice",
                "Robert",
                "Bob"
            ]
        }
    )
})

module.exports = router
