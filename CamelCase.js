function toCamelCase(str) {
    return str
        .toLowerCase()
        .replace(/(?:[-_\s]+)([a-z])/g, (_, char) => char.toUpperCase());
}

// Example Usage
console.log(toCamelCase("hello world"));        // "helloWorld"
console.log(toCamelCase("convert_to_camel"));   // "convertToCamel"
console.log(toCamelCase("make-it-camel"));      // "makeItCamel"
console.log(toCamelCase("this IS Camel-Case")); // "thisIsCamelCase"
