var frisby = require('frisby');
frisby.create('Add Customer Data')
    .get('http://localhost:8001/api/updateCustomer?name=Corey&address=6533%20Scottsdale%20Way&zip=75034&country=us&id=27')
    .expectStatus(200)
    .toss();