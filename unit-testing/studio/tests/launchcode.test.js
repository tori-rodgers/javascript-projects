// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
    test("should return 'nonprofit'", function() {
      expect(launchcode.organization).toBe("nonprofit");
    });

    test("should return 'Jeff'", function() {
      expect(launchcode.executiveDirector).toBe("Jeff");
    });

    test("should return 100", function() {
      expect(launchcode.percentageCoolEmployees).toBe(100);
    });

    test("should return array of programs", function() {
      expect(launchcode.programsOffered).toContain("Web Development");
      expect(launchcode.programsOffered).toContain("Data Analysis");
      expect(launchcode.programsOffered).toContain("Liftoff");
      expect(launchcode.programsOffered).toHaveLength(3);
    });

    test("should return 'Launch!' when only divisible by 2", function() {
      expect(launchcode.launchOutput(4)).toBe("Launch!");
    });
    
    test("should return 'Code!' when only divisible by 3", function() {
      expect(launchcode.launchOutput(3)).toBe("Code!");
    });

    test("should return 'Rocks!' when only divisible by 5", function() {
      expect(launchcode.launchOutput(5)).toBe("Rocks!");
    });

    test("should return 'Launchcode!' when divisible by 2 and 3", function() {
      expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
    });

    test("should return 'Code Rocks!' when divisible by 3 and 5", function() {
      expect(launchcode.launchOutput(15)).toBe("Code Rocks!");
    });

    test("should return 'Launch Rocks!' when divisible by 2 and 5", function() {
      expect(launchcode.launchOutput(10)).toBe("Launch Rocks! (CRASH!!!!)");
    });

    test("should return 'LaunchCode Rocks!' when divisible by 2, 3, and 5", function() {
      expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!");
    });

    test("should return 'Rutabagas! That doesn't work.' when not divisible by 2, 3, and 5", function() {
      expect(launchcode.launchOutput(49)).toBe("Rutabagas! That doesn't work.");
    });

});