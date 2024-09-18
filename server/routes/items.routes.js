const express = require('express');
const router = express.Router();
const { getAllItems, createItem } = require('../controllers');

router.get('/', getAllItems); 
router.post("/", createItem);

module.exports = router; 
