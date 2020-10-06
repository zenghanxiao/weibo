/**
 * @description jest server
 * @author zenghanxiao
 */

const request = require('supertest');
const server = require('../src/app').callback();

module.exports = request(server);