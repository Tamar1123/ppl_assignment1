## Part 1: Theoretical Questions

Submit the solution to this part as `part1.md`.

### [25 points] Question 1.1

1. Explain in simple words the following programming paradigms:
   1. [5 points] Imperative

      Imperative programming focuses on the concept of a linear sequence of commands that explicitly changes the program's state. We use variables, loops and conditional statements to achieve a result by modifying data in memory as the program runs.

   1. [5 points] Object Oriented
      
      Object-Oriented programming focuses on organizing code into objects instead of simply a list of steps. An object is an instance of a class that holds both data and the methods that can be done with that data. Object-Oriented is centered around the interactions between these autonomous entities, utilizing concepts like inheritance, polymorphism and abstraction.

   1. [5 points] Functional

      Functional programming focuses on taking an input and passing it through a chain of functions to get a new output. 
      This paradigm avoids changing state or using mutable data (data is never modified but rather transformed into new data structures). 
      By using functions that always return the same output for the same input, we create very predictable and easy to test code. 

1. [5 points] How does the object oriented paradigm improve over the imperative paradigm?

      Object oriented paradigm improves over the imperative paradigm mainly by encapsulating the code. In a huge program, any part of the code can usually change any variable, which leads to very messy code, making the bugs in the program hard to find. OOP fixes this by encapsulating data. This allows the developer to restrict access so that an object's internal state is only modified through its own methods. This modularity makes it significantly easier to scale large projects, since developers can modify an individual object's internal logic without causing unexpected side effects in unrelated parts of the code. This way, the code becomes much more maintainable and simpler to debug.

1. [5 points] How does the functional paradigm improve over the object oriented paradigm?

      The functional paradigm improves over the object-oriented approach by focusing on immutability and pure functions, which eliminates the risks of "shared mutable state." In OOP, objects often change their internal data over time, making it difficult to track bugs or run multiple tasks at once without parts of the program clashing. Functional programming solves this by ensuring that data is never modified in place. Instead, functions take an input and return a new output without affecting anything else in the system. This results in more predictable and testable code by eliminating side effects. Furthermore, it is better suited for modern multi-core processors, as immutability removes the risk of data corruption caused by multiple threads attempting to modify a shared 'hidden' state simultaneously.

### [10 points] Question 1.2

Consider the following TypeScript function, which calculates the average price of all discounted products in a given inventory.

```ts
type Product = {
  name: string;
  price: number;
  discounted: boolean;
};

const getDiscountedProductAveragePrice = (inventory: Product[]): number => {
  let discountedPriceSum = 0;
  let discountedProductsCount = 0;

  for (const product of inventory) {
    if (product.discounted) {
      discountedPriceSum += product.price;
      discountedProductsCount++;
    }
  }

  if (discountedProductsCount === 0) {
    return 0;
  }

  return discountedPriceSum / discountedProductsCount;
};
```

This function uses an imperative approach with loops and conditional statements.

Refactor the function `getDiscountedProductAveragePrice` to adhere to the Functional Programming paradigm. Utilize the built-in array methods `map`, `filter`, and `reduce` to achieve the same functionality without explicit iteration and conditional checks.
Write the new function under the name `getDiscountedProductAveragePriceFP`.

**Important**: the new function should have the same signature.

**Note**: there are no tests for this question, and it will not be executed. The task here is to write the code in a functional way.

```ts
type Product = {
  name: string;
  price: number;
  discounted: boolean;
};

const getDiscountedProductAveragePriceFP = (inventory: Product[]): number => {

  const discountedProducts = inventory.filter(p => p.discounted);
  
  (discountedProducts.length === 0) 
  ? 0 
  : discounted.reduce((acc, p) => acc + p.price, 0) / discountedProducts.length;
};
```

### [18 points] Question 1.3

Write the most general type for each expression, using type variables where applicable.
Guidelines:

- Arrays must be homogeneous.
- Arithmetic operations must be performed on numbers.
- Use generics where possible.
- Avoid using `any`.

1. [3 points] `(x, y) => x.some(y)`

    `<T>(x:T[], y: (t:T) => boolean) => boolean`

2. [3 points] `x => x.map(y => y * 2)`    

    `(x: number []) => number[]`
  

3. [3 points] `(x, y) => x.filter(y)` 

    `<T>(x: T[], y: (t:T) => boolean) => T[]`

4. [3 points] `x => x.reduce((acc, cur) => acc + cur, 0)` 

    `(x:number[]) => number`

5. [3 points] `(x, y) => x ? y[0] : y[1]` 

    `<S,T>(x:S, y: T[]) => T`

6. [3 points] `(f,g) => x => f(g(x+1))`

    `<T,S>(f: (t:T) => S, g: (n:number) => T) => (x:number) => S`
