const jwt = require('jsonwebtoken');
const User = require('../../models/user');

module.exports={
    create,
    login,
    checkToken
};

async function create(req, res) {
    try {
        // Add the user to the db
        const user = await User.create(req.body);
        const token = createJWT(user);
        res.json(token);
    } catch (err) {
        console.error('Error during user creation:', err); // Log the specific error
        res.status(400).json({ error: 'Failed to create user.' });
    }
}

async function login(req, res) {
    try {
      console.log(req.body);
      const user = await User.findOne({ email: req.body.email });
      console.log(user);
      if (!user) throw new Error();
      const match = await bcrypt.compare(req.body.password, user.password);
      if (!match) throw new Error();
      res.json(createJWT(user));
    } catch {
      res.status(400).json("Bad Credentials");
    }
  }
  

/*--- Helper Functions ---*/

// creating a token
function createJWT(user) {
    return jwt.sign(
      // data payload
      { user },
      process.env.SECRET,
      { expiresIn: '24h' }
    );
}

function checkToken(req, res) {
    console.log("req.user", req.user);
    res.json(req.exp);
  }