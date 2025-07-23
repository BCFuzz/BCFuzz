let v2 = 7;
class C4 extends BigUint64Array {
}
let v5 = -1;
const o6 = {
};
const o9 = {
    "maxByteLength": 2147483647,
};
const v11 = new SharedArrayBuffer(1, o9);
const v12 = new Int8Array(v11);
o6.get = Int8Array;
({"buffer":v5,"byteLength":C4,"byteOffset":v2,} = v12);
const v14 = new Proxy(Uint8ClampedArray, o6);
try { new v14(v5); } catch (e) {}
gc();
