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
const v13 = new Int32Array(v11);
o6.get = Int8Array;
({"buffer":v5,"byteLength":C4,"byteOffset":v2,} = v13);
const v15 = new Proxy(Uint32Array, o6);
try { new v15(v5); } catch (e) {}
gc();
