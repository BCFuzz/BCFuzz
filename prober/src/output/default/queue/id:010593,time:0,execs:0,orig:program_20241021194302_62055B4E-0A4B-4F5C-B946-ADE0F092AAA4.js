const v3 = new Int8Array();
function F4(a6, a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = this.constructor;
    try { new v10(a6, BigInt64Array, a7); } catch (e) {}
    a7[2] = a7;
    try { new a8(16, 16); } catch (e) {}
}
new F4(v3, v3, F4);
gc();
