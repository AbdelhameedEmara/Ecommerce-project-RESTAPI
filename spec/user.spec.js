const supertest = require('supertest') // to test reqestes
const app = require('../index')
let request = supertest(app)

describe("testing the users ",function(){
    xit("adding new. user", async function(){
        let res = await request.post('/users/register').send({fullName:'omar', username:'anas', email:'xxx@gmail', password:'12345'})
        expect(res.statusCode).toEqual(201)
        expect(res.body).toEqual(jasmine.objectContaining({username:'anas'}))
    })


    it("login", async function(){
        let res = await request.post('/users/login').send({username:'anas', password:"12345"})
        expect(res.statusCode).toEqual(200)
        // expect(res.body).toEqual(jasmine.any(String))
    })


    it("getting user data", async function(){
        let res = await request.get('/users/6373af598c38b338db8a36fb').send()
        expect(res.statusCode).toEqual(401)
    })
})