"use strict"

const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl');

router.get('/', ctrl.output.home)
router.get('/communities', ctrl.output.commLink)
router.get('/genre', ctrl.output.genre)
router.get('/result', ctrl.output.result)
router.get('/community', ctrl.output.community)

router.post('/genre', ctrl.process.genre)

module.exports= router;