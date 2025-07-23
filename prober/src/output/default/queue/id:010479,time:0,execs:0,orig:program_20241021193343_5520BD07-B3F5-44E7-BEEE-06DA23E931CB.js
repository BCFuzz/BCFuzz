class C0 {
}
const v3 = new Int32Array(681);
function f4(a5, a6, a7, a8) {
    let v9 = -a5;
    function F10(a12, a13, a14) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v15 = new F10();
    let v16 = v9--;
    v16++;
    let v18 = v16 - v16;
    try { v15.isExtensible(v18); } catch (e) {}
    v18--;
    return v15;
}
v3.map(f4);
gc();
