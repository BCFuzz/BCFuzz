const v3 = new Int32Array();
let v4 = 7;
class C6 extends BigUint64Array {
}
let v7 = -1;
const o8 = {
};
o8.get = Int8Array;
({"buffer":v7,"byteLength":C6,"byteOffset":v4,} = v3);
const v10 = new Proxy(Float64Array, o8);
try { new v10(v7); } catch (e) {}
gc();
