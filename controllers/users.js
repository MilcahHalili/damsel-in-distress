const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
  signup, 
  login, 
  getUser, 
  addTrigger, 
  removeTrigger
};

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    {user}, // data payload
    SECRET,
    {expiresIn: '24h'}
  );
}

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    const token = createJWT(user)
    res.json({ token });
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(401).json({err: 'bad credentials'});
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({token});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

async function getUser(req, res){
  try {
    const user = await User.findById(req.user._id)
    return res.json(user)
  } catch (err) {
    return res.status(401).json(err)
  }
}

async function addTrigger(req, res){
  try {
    const user = await User.findById(req.user._id)
    user.triggerwords.push(req.body.trigger)
    user.save()
    return res.json(user)
  } catch (err) {
    return res.status(401).json(err)
  }
}


async function removeTrigger(req, res){
  try {
    await User.findById(req.user._id).update({$pull: { triggerwords: req.body.trigger }})
    const user = await User.findById(req.user._id)
    user.save()
    return res.json(user)
  } catch (err) {
    return res.status(401).json(err)
  }
}