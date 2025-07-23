const v1 = new Int8Array();
function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    v1.fill(a7, [this,this], 4n);
}
try { new F2(v1, Int8Array, v1, v1); } catch (e) {}
gc();
