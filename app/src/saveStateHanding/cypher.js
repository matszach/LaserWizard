"use strict";

// encodes and decodes save state json file content
const Cypher = {

    key: 5, // set != 0 value in release

    decode(data) {
        let decoded = '';
        data.forEach(c => {
            decoded += String.fromCharCode(c + Cypher.key);
        });
        return decoded;
    },

    encode(data) {
        let encoded = '';
        data.split('').forEach(c => {
            encoded += String.fromCharCode(c.charCodeAt(0) - Cypher.key);
        });
        return encoded;
    }

}