const express = require('express');

const router = express.Router();



const users = [
    {
    "id": 1,
    "name": "User-1"
    },
    {
    "id": 2,
    "name": "User-2"
    },
    {
    "id": 3,
    "name": "User-3"
    }
    ];

router.get('/users',(req, res) =>{
      res.json({Users: users});
})

module.exports = router;