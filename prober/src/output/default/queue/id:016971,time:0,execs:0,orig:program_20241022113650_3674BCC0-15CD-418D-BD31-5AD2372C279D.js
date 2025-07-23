const o0 = {
};
const o3 = {
    "maxByteLength": 536870912,
};
const v4 = new ArrayBuffer(o0, o3);
const v6 = new BigUint64Array(v4);
function f7(a8) {
    return v6;
}
function f9() {
    return v6;
}
f7[Symbol.species] = f9;
v6.constructor = f7;
v6.slice(536870912, 536870912);
gc();
