const o0 = {
};
const o3 = {
    "maxByteLength": 536870912,
};
const v4 = new ArrayBuffer(o0, o3);
const v6 = new BigUint64Array(v4);
function f7(a8) {
    Object.defineProperty(v6, 0, { writable: true, enumerable: true, value: "b" });
    return "b";
}
try { f7.call(f7, 536870912, f7, v4); } catch (e) {}
gc();
