let v3 = 7;
class C5 extends BigUint64Array {
}
let v6 = 5;
const o7 = {
};
const o9 = {
    "maxByteLength": 2486,
};
const v11 = new SharedArrayBuffer(1, o9);
const v13 = new Int32Array(v11);
o7.get = Int8Array;
({"buffer":v6,"byteLength":C5,"byteOffset":v3,} = v13);
const v15 = new Proxy(Int16Array, o7);
try { new v15(v6); } catch (e) {}
gc();
