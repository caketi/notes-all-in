function memoize(callback) {
    const cache = {};

    return function (...parameters) {
        const args = JSON.stringify(parameters);

        if (typeof cache[parameters] !== "undefined") {
            console.log("Fetching value from the cache...");
            return cache[parameters];
        }

        console.log("Computing and storing the result in the cache...");
        return cache[parameters] = callback(...parameters);
    };
}

const square = memoize(value => value * value);

console.log(square(2));
console.log(square(2));
console.log(square(2));
console.log(square(11));
