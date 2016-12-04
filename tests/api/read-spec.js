var frisby = require('frisby');
frisby.create('Get Customer Data')
    .get('http://0.0.0.0:8001/api/readCustomer?cid=3')
    .expectStatus(200)
    //.expectHeaderContains('content-type', 'text/html')
    .expectJSON('0', {
        NAME: function(val) { expect(val).toMatchOrBeNull("Colin"); }, // Custom matcher callback
        CUSTOMER_ID: 3,
        STREET_ADDRESS: "509 Charter Road",
        POSTAL_CODE: 90021,
        COUNTRY: "US"
    })
    .expectJSONTypes('0', {
        NAME: String,
        CUSTOMER_ID: Number,
        STREET_ADDRESS: String,
        POSTAL_CODE: Number,
        COUNTRY: String
    })
    .toss();