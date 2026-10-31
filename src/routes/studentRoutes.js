const express = require('express');
const { body } = require('express-validator');
const controller = require('../utils/studentController');

const router = express.Router();

// Validation rules for student data
const rules = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 60 })
    .withMessage('Name must contain 2 to 60 characters.'),

  body('email')
    .trim()
    .isEmail()
    .withMessage('Enter a valid email address.'),

  body('prn')
    .trim()
    .matches(/^\d{12}$/)
    .withMessage('PRN must contain exactly 12 digits.'),

  body('mobile')
    .trim()
    .matches(/^[6-9]\d{9}$/)
    .withMessage('Mobile must be 10 digits and start with 6, 7, 8, or 9.'),

  body('course')
    .isIn(['B.Tech', 'M.Tech', 'BCA', 'MCA'])
    .withMessage('Select a valid course.')
];

// CREATE - Add a new student
router.post('/', rules, controller.createStudent);

// READ - Get all students
router.get('/', controller.getAllStudents);

// READ - Get a student by ID
router.get('/:id', controller.getStudentById);

// UPDATE - Update student details
router.put('/:id', rules, controller.updateStudent);

// DELETE - Delete a student
router.delete('/:id', controller.deleteStudent);

module.exports = router;
