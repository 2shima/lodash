let _ = { 
    clamp(number, lower, upper) {
        let clamped = Math.max(number, lower);
        clamped = Math.min(clamped, upper);
        return clamped;
    },
};




// Do not write or modify code below this line.
module.exports = _;