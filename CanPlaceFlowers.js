function canPlaceFlowers(flowerbed, n) {
    let count = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0 &&
            (i === 0 || flowerbed[i - 1] === 0) &&
            (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
            flowerbed[i] = 1;
            count++;
        }

        if (count >= n) return true;
    }

    return count >= n;
}

// Example usage:
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // Output: true
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)); // Output: false
