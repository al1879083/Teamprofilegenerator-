const { test } = require("@jest/globals");
const Intern = require("../lib/Intern");

test('Intern class properly setup', () => {
    const intern = new Intern("Adrian", 123, "Adrian@gmail.com", "UCB");
    expect(intern).toEqual({
        name: "Adrian",
        id: 123,
        email: "Adrian@gmail.com",
        school: "UCB",
        role: "Intern"
    });
    expect(intern.getName()).toBe("Adrian");
    expect(intern.getEmail()).toBe("Adrian@gmail.com");
    expect(intern.getId()).toBe(123);
    expect(intern.getRole()).toBe("Intern");
    expect(intern.getSchool()).toBe("UCB");
})