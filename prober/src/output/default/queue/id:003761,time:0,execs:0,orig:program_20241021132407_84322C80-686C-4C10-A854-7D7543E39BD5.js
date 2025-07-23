const v1 = new Int32Array(Int32Array, Int32Array, Int32Array);
const o4 = {
    "maxByteLength": 762,
};
const v6 = new ArrayBuffer(762, o4);
const v8 = new BigInt64Array(v6);
delete v8.byteLength;
v1["subarray"]();
gc();
