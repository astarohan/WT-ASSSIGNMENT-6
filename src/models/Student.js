const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Student name is required'],
      trim: true,
      minlength: 2,
      maxlength: 60
    },

    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true
    },

    prn: {
      type: String,
      required: [true, 'PRN is required'],
      unique: true,
      match: [/^\d{12}$/, 'PRN must contain exactly 12 digits']
    },

    mobile: {
      type: String,
      required: [true, 'Mobile number is required'],
      match: [/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number']
    },

    course: {
      type: String,
      required: [true, 'Course is required'],
      enum: ['B.Tech', 'M.Tech', 'BCA', 'MCA']
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Student', studentSchema);
