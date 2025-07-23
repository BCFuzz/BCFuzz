let v2 = 7;
class C4 extends BigUint64Array {
}
let v5 = 5;
const o6 = {
};
const o8 = {
    "maxByteLength": 2486,
};
const v10 = new SharedArrayBuffer(1, o8);
const v12 = new Int32Array(v10);
o6.get = Int8Array;
({"buffer":v5,"byteLength":C4,"byteOffset":v2,} = v12);
const v14 = new Proxy(BigUint64Array, o6);
try { new v14(v5); } catch (e) {}
gc();
