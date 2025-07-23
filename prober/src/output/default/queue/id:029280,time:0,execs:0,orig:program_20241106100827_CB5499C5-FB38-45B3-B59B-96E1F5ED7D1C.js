const v2 = new Int32Array();
let v3 = 7;
class C5 extends BigUint64Array {
}
let v6 = -1;
const o8 = {
};
({"buffer":v6,"byteLength":C5,"byteOffset":v3,} = v2);
o8.get = Uint16Array;
const v10 = new Proxy(DataView, o8);
try { new v10(v6); } catch (e) {}
gc();
