const User= require('../models/User')
const bcrypt= require('bcrypt')
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const dotenv= require("dotenv")
dotenv.config();

exports.signupAuth = async (req, res) => {
  // Validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array()[0].msg });
  }
  const { username, email, password } = req.body;
  try {
    // Check if user exists
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: 'Email already exists', type: 'email' });
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // Create user
    user = new User({ username, email, password: hashedPassword });
    await user.save();
    // Create JWT token
    const payload = { user: { id: user.id } };
    jwt.sign(payload, process.env.jwtSecret, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.json({ token, message: 'Registered successfully' });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};
exports.loginAuth=async(req,res)=>{
      const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
       const { email, password } = req.body;
    try {
        // Check if the user exists
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Validate password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Generate JWT token
        const payload = {
            user: {
                id: user.id
            }
        };
        jwt.sign(payload,  process.env.jwtSecret, { expiresIn: 3600 }, 
        (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
          } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}