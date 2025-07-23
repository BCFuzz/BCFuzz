const v2 = new Int32Array();
function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    v2.fill(4294967297, [this,this,this,this], 4n);
}
try { new F3(); } catch (e) {}
gc();
