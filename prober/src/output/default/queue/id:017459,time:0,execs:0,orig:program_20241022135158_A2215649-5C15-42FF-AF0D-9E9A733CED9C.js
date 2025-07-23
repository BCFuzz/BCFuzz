const v1 = new Float64Array(Float64Array, Float64Array, Float64Array);
const v3 = new Uint16Array();
const o7 = {
    "maxByteLength": 5,
};
const v9 = new ArrayBuffer(5, o7);
const v11 = new Int32Array(v9, v1, v3);
delete v11[1000];
gc();
