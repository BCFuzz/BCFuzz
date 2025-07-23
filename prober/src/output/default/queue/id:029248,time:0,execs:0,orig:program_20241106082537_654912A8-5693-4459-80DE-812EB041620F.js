const v1 = new Int32Array();
let v2 = 7;
class C4 extends BigUint64Array {
}
let v5 = -1;
const o6 = {
};
function f7(a8, a9) {
    return v2;
}
({"buffer":v5,"byteLength":C4,"byteOffset":v2,} = v1);
o6.get = f7;
const v11 = new Proxy(Int32Array, o6);
try { new v11(v5); } catch (e) {}
gc();
