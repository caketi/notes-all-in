/**
 * Memoization is an optimization technique in which we cache the function results
 */
const square = (() => {
    const cache = {};

    return value => {
        if (typeof cache[value] !== "undefined"){
            console.log("Fetching value from the cache...");
            return cache[value];
        }

        console.log("Computing and storing the result in the cache..");
        return cache[value] = value * value;
    }
})();
console.log(square(21));
console.log(square(2));
console.log(square(2));


/*
const square = () => {
    let cache = {};
    return (value) => {
        if ( value in cache) {
            console.log("Fetching from cache");
            return cache[value];
        } else {
// if not in cache store the value in cache
            console.log("Performing expensive query");
            const result = value * value;
            cache[value] = result;
            return result; 
        }
    }
}

const sq = square();
console.log(sq(21)); // Performing expensive query , 441
console.log(sq(21)); // Fetching from cache, 441

*/