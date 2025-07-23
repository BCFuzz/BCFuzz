const v2 = [1,1];
const v3 = [BigInt64Array,BigInt64Array,BigInt64Array];
const o6 = {
    "maxByteLength": 5,
};
const v7 = new ArrayBuffer(1, o6);
const v8 = new BigInt64Array(v7, v3, v2);
v8[0] = v8;
gc();
