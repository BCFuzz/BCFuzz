const o0 = {
};
const o3 = {
    "maxByteLength": 536870912,
};
const v4 = new ArrayBuffer(o0, o3);
const v6 = new Uint8Array(v4);
function f7(a8) {
    Object.defineProperty(v6, 0, { writable: true, enumerable: true, value: "b" });
    return a8;
}
try { f7.call(o0, v6, v4); } catch (e) {}
gc();
