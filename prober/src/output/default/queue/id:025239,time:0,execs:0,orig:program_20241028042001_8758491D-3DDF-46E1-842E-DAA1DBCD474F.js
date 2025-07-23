const o0 = {
};
function f1() {
    return 681;
}
o0.toString = f1;
const o5 = {
    "maxByteLength": 536870912,
};
const v6 = new ArrayBuffer(o0, o5);
const v8 = new BigUint64Array(v6);
function f9(a10) {
    Object.defineProperty(v8, 0, { writable: true, enumerable: true, value: "b" });
    return "b";
}
try { f9.call(536870912, o5, BigUint64Array, BigUint64Array, BigUint64Array); } catch (e) {}
gc();
