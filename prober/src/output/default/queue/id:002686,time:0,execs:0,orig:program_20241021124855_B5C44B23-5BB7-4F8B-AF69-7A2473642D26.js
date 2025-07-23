function f0(a1, a2) {
    function F3(a5, a6, a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
    }
    return F3(F3, a1, f0, F3);
}
const v11 = new Float64Array(Float64Array, f0, f0);
v11.toString = f0;
try { v11.copyWithin(v11); } catch (e) {}
gc();
