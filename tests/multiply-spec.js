var multiply = require("./multiply.js");

describe("multiplication", function(){
  it("should multiply 3 by 321", function(){
    var product = multiply.multiply(3);
      expect(product).toBe(963);
  });

    it("should multiply 3 by 321", function(){
        var product = multiply.multiply(3);
        expect(product).toBe(963);
    });

    it("should multiply 7 by 321", function(){
        var product = multiply.multiply(7);
        expect(product).toBe(2247);
    });
    it("should multiply 26 by 321", function(){
        var product = multiply.multiply(26);
        expect(product).toBe(8346);
    });

    it("should multiply 894 by 321", function(){
        var product = multiply.multiply(894);
        expect(product).toBe(286974);
    });

});