let _ = { 
    clamp(number, lower, upper) {
        let clamped = Math.max(number, lower);
        clamped = Math.min(clamped, upper);
        return clamped;
    },
    inRange(number, start, end) {
        if (end === undefined) {
            end = start;
            start = 0;
        }
        if (start > end) {
            let temp = start;
            start = end;
            end = temp;
        }
        return (number >= start && number < end);
    },
    words(string) {
        let words = string.split(' ');
        return words;
    }
};




// Do not write or modify code below this line.
module.exports = _;