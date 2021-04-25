const { test } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test('Engineer class properly setup', () => {
    const engineer = new Engineer("Adrian", 123, "Adrian@gmail.com", "AL");
    expect(engineer).toEqual({
        name: "Adrian",
        id: 123,
        email: "Adrian@gmail.com",
        github: "AL",
        role: "Engineer"
    });
    expect(engineer.getName()).toBe("Adrian");
    expect(engineer.getEmail()).toBe("Adrian@gmail.com");
    expect(engineer.getId()).toBe(123);
    expect(engineer.getRole()).toBe("Engineer");
    expect(engineer.getGithub()).toBe("AL")
})