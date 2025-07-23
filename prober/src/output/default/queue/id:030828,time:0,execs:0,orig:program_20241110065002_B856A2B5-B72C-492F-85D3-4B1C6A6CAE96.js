let v1 = 7;
class C3 extends BigUint64Array {
}
let v4 = -1;
const o5 = {
};
const o8 = {
    "maxByteLength": 2147483647,
};
const v10 = new SharedArrayBuffer(1, o8);
const v12 = new Int32Array(v10);
o5.get = Int8Array;
({"buffer":v4,"byteLength":C3,"byteOffset":v1,} = v12);
const v14 = new Proxy(Int8Array, o5);
try { new v14(v4); } catch (e) {}
gc();
