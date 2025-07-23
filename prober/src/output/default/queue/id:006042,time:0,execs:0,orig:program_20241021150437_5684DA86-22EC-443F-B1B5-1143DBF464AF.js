const v0 = [];
const v1 = [v0,v0,v0,v0];
const o4 = {
    "maxByteLength": 5,
};
const v6 = new ArrayBuffer(5, o4);
const v8 = new Int32Array(v6, v1, v0);
v8[0] = v8;
gc();
