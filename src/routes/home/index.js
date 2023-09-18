"use strict"

const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl');

router.get('/genre', ctrl.output.genre)
router.get('/result', ctrl.output.result)

router.post('/genre', ctrl.process.genre)

module.exports= router;