const v2 = new BigInt64Array();
function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    v2.fill(a8, [F3,F3,F3], 4n);
}
try { new F3(v2, Int8Array, v2, v2); } catch (e) {}
gc();
