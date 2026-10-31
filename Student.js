const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name is required'], trim: true, minlength: 2, maxlength: 60 },
  email: { type: String, required: true, trim: true, lowercase: true, unique: true, match: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/ },
  prn: { type: String, required: true, trim: true, unique: true, match: /^\\d{12}$/ },
  mobile: { type: String, required: true, trim: true, match: /^[6-9]\\d{9}$/ },
  course: { type: String, required: true, enum: ['B.Tech', 'M.Tech', 'BCA', 'MCA'] }
}, { timestamps: true });
module.exports = mongoose.model('Student', studentSchema);
