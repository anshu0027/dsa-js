function printNTimes(n) {
    if (n <= 0) return;
    console.log("Hello");
    printNTimes(n - 1);
}

printNTimes(5);
// Output: "Hello" printed 5 times
