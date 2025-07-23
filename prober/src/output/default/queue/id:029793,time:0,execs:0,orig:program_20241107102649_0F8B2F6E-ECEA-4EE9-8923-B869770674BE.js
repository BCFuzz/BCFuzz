class C4 extends Uint8ClampedArray {
}
const v5 = new C4(4294967296);
const v6 = v5.subarray(Infinity);
function F7(a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    const v12 = this.constructor;
    try { new v12(v5, a10); } catch (e) {}
    a10.b = a10;
    v6.byteOffset **= -13369;
}
const v15 = new F7(v5, v6);
const t12 = v15.constructor;
new t12("-9223372036854775808", "-9223372036854775808");
gc();
