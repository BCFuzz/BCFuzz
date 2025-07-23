const o2 = {
    "maxByteLength": 11,
};
const v4 = new SharedArrayBuffer(11, o2);
const v6 = new Int16Array(v4);
function f7(a8, a9) {
    return f7;
}
function f10() {
    const v11 = new Int16Array(v6, 11);
    return v11;
}
f7[Symbol.species] = f10;
v6.constructor = f7;
v6.subarray();
gc();
