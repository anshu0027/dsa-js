function isRotation(s1, s2) {
    return s1.length === s2.length && (s1 + s1).includes(s2);
}

// Example
console.log(isRotation("waterbottle", "erbottlewat")); // Output: true
console.log(isRotation("hello", "llohe")); // Output: true
console.log(isRotation("hello", "llheo")); // Output: false
