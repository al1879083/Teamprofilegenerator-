const { test, expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

test('Manager class properly setup', () =>{
    const manager = new Manager("Adrian", 123, "Adrian@gmail.com", 520);
    expect(manager).toEqual({
        name: "Adrian",
        id: 123,
        email: "Adrian@gmail.com",
        office: 520,
        role: "Manager"
    });
    expect(manager.getName()).toBe("Adrian");
    expect(manager.getEmail()).toBe("Adrian@gmail.com");
    expect(manager.getId()).toBe(123);
    expect(manager.getRole()).toBe("Manager");
    expect(manager.getOffice()).toBe(520);
});