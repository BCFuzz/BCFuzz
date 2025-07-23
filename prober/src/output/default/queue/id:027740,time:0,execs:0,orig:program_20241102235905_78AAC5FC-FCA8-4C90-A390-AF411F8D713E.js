const v1 = new Int32Array();
let v2 = 7;
class C4 extends BigUint64Array {
}
let v5 = -1;
const o7 = {
};
function f8(a9, a10) {
    return a9;
}
({"buffer":v5,"byteLength":C4,"byteOffset":v2,} = v1);
o7.get = f8;
const v12 = new Proxy(BigInt64Array, o7);
try { new v12(v5); } catch (e) {}
gc();
