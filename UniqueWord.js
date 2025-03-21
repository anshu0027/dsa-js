class ValidWordAbbr {
    constructor(dictionary) {
        this.map = new Map();
        for (let word of new Set(dictionary)) {
            let abbr = this.getAbbr(word);
            if (!this.map.has(abbr)) {
                this.map.set(abbr, word);
            } else {
                this.map.set(abbr, null); // If multiple words have the same abbreviation, it's invalid
            }
        }
    }

    getAbbr(word) {
        if (word.length <= 2) return word;
        return word[0] + (word.length - 2) + word[word.length - 1];
    }

    isUnique(word) {
        let abbr = this.getAbbr(word);
        return !this.map.has(abbr) || this.map.get(abbr) === word;
    }
}

let abbr = new ValidWordAbbr(["deer", "door", "cake", "card"]);
console.log(abbr.isUnique("dear")); // Output: false
console.log(abbr.isUnique("cart")); // Output: true
