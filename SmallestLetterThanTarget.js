function nextGreatestLetter(letters, target) {
    for (let letter of letters) {
        if (letter > target) return letter;
    }
    return letters[0]; // Wrap around if no greater letter found
}

// Example usage:
console.log(nextGreatestLetter(["c", "f", "j"], "a")); // Output: "c"
console.log(nextGreatestLetter(["c", "f", "j"], "c")); // Output: "f"
console.log(nextGreatestLetter(["c", "f", "j"], "z")); // Output: "c" (wrap around)
