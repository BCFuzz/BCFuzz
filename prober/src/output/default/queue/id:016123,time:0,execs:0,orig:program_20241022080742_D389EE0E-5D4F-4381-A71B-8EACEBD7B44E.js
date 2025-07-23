const v1 = new Float64Array();
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    let v7;
    try { v7 = a5.m(); } catch (e) {}
    v1.fill(a6, v7);
}
new F2();
gc();
