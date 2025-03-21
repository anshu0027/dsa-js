function generateBinaryStrings(n, output = "", lastDigit = "0") {
    if (n === 0) {
        console.log(output);
        return;
    }

    generateBinaryStrings(n - 1, output + "0", "0");

    if (lastDigit !== "1") {
        generateBinaryStrings(n - 1, output + "1", "1");
    }
}

// Example
generateBinaryStrings(3);
/*
Output:
000
001
010
100
101
*/



// using Recursion