function f0(a1, a2) {
    return a2;
}
let v4 = 7;
class C6 extends BigUint64Array {
}
let v7 = -1;
const o8 = {
};
o8.get = f0;
const o11 = {
    "maxByteLength": 2147483647,
};
const v13 = new SharedArrayBuffer(1, o11);
const v15 = new Int32Array(v13);
({"buffer":v7,"byteLength":C6,"byteOffset":v4,} = v15);
const v17 = new Proxy(Uint8Array, o8);
try { new v17(v7); } catch (e) {}
gc();
