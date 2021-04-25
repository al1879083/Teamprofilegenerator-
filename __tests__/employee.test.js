const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test('Employee class properly setup', () =>{
    const employee1 = new Employee("Adrian", 123, "Adrian@gmail.com");
    expect(employee1).toEqual({
        name: "Adrian",
        id: 123,
        email: "Adrian@gmail.com",
        role: "Employee"
    });
    expect(employee1.getName()).toBe("Adrian");
    expect(employee1.getEmail()).toBe("Adrian@gmail.com");
    expect(employee1.getId()).toBe(123);
    expect(employee1.getRole()).toBe("Employee");
});