const v1 = new BigInt64Array();
function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    try { Uint8Array.from(v1); } catch (e) {}
}
new F2();
gc();
