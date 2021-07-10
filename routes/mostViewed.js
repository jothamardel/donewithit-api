const express = require('express');
const router = express.Router();
const mostViewedStore = require('../store/mostViewed');


router.get('/', (req, res) => {
	const mostViewed = mostViewedStore.getAllMostViewed();
	res.send(mostViewed);
});

module.exports = router;