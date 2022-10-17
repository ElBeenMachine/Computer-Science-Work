var Dictionary = function() {
    this.keys = {};
    this.length = 0;
    this.defaultValue = null;
  };
  
  Dictionary.prototype.store = function(key, value) {
    this.keys[key] = value;
    this.length++;
  };
  
  Dictionary.prototype.fetch = function(key) {
    var value = this.keys[key];
  
    if (value) {
      return value;
    } else {
      if (this.defaultValue) return this.defaultValue;
      return null;
    }
  };
  

Dictionary.prototype.hasKey = function(key) {
    for (var k in this.keys) {
        if (key == k) {
            return true;
        } else {
            return false;
        }
    };
    return false;
  };
  
// Remove an item from the dictionary
Dictionary.prototype.remove = function(key) {
    if (this.keys[key]) {
        delete this.keys[key];
        this.length--;
    }
};
  
// Fetch a random key from the dictionary
Dictionary.prototype.random = function() {
    var keys = [];
  
    for (var k in this.keys) {
        keys.push(k);
    }
  
    return keys[Math.floor(Math.random() * keys.length)];
};
  
module.exports = Dictionary;