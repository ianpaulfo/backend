const router = require('express').Router();

const Users = require('./user-model');

router.get('/', (req, res) => {
    console.log('token', req.token);
    Users.find()
    .then(users => {
        res.json({users});
    })
    .catch(err => res.send(err));
});

router.get('/:id', (req, res) => {
    Users.findById(req.params.id)
        .then(user => {
            console.log(res)
            res.status(200).json(user)
        })
        .catch(err => {
            console.log(err)
        })
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Users.update(id, changes)
        .then(updated => {
            res.status(200).json(updated);
        })
        .catch(err => {
            console.log(err);
        });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Users.remove(id)
        .then(axed => {
            res.status(200).json(axed)
        })
        .catch(err => {
            console.log(err);
        });
});

//export
module.exports = router;