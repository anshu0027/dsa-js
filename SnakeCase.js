function toSnakeCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, '$1_$2') // Handle camelCase
        .replace(/[\s-]+/g, '_') // Replace spaces & hyphens with underscores
        .toLowerCase();
}

// Example Usage
console.log(toSnakeCase("helloWorld"));       // "hello_world"
console.log(toSnakeCase("Convert to snake")); // "convert_to_snake"
console.log(toSnakeCase("make-it-snake"));    // "make_it_snake"
console.log(toSnakeCase("thisIsSnakeCase"));  // "this_is_snake_case"
