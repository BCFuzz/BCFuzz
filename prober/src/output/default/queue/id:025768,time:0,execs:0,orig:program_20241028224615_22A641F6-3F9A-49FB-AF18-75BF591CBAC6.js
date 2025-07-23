const v1 = new Float64Array();
function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = new F2(F2, Float64Array, v1, F2);
const o9 = {
};
const o12 = {
    "maxByteLength": 536870912,
};
const v13 = new ArrayBuffer(o9, o12);
const v15 = new BigUint64Array(v13, v8, v1);
function f16(a17) {
    Object.defineProperty(v15, 0, { writable: true, enumerable: true, value: "b" });
    return a17;
}
try { f16.call(); } catch (e) {}
gc();
