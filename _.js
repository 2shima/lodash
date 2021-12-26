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
    },
    pad(string, length) {
        if (string.length > length) {
            return string;
        }
        let startPad = Math.floor((length - string.length) / 2);
        let endPad = length - string.length - startPad;
        let paddedString = ' '.repeat(startPad) + string + ' '.repeat(endPad);
        return paddedString;
    },
    has(object, key) {
        return object[key] !== undefined;
    },
    invert(object) {
        let inverted = { };
        for (let property in object) {
            inverted[object[property]] = property;
        }
        return inverted;
    },
    findKey(object, predicate) {
        for (let key in object) {
            let value = object[key];
            let result = predicate(value);
            if (result) {
                return key;
            }
        }
        return undefined;
    },
    drop(array, n) {
        if (n === undefined) {
            n = 1;
        }
        let droppedArray = array.slice(n);
        return droppedArray;
    },
    dropWhile(array, predicate) {
        let toDrop = array.findIndex((element, index) => !(predicate(element, index, array)));
        let droppedArray = this.drop(array, toDrop);
        return droppedArray;
    }
};




// Do not write or modify code below this line.
module.exports = _;