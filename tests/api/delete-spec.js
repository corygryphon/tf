var frisby = require('frisby');
frisby.create('Add Customer Data')
    .get('http://localhost:8001/api/delCustomer?id=23')
    .expectStatus(200)
    .toss();