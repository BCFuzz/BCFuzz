const v2 = new Uint8Array(Uint16Array, Uint8Array);
v2.buffer;
const o6 = {
    "maxByteLength": 2509,
};
const v8 = new ArrayBuffer(95, o6);
const v9 = new Uint16Array(v8);
v9.set(v2);
gc();
