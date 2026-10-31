const { validationResult } = require('express-validator');
const mongoose = require('mongoose');
const Student = require('../models/Student');
const errorsFor = req => validationResult(req).array().map(e => e.msg);
const validId = id => mongoose.Types.ObjectId.isValid(id);

exports.createStudent = async (req, res, next) => {
  try {
    const errors = errorsFor(req);
    if (errors.length) return res.status(400).json({ success: false, message: 'Validation failed', errors });
    const student = await Student.create(req.body);
    return res.status(201).json({ success: true, message: 'Student created successfully', data: student });
  } catch (err) {
    if (err.code === 11000) return res.status(400).json({ success: false, message: 'Email or PRN already exists' });
    next(err);
  }
};
exports.getAllStudents = async (req, res, next) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: students.length, data: students });
  } catch (err) { next(err); }
};
exports.getStudentById = async (req, res, next) => {
  try {
    if (!validId(req.params.id)) return res.status(400).json({ success: false, message: 'Invalid student ID format' });
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ success: false, message: 'Student not found' });
    res.status(200).json({ success: true, data: student });
  } catch (err) { next(err); }
};
exports.updateStudent = async (req, res, next) => {
  try {
    const errors = errorsFor(req);
    if (errors.length) return res.status(400).json({ success: false, message: 'Validation failed', errors });
    if (!validId(req.params.id)) return res.status(400).json({ success: false, message: 'Invalid student ID format' });
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!student) return res.status(404).json({ success: false, message: 'Student not found' });
    res.status(200).json({ success: true, message: 'Student updated successfully', data: student });
  } catch (err) {
    if (err.code === 11000) return res.status(400).json({ success: false, message: 'Email or PRN already exists' });
    next(err);
  }
};
exports.deleteStudent = async (req, res, next) => {
  try {
    if (!validId(req.params.id)) return res.status(400).json({ success: false, message: 'Invalid student ID format' });
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ success: false, message: 'Student not found' });
    res.status(200).json({ success: true, message: 'Student deleted successfully', data: student });
  } catch (err) { next(err); }
};
