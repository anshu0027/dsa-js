function validWordSquare(words) {
    for (let i = 0; i < words.length; i++) {
        let colWord = "";

        for (let j = 0; j < words.length; j++) {
            if (words[j][i] !== undefined) colWord += words[j][i];
        }

        if (words[i] !== colWord) return false;
    }

    return true;
}

// Example usage:
console.log(validWordSquare(["abcd", "bnrt", "crmy", "dtye"])); // Output: true
console.log(validWordSquare(["ball", "area", "lead", "lady"])); // Output: false
