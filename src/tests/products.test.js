let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
const URL = `http://localhost:8080`;

chai.use(chaiHttp);

describe('POST Insert a product', () => {
    it('should insert a product', (done) => {
        chai.request(URL)
            .post('/api/product/new')
            .send({ name: 'product-test', price: 10, photo: 'url-test' })
            .end((_err, res) => {
                expect(res).to.have.status(201);
                done();
            });
    });
});

describe('GET List all products', () => {
    it('should return all products', (done) => {
        chai.request(URL)
            .get('/api/product')
            .end((_err, res) => {
                expect(res).to.have.status(200);
                expect('Content-Type', /json/);
                done();
            });
    });
});

describe('GET Find a product', () => {
    it('should return a product', (done) => {
        chai.request(URL)
            .get('/api/product/62788733c080de577e477608')
            .end((_err, res) => {
                expect(res).to.have.status(200);
                expect('Content-Type', /json/);
                done();
            });
    });
});

describe('PUT Update a product', () => {
    it('should update a product', (done) => {
        chai.request(URL)
            .put('/api/product/update/62dc4dd688debb23d72f642f')
            .send({ price: 20.5 })
            .end((_err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });
});
