const db = require('../data/db-config');

module.exports = {
    find,
    findBy,
    findById,
    insert,
    update,
    remove
};

function find() {
    return db("users");
}

function findById(id) {
    console.log(id)
    return db("users")
        .select("id", "username", "password")
        .where({ "users.id": id })
        .first();

}

function findBy(filter) {
    console.log(filter)
    return db("users")
        .select("id", "username", "password")
        .where(filter)
        .first();

}

async function insert(user) {
    const [id] = await db('users').insert(user, 'id');

    return findById(id);
}

function update(id, changes) {
    return db("users")
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db("users")
        .where("id", id)
        .del();
}