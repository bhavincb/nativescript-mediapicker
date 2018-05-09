var Mediapicker = require("nativescript-mediapicker").Mediapicker;
var mediapicker = new Mediapicker();

describe("greet function", function() {
    it("exists", function() {
        expect(mediapicker.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(mediapicker.greet()).toEqual("Hello, NS");
    });
});