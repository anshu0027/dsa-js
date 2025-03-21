function printOneToN(n, current = 1) {
    if (current > n) return;
    console.log(current);
    printOneToN(n, current + 1);
}

printOneToN(5);
// Output: 1 2 3 4 5
