class LFUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.freq = new Map();
    }

    get(key) {
        if (!this.cache.has(key)) return -1;
        this.freq.set(key, (this.freq.get(key) || 0) + 1);
        return this.cache.get(key);
    }

    put(key, value) {
        if (this.capacity === 0) return;

        if (this.cache.has(key)) {
            this.cache.set(key, value);
            this.freq.set(key, (this.freq.get(key) || 0) + 1);
        } else {
            if (this.cache.size >= this.capacity) {
                let leastUsedKey = [...this.freq.entries()].reduce((a, b) => (a[1] < b[1] ? a : b))[0];
                this.cache.delete(leastUsedKey);
                this.freq.delete(leastUsedKey);
            }
            this.cache.set(key, value);
            this.freq.set(key, 1);
        }
    }
}

// Example usage
let lfu = new LFUCache(2);
lfu.put(1, 10);
lfu.put(2, 20);
console.log(lfu.get(1)); // Output: 10
lfu.put(3, 30); // Evicts key 2 (LFU)
console.log(lfu.get(2)); // Output: -1
console.log(lfu.get(3)); // Output: 30
