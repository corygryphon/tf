var frisby = require('frisby');
frisby.create('Add Customer Data')
    .get('http://localhost:8001/api/createCustomer?name=Cory&address=1305%20corona%20court&zip=75078&country=us')
    .expectStatus(201)
    .toss();