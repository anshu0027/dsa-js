function towerOfHanoi(n, source, auxiliary, destination) {
    if (n === 1) {
        console.log(`Move disk 1 from ${source} to ${destination}`);
        return;
    }

    // Move (n-1) disks from source to auxiliary, using destination as helper
    towerOfHanoi(n - 1, source, destination, auxiliary);

    // Move the nth (largest) disk from source to destination
    console.log(`Move disk ${n} from ${source} to ${destination}`);

    // Move (n-1) disks from auxiliary to destination, using source as helper
    towerOfHanoi(n - 1, auxiliary, source, destination);
}

// Example: Solve Tower of Hanoi for 3 disks
towerOfHanoi(3, "A", "B", "C");



// Output:
// Move disk 1 from A to C
// Move disk 2 from A to B
// Move disk 1 from C to B
// Move disk 3 from A to C
// Move disk 1 from B to A
// Move disk 2 from B to C
// Move disk 1 from A to C
