const db = require('../data/db-config');
const Users = require('./user-model');



describe('users model', function () {
    beforeEach(async () => {
        await db('users').truncate();
    });

    describe('insert()', function () {
        it('should add user to db', async function () {
            await Users.insert({ username: "Ian", email: "ian@email.com", password: "pass6" });

            const users = await db('users')
            expect(users).toHaveLength(1);
        })
    })

    describe('find()', function () {
        beforeEach(async () => {
            await db('users').truncate();
        });
        it('should add user to db', async function () {
            await Users.insert({ username: "Ian", email: "ian@email.com", password: "pass1" });
            const users = await db('users')
            expect(users).toHaveLength(1);

            let allUsers = await Users.find();
            expect(allUsers).toEqual([{ id: 1, username: "Ian", email: "ian@email.com", password: "pass1" }])
        })
    })
})