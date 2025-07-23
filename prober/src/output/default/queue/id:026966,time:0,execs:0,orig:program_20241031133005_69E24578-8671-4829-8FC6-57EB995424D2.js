const o1 = {
};
const o4 = {
    "maxByteLength": 536870912,
};
const v5 = new ArrayBuffer(o1, o4);
const v6 = new BigInt64Array(v5);
function f7(a8) {
    Object.defineProperty(v6, 0, { writable: true, enumerable: true, value: "b" });
    return o1;
}
try { f7.call(); } catch (e) {}
gc();
