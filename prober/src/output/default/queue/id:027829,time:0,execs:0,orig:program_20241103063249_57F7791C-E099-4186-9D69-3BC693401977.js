const v1 = new BigUint64Array();
const v2 = v1.constructor;
const o5 = {
    "maxByteLength": 1073741824,
};
const v7 = new ArrayBuffer(1622, o5);
const v9 = new Int32Array(ArrayBuffer, 1073741824, 1073741824);
const v10 = new Int32Array(v7);
const v11 = new v2();
function f12(a13, a14, a15, a16) {
    a14.set(v10);
    return v11;
}
try { f12(v9, v11); } catch (e) {}
gc();
