const v1 = /UQ/mdygu;
const v2 = v1.constructor;
let v3;
try { v3 = v2.escape(v1, v1, v1, -4294967296); } catch (e) {}
const v5 = new ArrayBuffer();
const v6 = v5.constructor;
function f7(a8, a9) {
    return v5;
}
const t9 = f7.bind(v6, v3, -4294967296);
t9();
const v14 = new BigUint64Array(586);
for (const v15 of v14) {
}
gc();
