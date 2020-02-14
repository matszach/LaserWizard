"use strict";
const Cypher = {

    key: 5,

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