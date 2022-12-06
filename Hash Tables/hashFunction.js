function hash(x) {
    // Set the hash variable
    var hash = 0;

    // If there is no value, return 0
    if(x.length == 0) return hash;

    // Run a hashing operation on every character in the string
    for(var i = 0; i < x.length; i++) {
        ch = x.charCodeAt(i);
        hash = ((hash << 5) - hash) + ch;
        hash = hash & hash;
    }

    return hash
};

const acceptedPassword = "password123";
const tryPassword = "password123";

console.log(hash(acceptedPassword) === hash(tryPassword));