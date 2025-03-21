function isIsomorphic(s, t) {
    if (s.length !== t.length) return false;

    let mapS = new Map();
    let mapT = new Map();

    for (let i = 0; i < s.length; i++) {
        let charS = s[i], charT = t[i];

        if ((mapS.has(charS) && mapS.get(charS) !== charT) ||
            (mapT.has(charT) && mapT.get(charT) !== charS)) {
            return false;
        }

        mapS.set(charS, charT);
        mapT.set(charT, charS);
    }

    return true;
}

// Example
console.log(isIsomorphic("egg", "add")); // Output: true
console.log(isIsomorphic("foo", "bar")); // Output: false
console.log(isIsomorphic("paper", "title")); // Output: true
