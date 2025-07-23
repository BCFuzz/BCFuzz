const v1 = new BigInt64Array();
const o2 = {
    __proto__: v1,
};
const v4 = new BigInt64Array(3852);
for (const v5 in v4) {
}
const o8 = {
    "maxByteLength": 16,
};
const v10 = new ArrayBuffer(7, o8);
try { v10.resize(o2); } catch (e) {}
const v13 = new Uint32Array();
v13.includes(Uint32Array, 3852);
gc();
