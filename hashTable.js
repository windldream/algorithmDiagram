function HashTable() {
    let table = [];

    this.put = function(key, value) {
        let pos = loseloseHashCode(key);
        console.log(pos + ' - ' + key);
        table[pos] = value;
    };

    this.get = function(key) {
        return table[loseloseHashCode(key)];
    };

    this.remove = function(key) {
        table[loseloseHashCode(key)] = undefined;
    };
}

function loseloseHashCode(key) {
    let hash = 0, i;
    for (i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
    }
    return hash % 37;
}