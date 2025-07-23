const v0 = [5.197943960373909,728995.9939078528,-2.2250738585072014e-308,2.0,-1e-15];
const v2 = new Uint16Array();
const v3 = v2.values();
const o4 = {
};
const o7 = {
    "maxByteLength": 536870912,
};
const v8 = new ArrayBuffer(o4, o7);
const v10 = new Uint8Array(v8, v3, v0);
function f11(a12) {
    Object.defineProperty(v10, 0, { writable: true, enumerable: true, value: "b" });
    return v8;
}
try { f11.call(v10, 536870912); } catch (e) {}
gc();
