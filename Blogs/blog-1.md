
# The significance of union and intersection types in Typescript.

Union and intersection types in TypeScript help make our code more safe by allowing us to define variables and functions that can handle multiple or combined types.

## Union Types:
A union type allows to hold different types of values, the value can be one of many types. Like this could be either string or Number.

We can use it when we are not sure about the result types, or when there are a posibility of having more types.

### example:
```javascript
let value: string | number;
value = "Hello"; 
value = 123456;      

```

## Intersection Types:
An intersection type combines multiple types into one. This means that a variable must have all the properties of the types it's combining.

We can use them when we need a value to have multiple features at the same time

### example:
```javascript
interface Info {
  name: string;
  age: number;
}

interface Details {
  jobTitle: string;
}

type EmployeePerson = Info & Details;

const personEmployee: EmployeePerson = {
  name: "A",
  age: 30,
  jobTitle: "Developer"
};  

```

