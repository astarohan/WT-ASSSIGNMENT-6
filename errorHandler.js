module.exports = (err, req, res, next) => {
  console.error(err);
  if (err.name === 'ValidationError') return res.status(400).json({ success: false, message: 'Database validation failed', errors: Object.values(err.errors).map(e => e.message) });
  res.status(500).json({ success: false, message: 'Internal server error' });
};
