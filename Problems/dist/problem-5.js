"use strict";
{
    function getProperty(personObject, key) {
        return personObject[key];
    }
    const person = { name: "Alice", age: 30 };
    console.log(getProperty(person, "name"));
}
