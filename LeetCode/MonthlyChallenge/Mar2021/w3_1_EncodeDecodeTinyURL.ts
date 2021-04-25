function hashCode(longUrl: string): number {
    let hash = 0;
    for (let i = 0; i < longUrl.length; i++) {
        let char = longUrl.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

let map = {};

/**
 * Encodes a URL to a shortened URL.
 */
function encode(longUrl: string): string {
    const hash = hashCode(longUrl);
    map[hash] = longUrl;
    return hash.toString();
};

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
    return map[shortUrl];
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */