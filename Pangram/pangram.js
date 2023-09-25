function isPangram(string) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let output = true;

    // Convert to uppercase for case-insensitive comparison.
    string = string.toUpperCase();

    // Iterate through each character in the alphabet.
    alphabet.split('').forEach(char => {
        if (!string.includes(char)) {
            output = false;
        }
    });

    return output;
}