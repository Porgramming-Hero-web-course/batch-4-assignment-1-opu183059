{
    function getProperty<T, K extends keyof T>(personObject: T, key: K): T[K] {
        return personObject[key];
      }
      
      const person = { name: "Alice", age: 30 };
      console.log(getProperty(person, "name")); 
      
}