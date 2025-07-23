function f0(a1, a2, a3, a4) {
    return a2;
}
const o7 = {
    "maxByteLength": 4294967296,
};
const v9 = new ArrayBuffer(4, o7);
new DataView(v9, o7, f0);
v9["transfer"]();
gc();
