const v1 = new BigUint64Array();
const o4 = {
    "maxByteLength": 4010739806,
};
const v6 = new SharedArrayBuffer(4096, o4);
const v7 = new BigUint64Array(v6);
function f8() {
    return v6;
}
function f9() {
    return v1;
}
f8[Symbol.species] = f9;
v7.constructor = f8;
v7.subarray();
gc();
