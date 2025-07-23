const v1 = 1000 !== 1000;
const v2 = !v1;
const v3 = v2 || v2;
const v5 = new Uint8Array(1000);
const v6 = v5.toHex(v2, v1, v3);
v6.substring(v3, v6);
gc();
