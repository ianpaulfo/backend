const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); // -> npm i jsonwebtoken if not done so already

//set up the Users object with the helper functions and the secret object
const Users = require('../users/user-model');
const secrets = require('../api/secret');


/** ENDPOINTS */

//Register User
router.post('/register', (req, res) => {
    let user = req.body;

    const rounds = process.env.HASH_ROUNDS || 8;

    const hash = bcrypt.hashSync(user.password, rounds);

    user.password = hash;

    Users.insert(user)
        .then(saved => {
            res.status(201).json({ status: 201, message: `Welcome ${user.username}`, hash});
        })
        .catch(error => {
            res.status(500).json({ errorMessage: error.message});
        });
});

//Login
router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
        .first()
        .then(user => {
            console.log('then', user)
            if (user && bcrypt.compareSync(password, user.password)) {
                // sign token
                const token = generateToken(user); // new line

                // send the token
                res.status(200).json({
                    id: user.id,
                    token, // added token as part of the response sent
                    message: `Welcome ${user.username}!`,
                });
            } else {
                console.log(user, username, password);
                res.status(401).json({ message: "Invalid Credentials" });
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.get('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy(error => {
            if (error) {
                res.status(500).json({
                    message:
                        "you can checkout any time you like, but you can never leave!!!!!",
                });
            } else {
                res.status(200).json({ message: "logged out" });
            }
        });
    } else {
        res.status(200).end();
    }
});

function generateToken(user) {
    //the data
    const payload = {
        subject: user.id,
        username: user.username,
    };
    const secret = secrets.jwtSecret;
    const options = {
        expiresIn: '1d',
    };
    return jwt.sign(payload, secret, options);
}
//export
module.exports = router