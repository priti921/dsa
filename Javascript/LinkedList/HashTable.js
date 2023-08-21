const { SinglyLinkedList } = require("./SinglyLinkedList");

// function hash(key, size) {
//   let hashedKey = 0;
//   for (let i = 0; i < key.length; i++) {
//     hashedKey += key.charCodeAt(i);
//   }
//
//   return hashedKey & size;
// }
class HashTable {
  //default size if not passed any
  constructor(hashTableSize = 32) {
    //create hashtable of input size and fill each bucket with empty linked list
    this.buckets = Array(hashTableSize)
      .fill(null)
      .map(() => new SinglyLinkedList());

    //keep track of keys
    this.keys = {};
  }

  hash(key) {
    //creates array of each characters of key and
    //returns sum of all character codes
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) =>
        (hashAccumulator += keySymbol.charCodeAt(0)),
      0
    );
    return hash % this.buckets.length;
  }

  set(key, value) {
    //get the hash for given key
    const keyHash = this.hash(key);
    //set the keyHash to key
    this.keys[key] = keyHash;
    //get the node in buckets that is positioned in keyHash
    const bucketLinkedList = this.buckets[keyHash];
    //get the node from nodeLinkedList which matches the key
    const node = bucketLinkedList.find({
      callback: (nodeValue) => nodeValue.key === key,
    });

    if (!node) {
      bucketLinkedList.append({ key, value });
    } else {
      node.value.value = value;
    }
  }

  get(key) {
    //get the bucket assigned in the index by getting the hash of key
    const bucketLinkedList = this.buckets[this.hash(key)];
    //find the key in the bucket nodes
    const node = bucketLinkedList.find({
      callback: (nodeValue) => nodeValue.key === key,
    });

    //if found then return value or return undefined
    return node ? node.value : undefined;
  }

  delete(key) {
    const hash = this.hash(key);
    delete this.keys[key];
    const bucketLinkedList = this.buckets[hash];
    const node = bucketLinkedList.find({
      callback: (nodeValue) => nodeValue.key === key,
    });

    if (!node) {
      return null;
    } else {
      bucketLinkedList.remove(node.value);
    }
  }

  has(key) {
    // return this.keys.hasOwnProperty(key);
    return Object.hasOwnProperty.call(this.keys, key);
  }

  getKeys() {
    return Object.keys(this.keys);
  }

  getValues() {
    return this.buckets.reduce((values, buckets) => {
      //goes through each element of buckets array
      const bucketValues = buckets
        //turns each element into array and mapthrough each element of
        //the array to get the each node's value
        .toArray()
        .map((nodeLinkedList) => nodeLinkedList.value.value);
      //keep adding backetValues to be returned
      return values.concat(bucketValues);
    }, []);
  }
}

const newHashTable = new HashTable();
newHashTable.set("hi", "there");
newHashTable.set("hellow", "world");
newHashTable.set("bye", "world");
console.log(newHashTable.getKeys());

module.exports = HashTable
