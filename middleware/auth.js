// middleware/auth.js
const authenticate = (req, res, next) => {
  const apiKey = req.header('x-api-key');
  if (apiKey !== process.env.API_KEY) {
    return res.status(401).json({ message: 'Unauthorized: Invalid or missing API key' });
  }
  next();
};

module.exports = authenticate;
