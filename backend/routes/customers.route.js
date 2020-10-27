let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Student Model
let cutomerSchema = require('../models/Customers');

// CREATE Student
router.route('/new').post((req, res, next) => {
  cutomerSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// READ Students
router.route('/').get((req, res) => {
  cutomerSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Student
router.route('/edit/:id').get((req, res) => {
  cutomerSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Student
router.route('/update/:id').put((req, res, next) => {
  cutomerSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('updated successfully !')
    }
  })
})

// Delete Student
router.route('/delete/:id').delete((req, res, next) => {
  cutomerSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;