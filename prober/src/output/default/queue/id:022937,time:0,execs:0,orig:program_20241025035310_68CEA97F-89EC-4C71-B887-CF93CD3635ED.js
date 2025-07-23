const o5 = {
    "maxByteLength": 824,
};
const v7 = new ArrayBuffer(19, o5);
const v8 = new Uint16Array(v7, Int16Array, 3);
v8[64] = v8;
gc();
