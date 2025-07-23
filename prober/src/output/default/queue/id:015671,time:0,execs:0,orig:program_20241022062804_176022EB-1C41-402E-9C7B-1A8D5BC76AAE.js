const v0 = /(?:a*)+a(?=b)c?/yvgi;
const v3 = new Uint8ClampedArray(1087);
let v4 = 4096;
let v5 = v0[4];
[v5,...v4] = v3;
new Uint8Array(v4);
gc();
