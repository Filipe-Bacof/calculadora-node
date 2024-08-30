const request = require('supertest');
const app = require('../src/server');

describe('Calculator API', () => {
    test('POST /add should add two numbers', async () => {
        const response = await request(app).post('/api/add').send({ a: 5, b: 3 });
        expect(response.statusCode).toBe(200);
        expect(response.body.result).toBe(8);
    });

    test('POST /subtract should subtract two numbers', async () => {
        const response = await request(app).post('/api/subtract').send({ a: 5, b: 3 });
        expect(response.statusCode).toBe(200);
        expect(response.body.result).toBe(2);
    });

    test('POST /multiply should multiply two numbers', async () => {
        const response = await request(app).post('/api/multiply').send({ a: 5, b: 3 });
        expect(response.statusCode).toBe(200);
        expect(response.body.result).toBe(15);
    });

    test('POST /divide should divide two numbers', async () => {
        const response = await request(app).post('/api/divide').send({ a: 6, b: 3 });
        expect(response.statusCode).toBe(200);
        expect(response.body.result).toBe(2);
    });

    test('POST /divide should return 400 when dividing by zero', async () => {
        const response = await request(app).post('/api/divide').send({ a: 6, b: 0 });
        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe('Division by zero is not allowed');
    });

    test('POST /power should return the power of a number', async () => {
        const response = await request(app).post('/api/power').send({ a: 2, b: 3 });
        expect(response.statusCode).toBe(200);
        expect(response.body.result).toBe(8);
    });

    test('POST /root should return the root of a number', async () => {
        const response = await request(app).post('/api/root').send({ a: 16, b: 2 });
        expect(response.statusCode).toBe(200);
        expect(response.body.result).toBe(4);
    });

    test('POST /root should return 400 when root index is zero', async () => {
        const response = await request(app).post('/api/root').send({ a: 16, b: 0 });
        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe('Root with index zero is not allowed');
    });
});