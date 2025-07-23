const v1 = new BigInt64Array();
const v3 = new Uint8ClampedArray();
v3.__proto__ = v1;
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
}
function f8() {
    try { v3.slice(); } catch (e) {}
    return v1;
}
F4.valueOf = f8;
~F4;
gc();
