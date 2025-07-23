let v1 = 7;
class C3 extends BigUint64Array {
}
let v4 = 5;
const o5 = {
};
function f6(a7) {
    return f6;
}
o5.get = f6;
const o10 = {
    "maxByteLength": 2147483647,
};
const v12 = new SharedArrayBuffer(21710, o10);
const v13 = new Uint16Array(v12);
({"buffer":v4,"byteLength":C3,"byteOffset":v1,} = v13);
const v15 = new Proxy(Uint16Array, o5);
try { new v15(v4); } catch (e) {}
gc();
