function f0(a1, a2) {
    return a2;
}
const o5 = {
    "maxByteLength": 1073741824,
};
const v8 = createGlobalObject().Float16Array;
const v10 = new ArrayBuffer(1622, o5);
const v11 = new v8(v10);
delete v11[f0];
gc();
