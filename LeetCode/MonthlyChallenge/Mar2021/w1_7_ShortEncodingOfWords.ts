/** *
 A valid encoding of an array of words is any reference string s and array of indices indices such that:

 words.length == indices.length
 The reference string s ends with the '#' character.
 For each index indices[i], the substring of s starting from indices[i] and up to (but not including) the next '#' character is equal to words[i].
 Given an array of words, return the length of the shortest reference string s possible of any valid encoding of words.

 Example 1:

 Input: words = ["time", "me", "bell"]
 Output: 10
 Explanation: A valid encoding would be s = "time#bell#" and indices = [0, 2, 5].
 words[0] = "time", the substring of s starting from indices[0] = 0 to the next '#' is underlined in "time#bell#"
 words[1] = "me", the substring of s starting from indices[1] = 2 to the next '#' is underlined in "time#bell#"
 words[2] = "bell", the substring of s starting from indices[2] = 5 to the next '#' is underlined in "time#bell#"
 Example 2:

 Input: words = ["t"]
 Output: 2
 Explanation: A valid encoding would be s = "t#" and indices = [0].

 */

class Trie {
    data: string;
    nodes: Trie[];

    constructor(data: string) {
        this.data = data;
        this.nodes = [];
    }

    getData(): string {
        return this.data;
    }

    createChildNode(data: string): Trie {
        const newNode = new Trie(data);
        this.nodes.push(newNode);
        return newNode;
    }

    getOrCreateChildNode(data: string): Trie {
        for (let node of this.nodes) {
            if (node.getData() === data) {
                return node;
            }
        }
        return this.createChildNode(data);
    }

    getLeafValues(): string[] {
        if (this.nodes.length > 0) {
            return [].concat(...this.nodes.map((node) => node.getLeafValues().map(str => this.data + str)));
        } else {
            return [this.data];
        }
    }
}

function insertInTrie(word: string, trie: Trie) {
    const childNode: Trie = trie.getOrCreateChildNode(word.slice(-1));
    if(word.length >= 2) {
        insertInTrie(word.slice(0, -1), childNode);
    }
}

function minimumLengthEncoding(words: string[]): number {
    const root: Trie = new Trie("");
    words.forEach((word) => insertInTrie(word, root));
    const uniqueWords: string[] = root.getLeafValues();
    return uniqueWords.reduce(((previousValue, currentValue) => previousValue + currentValue.length + 1), 0);
}

export { minimumLengthEncoding };
