const v2 = Array();
v2.e = v2;
v2[204] = 3.0;
const o6 = {
    "maxByteLength": 4294967295,
};
const v8 = new ArrayBuffer(5, o6);
const v10 = new Uint8Array(v8);
v10[2] = v10;
gc();
