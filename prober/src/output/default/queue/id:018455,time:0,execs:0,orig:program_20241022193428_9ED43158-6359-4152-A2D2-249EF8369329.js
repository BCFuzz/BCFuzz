function f0(a1, a2) {
    return a1;
}
const o5 = {
    "maxByteLength": 1073741824,
};
const v8 = createGlobalObject().Float16Array;
const v10 = new ArrayBuffer(1622, o5);
const v11 = new v8(v10);
v11.subarray().set(f0);
gc();
