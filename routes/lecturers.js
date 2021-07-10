const express =  require('express');
const router = express.Router();
const lecturersStore = require('../store/lecturers');


router.get('/', (req, res) => {
	const lecturers = lecturersStore.getAllLecturers();
	res.send(lecturers);
});

module.exports = router;